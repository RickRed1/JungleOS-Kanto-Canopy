with open("src/App.jsx", "r") as f:
    code = f.read()

# Wrap Gold Union Vault section for 'Vaults' tab
gold_comment = "{/* Gold Union Vault & Bail Loan Underwriter */}"
if gold_comment in code:
    idx = code.find(gold_comment)
    div_start = code.rfind("<div", 0, idx)
    next_comment = code.find("{/*", idx)
    if next_comment != -1:
        div_end = code.rfind("</div>", div_start, next_comment)
        if div_end != -1:
            end_pos = div_end + 6
            block = code[div_start:end_pos]
            wrapped = "{activeTab === 'Vaults' && (\n      " + block + "\n    )}"
            code = code[:div_start] + wrapped + code[end_pos:]

# Wrap Sovereign Whitepaper section for 'Docs' tab
doc_comment = "{/* SOVEREIGN WHITEPAPER & SYSTEM ARCHITECTURE */}"
if doc_comment not in code:
    doc_comment = "{/* Sovereign Whitepaper"

if doc_comment in code:
    idx = code.find(doc_comment)
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

print("App.jsx successfully patched.")
