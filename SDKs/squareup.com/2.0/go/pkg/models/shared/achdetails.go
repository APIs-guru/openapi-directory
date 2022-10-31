package shared



type AchDetails struct {
    AccountNumberSuffix *string `json:"account_number_suffix,omitempty"`
    AccountType *string `json:"account_type,omitempty"`
    RoutingNumber *string `json:"routing_number,omitempty"`
    
}

