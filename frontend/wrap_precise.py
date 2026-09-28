with open("src/App.jsx", "r") as f:
    lines = f.readlines()

# Wrap Vaults at line 339
# Insert activeTab check right before line 339
lines[339] = "{activeTab === 'Vaults' && (\n  " + lines[339]

# Find the closing div for Vaults (around line 380-400 where this card ends)
for i in range(340, 420):
    if "</div>" in lines[i] and ("</form>" in lines[i-1] or "</div>" in lines[i-1] or "</div>" in lines[i-2]):
        lines[i] = lines[i] + "\n)}"
        break

# Wrap Docs at line 427
lines[427] = "{activeTab === 'Docs' && (\n  " + lines[427]

# Find the closing div for Docs (around line 440-460)
for i in range(428, len(lines)):
    if "</div>" in lines[i] and ("</p>" in lines[i-1] or "</div>" in lines[i-1]):
        lines[i] = lines[i] + "\n)}"
        break

with open("src/App.jsx", "w") as f:
    f.writelines(lines)

print("Precise wrapping complete.")
