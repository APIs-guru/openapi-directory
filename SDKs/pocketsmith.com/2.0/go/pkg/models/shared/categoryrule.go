package shared



type CategoryRule struct {
    Category *Category `json:"category,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    ID *int64 `json:"id,omitempty"`
    PayeeMatches *string `json:"payee_matches,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

