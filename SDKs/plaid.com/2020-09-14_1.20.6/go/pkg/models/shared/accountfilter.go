package shared

// AccountFilter
// Enumerates the account subtypes that the application wishes for the user to be able to select from. For more details refer to Plaid documentation on account filters.
type AccountFilter struct {
	Credit     []string `json:"credit,omitempty"`
	Depository []string `json:"depository,omitempty"`
	Investment []string `json:"investment,omitempty"`
	Loan       []string `json:"loan,omitempty"`
}
