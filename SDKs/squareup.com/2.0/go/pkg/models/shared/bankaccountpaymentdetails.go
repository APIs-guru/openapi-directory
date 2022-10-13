package shared

type BankAccountPaymentDetails struct {
	AccountOwnershipType *string     `json:"account_ownership_type"`
	AchDetails           *AchDetails `json:"ach_details"`
	BankName             *string     `json:"bank_name"`
	Country              *string     `json:"country"`
	Errors               []Error     `json:"errors"`
	Fingerprint          *string     `json:"fingerprint"`
	StatementDescription *string     `json:"statement_description"`
	TransferType         *string     `json:"transfer_type"`
}
