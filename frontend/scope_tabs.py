with open("src/App.jsx", "r") as f:
    content = f.read()

# We want to identify the three major blocks and wrap them:
# Block 1: Main Vault Interface -> activeTab === 'Home' (or default)
# Block 2: Gold Union Vault -> activeTab === 'Vaults'
# Block 3: Sovereign Whitepaper -> activeTab === 'Docs'

# Let's check how they are currently structured and wrap them cleanly.
# First, let's remove any existing broken wrappers if any remain
content = content.replace("{activeTab === 'Vaults' && (\n      ", "")
content = content.replace("{activeTab === 'Notary' && (\n      ", "")

# Let's wrap Gold Union Vault
vault_marker = "{/* Gold Union Vault & Bail Loan Underwriter */}"
if vault_marker in content and "activeTab === 'Vaults'" not in content:
    idx = content.find(vault_marker)
    div_idx = content.rfind("<div", 0, idx)
    if div_idx != -1:
        content = content[:div_idx] + "{activeTab === 'Vaults' && (\n      " + content[div_idx:]
        # Find closing div before next section
        next_idx = content.find("{/*", div_idx + len(vault_marker))
        if next_idx != -1:
            last_div = content.rfind("</div>", div_idx, next_idx)
            if last_div != -1:
                insert_pos = last_div + len("</div>")
                content = content[:insert_pos] + "\n      )}" + content[insert_pos:]

# Let's wrap Sovereign Whitepaper / Docs
docs_marker = "{/* SOVEREIGN WHITEPAPER & SYSTEM ARCHITECTURE */}"
if docs_marker not in content:
    docs_marker = "{/* Sovereign Whitepaper"
if docs_marker in content and "activeTab === 'Docs'" not in content:
    idx = content.find(docs_marker)
    div_idx = content.rfind("<div", 0, idx)
    if div_idx != -1:
        content = content[:div_idx] + "{activeTab === 'Docs' && (\n      " + content[div_idx:]
        # Find closing div near the bottom before footer/nav
        footer_idx = content.rfind("<div className=\"fixed bottom-0")
        if footer_idx != -1:
            last_div = content.rfind("</div>", div_idx, footer_idx)
            if last_div != -1:
                insert_pos = last_div + len("</div>")
                content = content[:insert_pos] + "\n      )}" + content[insert_pos:]

with open("src/App.jsx", "w") as f:
    f.write(content)

print("Tabs scoped successfully.")
