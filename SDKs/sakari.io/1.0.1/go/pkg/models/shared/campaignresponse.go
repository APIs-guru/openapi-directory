package shared



type CampaignResponse struct {
    Data *Campaign `json:"data,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

