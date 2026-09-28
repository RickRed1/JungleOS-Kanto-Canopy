with open("src/App.jsx", "r") as f:
    content = f.read()

# Wrap Gold Union Vault in activeTab === 'Vaults'
v_marker = "{/* Gold Union Vault & Bail Loan Underwriter */}"
if v_marker in content:
    idx = content.find(v_marker)
    div_idx = content.rfind("<div", 0, idx)
    if div_idx != -1:
        content = content[:div_idx] + "{activeTab === 'Vaults' && (\n      " + content[div_idx:]
        # Find closing div before the next section
        next_idx = content.find("{/*", div_idx + len(v_marker))
        if next_idx != -1:
            last_div = content.rfind("</div>", div_idx, next_idx)
            if last_div != -1:
                content = content[:last_div + 6] + "\n      )}" + content[last_div + 6:]

# Wrap Sovereign Whitepaper in activeTab === 'Docs'
d_marker = "{/* SOVEREIGN WHITEPAPER & SYSTEM ARCHITECTURE */}"
if d_marker not in content:
    d_marker = "{/* Sovereign Whitepaper"
if d_marker in content:
    idx = content.find(d_marker)
    div_idx = content.rfind("<div", 0, idx)
    if div_idx != -1:
        content = content[:div_idx] + "{activeTab === 'Docs' && (\n      " + content[div_idx:]
        # Find the footer/nav wrapper or end of return
        footer_idx = content.rfind("className=\"fixed bottom-0")
        if footer_idx != -1:
            last_div = content.rfind("</div>", div_idx, footer_idx)
            if last_div != -1:
                content = content[:last_div + 6] + "\n      )}" + content[last_div + 6:]

with open("src/App.jsx", "w") as f:
    f.write(content)

print("Clean scoping applied.")
