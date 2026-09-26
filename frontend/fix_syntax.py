with open("src/App.jsx", "r") as f:
    content = f.read()

# Let's fix the Gold Union Vault wrapper specifically
target = "{/* Gold Union Vault & Bail Loan Underwriter */}"
if target in content:
    idx = content.find(target)
    # Find the opening div before this comment
    div_idx = content.rfind("<div", 0, idx)
    if div_idx != -1:
        # Insert opening wrapper
        content = content[:div_idx] + "{activeTab === 'Vaults' && (\n      " + content[div_idx:]

        # Now find the matching closing div for this block (roughly 15 lines down or look for the next section comment)
        # Let's find the next comment or major section after the vault
        next_section = "{/*"
        next_idx = content.find(next_section, idx + len(target))
        if next_idx != -1:
            # Insert closing parens just before the next section
            # We want to find the last </div> before next_idx
            last_div = content.rfind("</div>", idx, next_idx)
            if last_div != -1:
                insert_pos = last_div + len("</div>")
                content = content[:insert_pos] + "\n      )}" + content[insert_pos:]

with open("src/App.jsx", "w") as f:
    f.write(content)

print("Syntax fix script completed.")
