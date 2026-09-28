with open("src/App.jsx", "r") as f:
    lines = f.readlines()

gold_idx = -1
docs_idx = -1

for idx, line in enumerate(lines):
    if "Gold Union Vault & Bail Loan Underwriter" in line:
        gold_idx = idx
    if "SOVEREIGN WHITEPAPER" in line or "Sovereign Whitepaper" in line:
        docs_idx = idx

# Helper function to wrap a block safely by counting div balance
def wrap_block(start_marker_idx, tab_name):
    # Find the nearest container <div style or <div className above the marker
    div_start = start_marker_idx
    for i in range(start_marker_idx, max(0, start_marker_idx - 6), -1):
        if "<div" in lines[i]:
            div_start = i
            break
            
    # Count opening and closing divs to find exact block end
    open_divs = 0
    div_end = div_start
    for i in range(div_start, len(lines)):
        open_divs += lines[i].count("<div")
        open_divs -= lines[i].count("</div>")
        if open_divs <= 0:
            div_end = i
            break
            
    lines[div_start] = "{activeTab === '" + tab_name + "' && (\n  " + lines[div_start]
    lines[div_end] = lines[div_end] + "\n)}"

if gold_idx != -1:
    wrap_block(gold_idx, "Vaults")

if docs_idx != -1:
    wrap_block(docs_idx, "Docs")

with open("src/App.jsx", "w") as f:
    f.writelines(lines)

print("Robust pristine patch applied successfully.")
