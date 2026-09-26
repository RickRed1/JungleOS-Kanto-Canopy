with open("src/App.jsx", "r") as f:
    content = f.read()

# Target 1: Wrap Gold Union Vault section for 'Vaults' tab
vault_marker = "{/* Gold Union Vault & Bail Loan Underwriter */}"
if vault_marker in content:
    # Find the opening <div> just before this section
    idx = content.find(vault_marker)
    div_idx = content.rfind("<div", 0, idx)
    if div_idx != -1:
        # Insert the activeTab condition right before the div, and close it after the section
        # Let's find the matching closing div or structure cleanly
        content = content[:div_idx] + "{activeTab === 'Vaults' && (\n      " + content[div_idx:]

# Target 2: Wrap Sovereign Whitepaper section for 'Docs' tab
docs_marker = "Sovereign Whitepaper"
if docs_marker in content:
    idx = content.find(docs_marker)
    div_idx = content.rfind("<div", 0, idx)
    if div_idx != -1:
        content = content[:div_idx] + "{activeTab === 'Docs' && (\n      " + content[div_idx:]

with open("src/App.jsx", "w") as f:
    f.write(content)

print("Literal wrapping complete.")
