with open("src/App.jsx", "r") as f:
    text = f.read()

# Marker 1: Gold Union Vault
g_marker = "{/* Gold Union Vault & Bail Loan Underwriter */}"
if g_marker in text:
    pos = text.find(g_marker)
    div_start = text.rfind("<div", 0, pos)
    next_comment = text.find("{/*", pos)
    if next_comment != -1:
        div_end = text.rfind("</div>", div_start, next_comment)
        if div_end != -1:
            end_pos = div_end + 6
            wrapped = "{activeTab === 'Vaults' && (\n      " + text[div_start:end_pos] + "\n      )}"
            text = text[:div_start] + wrapped + text[end_pos:]

# Marker 2: Sovereign Whitepaper
s_marker = "{/* SOVEREIGN WHITEPAPER & SYSTEM ARCHITECTURE */}"
if s_marker not in text:
    s_marker = "{/* Sovereign Whitepaper"

if s_marker in text:
    pos = text.find(s_marker)
    div_start = text.rfind("<div", 0, pos)
    footer_pos = text.find("<div className=\"fixed bottom-0")
    if footer_pos != -1:
        div_end = text.rfind("</div>", div_start, footer_pos)
        if div_end != -1:
            end_pos = div_end + 6
            wrapped = "{activeTab === 'Docs' && (\n      " + text[div_start:end_pos] + "\n      )}"
            text = text[:div_start] + wrapped + text[end_pos:]

with open("src/App.jsx", "w") as f:
    f.write(text)

print("Scoping script executed successfully.")
