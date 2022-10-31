package shared



type Snippet struct {
    Content string `json:"content"`
    CreatedAt *string `json:"created_at,omitempty"`
    ID *string `json:"id,omitempty"`
    SiteID *string `json:"site_id,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

