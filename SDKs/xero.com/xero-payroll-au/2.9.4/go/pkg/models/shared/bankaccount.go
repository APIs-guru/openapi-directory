package shared



type BankAccount struct {
    AccountName *string `json:"AccountName,omitempty"`
    AccountNumber *string `json:"AccountNumber,omitempty"`
    Amount *float64 `json:"Amount,omitempty"`
    Bsb *string `json:"BSB,omitempty"`
    Remainder *bool `json:"Remainder,omitempty"`
    StatementText *string `json:"StatementText,omitempty"`
    
}

