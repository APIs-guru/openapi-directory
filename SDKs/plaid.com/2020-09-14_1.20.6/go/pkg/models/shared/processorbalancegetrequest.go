package shared



type ProcessorBalanceGetRequest struct {
    ClientID *string `json:"client_id,omitempty"`
    ProcessorToken string `json:"processor_token"`
    Secret *string `json:"secret,omitempty"`
    
}

