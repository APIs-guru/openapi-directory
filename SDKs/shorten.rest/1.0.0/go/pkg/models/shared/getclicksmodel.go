package shared



type GetClicksModel struct {
    Clicks []ClickModel `json:"clicks,omitempty"`
    LastID *string `json:"lastId,omitempty"`
    
}

