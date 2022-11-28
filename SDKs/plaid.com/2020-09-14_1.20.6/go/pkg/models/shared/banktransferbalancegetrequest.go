package shared

// BankTransferBalanceGetRequest
// BankTransferBalanceGetRequest defines the request schema for `/bank_transfer/balance/get`
type BankTransferBalanceGetRequest struct {
	ClientID             *string `json:"client_id,omitempty"`
	OriginationAccountID *string `json:"origination_account_id,omitempty"`
	Secret               *string `json:"secret,omitempty"`
}
