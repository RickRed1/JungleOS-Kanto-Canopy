with open("src/App.jsx", "r") as f:
    code = f.read()

# 1. Scope Gold Union Vault section
vault_keyword = "Gold Union Vault & Bail Loan Underwriter"
if vault_keyword in code:
    # Find the container div starting right before this section
    idx = code.find(vault_keyword)
    div_start = code.rfind("<div style={{ background: '#0a0f1d'", 0, idx)
    if div_start == -1:
        div_start = code.rfind("<div", 0, idx)
    
    # Find the closing div of this card block (before the next section)
    next_section = code.find("{/*", idx + len(vault_keyword))
    if next_section != -1:
        div_end = code.rfind("</div>", div_start, next_section)
        if div_end != -1:
            end_pos = div_end + 6
            block = code[div_start:end_pos]
            wrapped = "{activeTab === 'Vaults' && (\n      " + block + "\n    )}"
            code = code[:div_start] + wrapped + code[end_pos:]

# 2. Scope Sovereign Whitepaper section
docs_keyword = "SOVEREIGN WHITEPAPER & SYSTEM ARCHITECTURE"
if docs_keyword not in code:
    docs_keyword = "Sovereign Whitepaper"

if docs_keyword in code:
    idx = code.find(docs_keyword)
    div_start = code.rfind("<div style={{ background: '#0a0f1d'", 0, idx)
    if div_start == -1:
        div_start = code.rfind("<div", 0, idx)
        
    footer_pos = code.find("className=\"fixed bottom-0")
    if footer_pos != -1:
        div_end = code.rfind("</div>", div_start, footer_pos)
        if div_end != -1:
            end_pos = div_end + 6
            block = code[div_start:end_pos]
            wrapped = "{activeTab === 'Docs' && (\n      " + block + "\n    )}"
            code = code[:div_start] + wrapped + code[end_pos:]

with open("src/App.jsx", "w") as f:
    f.write(code)

print("Dynamic scoping patch applied successfully.")
