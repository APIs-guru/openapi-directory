package shared



type ClickModel struct {
    Alias *string `json:"alias,omitempty"`
    AliasID *string `json:"aliasId,omitempty"`
    Browser *string `json:"browser,omitempty"`
    Country *string `json:"country,omitempty"`
    CreatedAt *int64 `json:"createdAt,omitempty"`
    Destination *string `json:"destination,omitempty"`
    Domain *string `json:"domain,omitempty"`
    Os *string `json:"os,omitempty"`
    Referrer *string `json:"referrer,omitempty"`
    UserAgent *string `json:"userAgent,omitempty"`
    
}

