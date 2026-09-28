with open("src/App.jsx", "r") as f:
    text = f.read()

# Let's find the exact block for Vaults and wrap it
vault_header = "Gold Union Vault & Bail Loan Underwriter"
pos = text.find(vault_header)
if pos != -1:
    # Find the opening <div style before this header
    div_pos = text.rfind("<div style", 0, pos)
    if div_pos != -1:
        # Find the closing </div></div> for this specific card
        # Let us find the second closing div after the header
        end_pos = text.find("</div>\n      </div>", pos)
        if end_pos != -1:
            end_target = end_pos + len("</div>\n      </div>")
            text = text[:div_pos] + "{activeTab === 'Vaults' && (\n      " + text[div_pos:end_target] + "\n)}\n" + text[end_target:]

# Let's find the exact block for Docs and wrap it
docs_header = "Sovereign Whitepaper"
pos_docs = text.find(docs_header)
if pos_docs != -1:
    div_pos_docs = text.rfind("<div style", 0, pos_docs)
    if div_pos_docs != -1:
        end_pos_docs = text.find("</div>\n      </div>", pos_docs)
        if end_pos_docs != -1:
            end_target_docs = end_pos_docs + len("</div>\n      </div>")
            text = text[:div_pos_docs] + "{activeTab === 'Docs' && (\n      " + text[div_pos_docs:end_target_docs] + "\n)}\n" + text[end_target_docs:]

with open("src/App.jsx", "w") as f:
    f.write(text)

print("Safe string-slice wrapping applied.")
