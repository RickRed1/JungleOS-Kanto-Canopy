with open("src/App.jsx", "r") as f:
    lines = f.readlines()

# Clean up and wrap Vaults section (Card starts at line 345: <div style={{ background: '#0a0f1d', border: '2px solid #eab308'... }):
vault_start = -1
for i, line in enumerate(lines):
    if "Gold Union Vault & Bail Loan Underwriter" in line:
        vault_start = i - 1  # the opening div is right above the comment/title
        break

vault_end = -1
if vault_start != -1:
    # Find the closing </div> for this card block
    open_divs = 0
    for i in range(vault_start, len(lines)):
        open_divs += lines[i].count("<div")
        open_divs -= lines[i].count("</div>")
        if open_divs == 0:
            vault_end = i
            break

# Clean up and wrap Docs section (Card starts right above Sovereign Whitepaper comment around line 435-437)
docs_start = -1
for i, line in enumerate(lines):
    if "Sovereign Whitepaper" in line or "SOVEREIGN WHITEPAPER" in line:
        docs_start = i - 1
        break

docs_end = -1
if docs_start != -1:
    open_divs = 0
    for i in range(docs_start, len(lines)):
        open_divs += lines[i].count("<div")
        open_divs -= lines[i].count("</div>")
        if open_divs == 0:
            docs_end = i
            break

# Apply wrappers if valid bounds found
if vault_start != -1 and vault_end != -1:
    lines[vault_start] = "{activeTab === 'Vaults' && (\n  " + lines[vault_start]
    lines[vault_end] = lines[vault_end].strip() + "\n)}\n"

if docs_start != -1 and docs_end != -1:
    lines[docs_start] = "{activeTab === 'Docs' && (\n  " + lines[docs_start]
    lines[docs_end] = lines[docs_end].strip() + "\n)}\n"

with open("src/App.jsx", "w") as f:
    f.writelines(lines)

print("Clean final patch applied successfully.")
