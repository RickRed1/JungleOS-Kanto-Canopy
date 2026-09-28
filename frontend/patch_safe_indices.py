with open("src/App.jsx", "r") as f:
    lines = f.readlines()

# Wrap Vaults at line 338
lines[338] = "{activeTab === 'Vaults' && (\n  " + lines[338]
# Find closing div for Vaults card around line 380
for i in range(340, 395):
    if lines[i].strip() == "</div>":
        lines[i] = "</div>\n)}"
        break

# Wrap Docs at line 426 (plus 2 lines shifted from Vault wrap = 428)
docs_idx = 428
lines[docs_idx] = "{activeTab === 'Docs' && (\n  " + lines[docs_idx]
for i in range(docs_idx + 1, docs_idx + 35):
    if lines[i].strip() == "</div>":
        lines[i] = "</div>\n)}"
        break

with open("src/App.jsx", "w") as f:
    f.writelines(lines)

print("Safe index patch applied.")
