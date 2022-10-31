package shared



type DirectDepositAdditionalDirectDeposit struct {
    AccountNumber *string `json:"accountNumber,omitempty"`
    AccountType *string `json:"accountType,omitempty"`
    Amount *float64 `json:"amount,omitempty"`
    AmountType *string `json:"amountType,omitempty"`
    BlockSpecial *bool `json:"blockSpecial,omitempty"`
    IsSkipPreNote *bool `json:"isSkipPreNote,omitempty"`
    NameOnAccount *string `json:"nameOnAccount,omitempty"`
    PreNoteDate *string `json:"preNoteDate,omitempty"`
    RoutingNumber *string `json:"routingNumber,omitempty"`
    
}

type DirectDepositMainDirectDeposit struct {
    AccountNumber *string `json:"accountNumber,omitempty"`
    AccountType *string `json:"accountType,omitempty"`
    BlockSpecial *bool `json:"blockSpecial,omitempty"`
    IsSkipPreNote *bool `json:"isSkipPreNote,omitempty"`
    NameOnAccount *string `json:"nameOnAccount,omitempty"`
    PreNoteDate *string `json:"preNoteDate,omitempty"`
    RoutingNumber *string `json:"routingNumber,omitempty"`
    
}

type DirectDeposit struct {
    AdditionalDirectDeposit []DirectDepositAdditionalDirectDeposit `json:"additionalDirectDeposit,omitempty"`
    MainDirectDeposit *DirectDepositMainDirectDeposit `json:"mainDirectDeposit,omitempty"`
    
}

