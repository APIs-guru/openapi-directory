package shared

type DepositSwitchCreateRequestOptions struct {
	TransactionItemAccessTokens []string `json:"transaction_item_access_tokens"`
	Webhook                     *string  `json:"webhook"`
}
