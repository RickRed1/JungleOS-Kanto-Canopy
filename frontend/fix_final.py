with open("src/App.jsx", "r") as f:
    content = f.read()

# Target 1: Gold Union Vault -> Wrap in {activeTab === 'Vaults' && ( ... )}
v_start = "{/* Gold Union Vault & Bail Loan Underwriter */}"
if v_start in content:
    idx = content.find(v_start)
    div_idx = content.rfind("<div", 0, idx)
    # Find the closing <div> of this section (the second closing div after the start)
    end_div_idx = content.find("</div>", idx)
    if div_idx != -1 and end_div_idx != -1:
        # Find the outer wrapper closing div
        second_end = content.find("</div>", end_div_idx + 6)
        if second_end != -1:
            close_pos = second_end + 6
            content = content[:div_idx] + "{activeTab === 'Vaults' && (\n      " + content[div_idx:close_pos] + "\n      )}" + content[close_pos:]

# Target 2: Sovereign Whitepaper -> Wrap in {activeTab === 'Docs' && ( ... )}
d_start = "{/* SOVEREIGN WHITEPAPER & SYSTEM ARCHITECTURE */}"
if d_start not in content:
    d_start = "{/* Sovereign Whitepaper"
if d_start in content:
    idx = content.find(d_start)
    div_idx = content.rfind("<div", 0, idx)
    # Find the end of this whitepaper section block
    end_block = content.find("</div>\n    </div>", idx)
    if div_idx != -1 and end_block != -1:
        close_pos = end_block + 14
        content = content[:div_idx] + "{activeTab === 'Docs' && (\n      " + content[div_idx:close_pos] + "\n      )}" + content[close_pos:]

with open("src/App.jsx", "w") as f:
    f.write(content)

print("Final clean scoping applied.")
