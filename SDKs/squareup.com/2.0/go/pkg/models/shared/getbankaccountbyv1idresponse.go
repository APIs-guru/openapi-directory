package shared

type GetBankAccountByV1IDResponse struct {
	BankAccount *BankAccount `json:"bank_account,omitempty"`
	Errors      []Error      `json:"errors,omitempty"`
}
