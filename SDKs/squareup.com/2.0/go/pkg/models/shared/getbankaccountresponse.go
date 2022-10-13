package shared

type GetBankAccountResponse struct {
	BankAccount *BankAccount `json:"bank_account"`
	Errors      []Error      `json:"errors"`
}
