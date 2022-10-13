package shared

type GetBankAccountByV1IDResponse struct {
	BankAccount *BankAccount `json:"bank_account"`
	Errors      []Error      `json:"errors"`
}
