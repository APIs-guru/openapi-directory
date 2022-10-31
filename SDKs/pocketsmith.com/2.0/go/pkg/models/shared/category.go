package shared



type Category struct {
    Children []Category `json:"children,omitempty"`
    Colour *string `json:"colour,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsTransfer *bool `json:"is_transfer,omitempty"`
    ParentID *int64 `json:"parent_id,omitempty"`
    Title *string `json:"title,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    
}

