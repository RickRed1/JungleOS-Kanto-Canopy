with open("src/App.jsx", "r") as f:
    content = f.read()

# Target Vaults card container div uniquely
vault_target = 'style={{ background: \'#0a0f1d\', border: \'2px solid #eab308\''
vault_replacement = '{activeTab === "Vaults" && (\n      <div style={{ background: \'#0a0f1d\', border: \'2px solid #eab308\''

# Target Docs card container div uniquely
docs_target = 'style={{ background: \'#0a0f1d\', border: \'2px solid #3b82f6\''
docs_replacement = '{activeTab === "Docs" && (\n      <div style={{ background: \'#0a0f1d\', border: \'2px solid #3b82f6\''

if vault_target in content:
    content = content.replace(vault_target, vault_replacement, 1)
    # Find the closing divs for this card and close the JSX expression
    # We look for the specific card closing pattern
    vault_close_target = '</div>\n      </div>'
    # Replace the first occurrence after the vault header
    content = content.replace(vault_close_target, '</div>\n      </div>\n)}', 1)

if docs_target in content:
    content = content.replace(docs_target, docs_replacement, 1)
    docs_close_target = '</div>\n      </div>'
    content = content.replace(docs_close_target, '</div>\n      </div>\n)}', 1)

with open("src/App.jsx", "w") as f:
    f.write(content)

print("Clean attribute-targeted patch applied.")
