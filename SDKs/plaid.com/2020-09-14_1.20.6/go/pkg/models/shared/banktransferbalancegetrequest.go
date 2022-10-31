package shared



type BankTransferBalanceGetRequest struct {
    ClientID *string `json:"client_id,omitempty"`
    OriginationAccountID *string `json:"origination_account_id,omitempty"`
    Secret *string `json:"secret,omitempty"`
    
}

