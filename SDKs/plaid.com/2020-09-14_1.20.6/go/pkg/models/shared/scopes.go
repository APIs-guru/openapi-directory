package shared

// Scopes
// The scopes object
type Scopes struct {
	Accounts      []AccountAccess        `json:"accounts,omitempty"`
	NewAccounts   *bool                  `json:"new_accounts,omitempty"`
	ProductAccess map[string]interface{} `json:"product_access,omitempty"`
}
