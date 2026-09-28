with open("src/App.jsx", "r") as f:
    lines = f.readlines()

# We know from inspection that the Vault container card starts at line 338 and ends around line 380
# The Docs container card starts at line 426 and ends around line 443

# Wrap Vaults
lines[338] = "{activeTab === 'Vaults' && (\n  " + lines[338]
for i in range(340, 395):
    if lines[i].strip() == "</div>":
        lines[i] = "</div>\n)}"
        break

# Wrap Docs (adjusting for line shift from Vault wrap)
docs_start_idx = 426 + 2 # account for added wrapper lines
lines[docs_start_idx] = "{activeTab === 'Docs' && (\n  " + lines[docs_start_idx]
for i in range(docs_start_idx + 1, docs_start_idx + 30):
    if lines[i].strip() == "</div>":
        lines[i] = "</div>\n)}"
        break

with open("src/App.jsx", "w") as f:
    f.writelines(lines)

print("Exact line patch applied.")
