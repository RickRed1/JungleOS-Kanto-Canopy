with open("src/App.jsx", "r") as f:
    lines = f.readlines()

# Let's wrap Gold Union Vault (around line 347)
# Find opening div above line 347
for i in range(347, max(0, 347-30), -1):
    if "<div" in lines[i]:
        lines[i] = "{activeTab === 'Vaults' && (\n  " + lines[i]
        break

# Find closing div below line 347
for i in range(347, min(len(lines), 347+50)):
    if "</div>" in lines[i]:
        lines[i] = lines[i] + "\n)}"
        break

# Let's wrap Sovereign Whitepaper (around line 437)
for i in range(437, max(0, 437-30), -1):
    if "<div" in lines[i]:
        lines[i] = "{activeTab === 'Docs' && (\n  " + lines[i]
        break

for i in range(437, min(len(lines), 437+50)):
    if "</div>" in lines[i]:
        lines[i] = lines[i] + "\n)}"
        break

with open("src/App.jsx", "w") as f:
    f.writelines(lines)

print("Line-based wrapping applied successfully.")
