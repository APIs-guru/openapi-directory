package shared



type GetBankAccountResponse struct {
    BankAccount *BankAccount `json:"bank_account,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

