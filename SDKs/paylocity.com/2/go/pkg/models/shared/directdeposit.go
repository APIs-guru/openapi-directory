package shared

type DirectDepositAdditionalDirectDeposit struct {
	AccountNumber *string  `json:"accountNumber"`
	AccountType   *string  `json:"accountType"`
	Amount        *float64 `json:"amount"`
	AmountType    *string  `json:"amountType"`
	BlockSpecial  *bool    `json:"blockSpecial"`
	IsSkipPreNote *bool    `json:"isSkipPreNote"`
	NameOnAccount *string  `json:"nameOnAccount"`
	PreNoteDate   *string  `json:"preNoteDate"`
	RoutingNumber *string  `json:"routingNumber"`
}

type DirectDepositMainDirectDeposit struct {
	AccountNumber *string `json:"accountNumber"`
	AccountType   *string `json:"accountType"`
	BlockSpecial  *bool   `json:"blockSpecial"`
	IsSkipPreNote *bool   `json:"isSkipPreNote"`
	NameOnAccount *string `json:"nameOnAccount"`
	PreNoteDate   *string `json:"preNoteDate"`
	RoutingNumber *string `json:"routingNumber"`
}

type DirectDeposit struct {
	AdditionalDirectDeposit []DirectDepositAdditionalDirectDeposit `json:"additionalDirectDeposit"`
	MainDirectDeposit       *DirectDepositMainDirectDeposit        `json:"mainDirectDeposit"`
}
