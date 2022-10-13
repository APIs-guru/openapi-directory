package shared

type ListBankAccountsResponse struct {
	BankAccounts []BankAccount `json:"bank_accounts"`
	Cursor       *string       `json:"cursor"`
	Errors       []Error       `json:"errors"`
}
