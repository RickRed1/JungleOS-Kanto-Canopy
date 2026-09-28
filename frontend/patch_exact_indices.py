with open("src/App.jsx", "r") as f:
    lines = f.readlines()

# Vaults section: Wrap starting at line 338
lines[338] = "{activeTab === 'Vaults' && (\n  " + lines[338]

# Find the closing div for Vaults card (around line 380-385)
for i in range(340, 395):
    if lines[i].strip() == "</div>":
        lines[i] = "</div>\n)}"
        break

# Docs section: Wrap starting at line 426
lines[426] = "{activeTab === 'Docs' && (\n  " + lines[426]

# Find the closing div for Docs card (around line 440-445)
for i in range(428, 455):
    if lines[i].strip() == "</div>":
        lines[i] = "</div>\n)}"
        break

with open("src/App.jsx", "w") as f:
    f.writelines(lines)

print("Exact index patch applied.")
