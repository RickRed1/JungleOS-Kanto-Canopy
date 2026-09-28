import re

with open("src/App.jsx", "r") as f:
    content = f.read()

# Strip any existing activeTab conditional wrappers completely
content = re.sub(r'\{activeTab === \'[A-Za-z]+\' && \(\s*', '', content)
content = re.sub(r'\s*\)\}', '', content)

# Scope Gold Union Vault to 'Vaults' tab
v_start = "{/* Gold Union Vault & Bail Loan Underwriter */}"
if v_start in content:
    idx = content.find(v_start)
    div_idx = content.rfind("<div", 0, idx)
    end_div = content.find("</div>", idx)
    if div_idx != -1 and end_div != -1:
        second_end = content.find("</div>", end_div + 6)
        if second_end != -1:
            close_pos = second_end + 6
            content = content[:div_idx] + "{activeTab === 'Vaults' && (\n      " + content[div_idx:close_pos] + "\n      )}" + content[close_pos:]

# Scope Sovereign Whitepaper to 'Docs' tab
d_start = "{/* SOVEREIGN WHITEPAPER & SYSTEM ARCHITECTURE */}"
if d_start not in content:
    d_start = "{/* Sovereign Whitepaper"
if d_start in content:
    idx = content.find(d_start)
    div_idx = content.rfind("<div", 0, idx)
    end_block = content.find("</div>\n    </div>", idx)
    if div_idx != -1 and end_block != -1:
        close_pos = end_block + 14
        content = content[:div_idx] + "{activeTab === 'Docs' && (\n      " + content[div_idx:close_pos] + "\n      )}" + content[close_pos:]

with open("src/App.jsx", "w") as f:
    f.write(content)

print("Clean and scope complete.")
