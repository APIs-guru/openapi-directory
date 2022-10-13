package shared

type BankAccount struct {
	AccountName   *string  `json:"AccountName"`
	AccountNumber *string  `json:"AccountNumber"`
	Amount        *float64 `json:"Amount"`
	Bsb           *string  `json:"BSB"`
	Remainder     *bool    `json:"Remainder"`
	StatementText *string  `json:"StatementText"`
}
