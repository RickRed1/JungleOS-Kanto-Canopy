with open("src/App.jsx", "r") as f:
    lines = f.readlines()

new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    
    # Check for Vaults card heading
    if "Gold Union Vault & Bail Loan Underwriter" in line:
        # Go backward to find the card's opening <div style
        for j in range(len(new_lines) - 1, max(0, len(new_lines) - 8), -1):
            if "<div style" in new_lines[j]:
                new_lines[j] = "{activeTab === 'Vaults' && (\n" + new_lines[j]
                break
        new_lines.append(line)
        # Look ahead a few lines to find the card's closing </div></div> pair and close the JSX expression
        # We will append the closing )} after the next few lines where the card ends
        continue
        
    elif "Sovereign Whitepaper" in line:
        for j in range(len(new_lines) - 1, max(0, len(new_lines) - 8), -1):
            if "<div style" in new_lines[j]:
                new_lines[j] = "{activeTab === 'Docs' && (\n" + new_lines[j]
                break
        new_lines.append(line)
        continue

    # Alternatively, let us use exact index inspection from our pristine source:
    # Let us just write the exact safe indices for Vaults (starts ~338) and Docs (starts ~426)
    new_lines.append(line)
    i += 1

with open("src/App.jsx", "w") as f:
    f.writelines(new_lines)

print("Exact patch script template ready.")
