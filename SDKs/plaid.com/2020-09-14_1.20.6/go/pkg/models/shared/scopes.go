package shared

type Scopes struct {
	Accounts      []AccountAccess        `json:"accounts"`
	NewAccounts   *bool                  `json:"new_accounts"`
	ProductAccess map[string]interface{} `json:"product_access"`
}
