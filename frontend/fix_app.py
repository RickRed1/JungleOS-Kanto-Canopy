with open("src/App.jsx", "r") as f:
    lines = f.readlines()

new_lines = []
skip_mode = False

for line in lines:
    # Remove any stray malformed activeTab wrappers in this section
    if "activeTab === 'Notary'" in line or "activeTab === 'Vaults'" in line:
        continue
    new_lines.append(line)

content = "".join(new_lines)

# Now let's safely insert the Vaults wrapper right before the Gold Union Vault div
vault_marker = "{/* Gold Union Vault & Bail Loan Underwriter */}"
if vault_marker in content:
    idx = content.find(vault_marker)
    div_idx = content.rfind("<div", 0, idx)
    if div_idx != -1:
        # Insert wrapper opening
        content = content[:div_idx] + "{activeTab === 'Vaults' && (\n      " + content[div_idx:]
        
        # Find the closing div of this section and close the parenthesis
        end_idx = content.find("{/*", div_idx + len(vault_marker))
        if end_idx != -1:
            last_div = content.rfind("</div>", div_idx, end_idx)
            if last_div != -1:
                insert_pos = last_div + len("</div>")
                content = content[:insert_pos] + "\n      )}" + content[insert_pos:]

with open("src/App.jsx", "w") as f:
    f.write(content)

print("App.jsx sanitized and wrapped cleanly.")
