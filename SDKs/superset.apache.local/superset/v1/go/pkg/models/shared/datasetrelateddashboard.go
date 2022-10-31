package shared



type DatasetRelatedDashboard struct {
    ID *int32 `json:"id,omitempty"`
    JSONMetadata map[string]interface{} `json:"json_metadata,omitempty"`
    Slug *string `json:"slug,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

