with open("src/App.jsx", "r") as f:
    content = f.read()

# Let's verify our targets and wrap them safely
# We want to find specific sections and wrap them in {activeTab === 'Name' && ( ... )}

# Helper function to wrap a section starting at a marker
def wrap_section(marker, tab_name):
    global content
    if marker in content and f"activeTab === '{tab_name}'" not in content:
        idx = content.find(marker)
        # Find the opening <div preceding the marker
        div_idx = content.rfind("<div", 0, idx)
        if div_idx != -1:
            # Insert wrapper opening before div
            content = content[:div_idx] + f"{{activeTab === '{tab_name}' && (\n      " + content[div_idx:]
            # Now find a suitable closing point (e.g., matching closing div or next major section)
            # For simplicity, let's look for the next tab comment or end of return
            print(f"Successfully wrapped {tab_name} at index {div_idx}")

# Let's check markers for Vaults and Docs/Whitepaper
wrap_section("Gold Union Vault", "Vaults")
wrap_section("Sovereign Whitepaper", "Docs")

with open("src/App.jsx", "w") as f:
    f.write(content)

print("Proper wrapping script executed.")
