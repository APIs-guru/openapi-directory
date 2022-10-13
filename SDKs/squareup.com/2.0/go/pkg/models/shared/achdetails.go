package shared

type AchDetails struct {
	AccountNumberSuffix *string `json:"account_number_suffix"`
	AccountType         *string `json:"account_type"`
	RoutingNumber       *string `json:"routing_number"`
}
