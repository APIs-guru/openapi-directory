package shared



type FundingAccountResponse2 struct {
    AccountName *string `json:"accountName,omitempty"`
    AccountNumber *string `json:"accountNumber,omitempty"`
    Archived *bool `json:"archived,omitempty"`
    Country *string `json:"country,omitempty"`
    Currency *string `json:"currency,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    PayorID *string `json:"payorId,omitempty"`
    RoutingNumber *string `json:"routingNumber,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

