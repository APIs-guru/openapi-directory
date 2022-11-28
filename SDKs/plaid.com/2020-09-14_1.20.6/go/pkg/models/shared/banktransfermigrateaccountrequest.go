package shared

// BankTransferMigrateAccountRequest
// BankTransferMigrateAccountRequest defines the request schema for `/bank_transfer/migrate_account`
type BankTransferMigrateAccountRequest struct {
	AccountNumber string  `json:"account_number"`
	AccountType   string  `json:"account_type"`
	ClientID      *string `json:"client_id,omitempty"`
	RoutingNumber string  `json:"routing_number"`
	Secret        *string `json:"secret,omitempty"`
}
