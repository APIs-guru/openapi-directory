package shared

type BankTransferBalanceGetRequest struct {
	ClientID             *string `json:"client_id"`
	OriginationAccountID *string `json:"origination_account_id"`
	Secret               *string `json:"secret"`
}
