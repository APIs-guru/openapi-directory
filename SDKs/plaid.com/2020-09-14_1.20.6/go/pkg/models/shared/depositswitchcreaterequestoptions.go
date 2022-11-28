package shared

// DepositSwitchCreateRequestOptions
// Options to configure the `/deposit_switch/create` request. If provided, cannot be `null`.
type DepositSwitchCreateRequestOptions struct {
	TransactionItemAccessTokens []string `json:"transaction_item_access_tokens,omitempty"`
	Webhook                     *string  `json:"webhook,omitempty"`
}
