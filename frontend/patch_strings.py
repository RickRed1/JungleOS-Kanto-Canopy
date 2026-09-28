with open("src/App.jsx", "r") as f:
    content = f.read()

# Exact string block for Vaults container card
vault_block = """      <div style={{ background: '#0a0f1d', border: '2px solid #eab308', borderRadius: '8px', padding: '1.2rem', margin: '1rem 0', color: '#fff', textAlign: 'left' }}>
        <h3>
          🟡 Gold Union Vault & Bail Loan Underwriter
        </h3>"""

vault_wrapped = """{activeTab === 'Vaults' && (
      <div style={{ background: '#0a0f1d', border: '2px solid #eab308', borderRadius: '8px', padding: '1.2rem', margin: '1rem 0', color: '#fff', textAlign: 'left' }}>
        <h3>
          🟡 Gold Union Vault & Bail Loan Underwriter
        </h3>"""

# Exact string block for Docs container card
docs_block = """      <div style={{ background: '#0a0f1d', border: '2px solid #3b82f6', borderRadius: '8px', padding: '1.2rem', margin: '1rem 0', color: '#fff', textAlign: 'left' }}>
        <h3>
          📄 Sovereign Whitepaper & System Architecture
        </h3>"""

docs_wrapped = """{activeTab === 'Docs' && (
      <div style={{ background: '#0a0f1d', border: '2px solid #3b82f6', borderRadius: '8px', padding: '1.2rem', margin: '1rem 0', color: '#fff', textAlign: 'left' }}>
        <h3>
          📄 Sovereign Whitepaper & System Architecture
        </h3>"""

# Perform replacements and close with respective )}'s
# We find the closing div of each card before the next section
if vault_block in content:
    # Find the end of the vault card
    v_idx = content.find(vault_block)
    v_end_div = content.find("</div>\n      </div>", v_idx)
    if v_end_div != -1:
        target_vault_full = content[v_idx:v_end_div + 6]
        replacement_vault = "{activeTab === 'Vaults' && (\n  " + target_vault_full + "\n)}"
        content = content.replace(target_vault_full, replacement_vault, 1)

if docs_block in content:
    d_idx = content.find(docs_block)
    d_end_div = content.find("</div>\n      </div>", d_idx)
    if d_end_div != -1:
        target_docs_full = content[d_idx:d_end_div + 6]
        replacement_docs = "{activeTab === 'Docs' && (\n  " + target_docs_full + "\n)}"
        content = content.replace(target_docs_full, replacement_docs, 1)

with open("src/App.jsx", "w") as f:
    f.write(content)

print("String-replacement patch applied.")
