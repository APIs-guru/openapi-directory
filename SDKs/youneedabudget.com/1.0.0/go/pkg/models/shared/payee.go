package shared



type Payee struct {
    Deleted bool `json:"deleted"`
    ID string `json:"id"`
    Name string `json:"name"`
    TransferAccountID *string `json:"transfer_account_id,omitempty"`
    
}

