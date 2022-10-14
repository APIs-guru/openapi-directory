package shared

type BankAccountPaymentDetails struct {
	AccountOwnershipType *string     `json:"account_ownership_type,omitempty"`
	AchDetails           *AchDetails `json:"ach_details,omitempty"`
	BankName             *string     `json:"bank_name,omitempty"`
	Country              *string     `json:"country,omitempty"`
	Errors               []Error     `json:"errors,omitempty"`
	Fingerprint          *string     `json:"fingerprint,omitempty"`
	StatementDescription *string     `json:"statement_description,omitempty"`
	TransferType         *string     `json:"transfer_type,omitempty"`
}
