with open("src/App.jsx", "r") as f:
    code = f.read()

# Let's find the main content blocks and wrap them based on unique identifiers
# Vaults section marker: Gold Union Vault
if "{/* Gold Union Vault & Bail Loan Underwriter */}" in code:
    code = code.replace(
        "{/* Gold Union Vault & Bail Loan Underwriter */}",
        "{activeTab === 'Vaults' && (\n    <div className=\"mb-6 bg-slate-900 border border-amber-500/30 rounded-2xl p-6 shadow-2xl\">\n      {/* Gold Union Vault & Bail Loan Underwriter */}"
    )
    # We need to close it. Let's find where this section ends (before the next section)
    # A safe place is right before the next major comment or header

print("Safe script template ready.")
