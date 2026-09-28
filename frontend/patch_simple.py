with open("src/App.jsx", "r") as f:
    lines = f.readlines()

new_lines = []
skip_next_div_closing = False

for i, line in enumerate(lines):
    # Check for Gold Union Vault section header
    if "Gold Union Vault & Bail Loan Underwriter" in line:
        # The container div is typically 2 lines above
        # Let us insert the activeTab check right before the card container div
        # Find the nearest <div style backward
        for j in range(len(new_lines) - 1, max(0, len(new_lines) - 10), -1):
            if "<div style" in new_lines[j]:
                new_lines[j] = "{activeTab === 'Vaults' && (\n" + new_lines[j]
                break
        new_lines.append(line)
        # We also need to append the closing )]} after this card's closing div.
        # Let's flag that we are inside Vaults card.
    elif "SOVEREIGN WHITEPAPER" in line or "Sovereign Whitepaper" in line:
        for j in range(len(new_lines) - 1, max(0, len(new_lines) - 10), -1):
            if "<div style" in new_lines[j]:
                new_lines[j] = "{activeTab === 'Docs' && (\n" + new_lines[j]
                break
        new_lines.append(line)
    else:
        new_lines.append(line)

# Let's write a cleaner approach using explicit line indices found from inspection:
# Vaults card container is at line 338, ends around line 380
# Docs card container is at line 426, ends around line 443
