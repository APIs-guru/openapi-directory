package shared



type SavedQueryRestAPIPut struct {
    DbID *int32 `json:"db_id,omitempty"`
    Description *string `json:"description,omitempty"`
    Label *string `json:"label,omitempty"`
    Schema *string `json:"schema,omitempty"`
    SQL *string `json:"sql,omitempty"`
    
}

