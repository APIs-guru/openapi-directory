package shared

type SearchLoyaltyAccountsRequestLoyaltyAccountQuery struct {
	CustomerIds []string                `json:"customer_ids"`
	Mappings    []LoyaltyAccountMapping `json:"mappings"`
}
