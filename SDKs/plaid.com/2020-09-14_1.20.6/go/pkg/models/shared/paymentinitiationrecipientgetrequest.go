package shared



type PaymentInitiationRecipientGetRequest struct {
    ClientID *string `json:"client_id,omitempty"`
    RecipientID string `json:"recipient_id"`
    Secret *string `json:"secret,omitempty"`
    
}

