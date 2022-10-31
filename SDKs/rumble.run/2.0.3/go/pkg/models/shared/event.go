package shared



type Event struct {
    Action *string `json:"action,omitempty"`
    ClientID *string `json:"client_id,omitempty"`
    CreatedAt *int64 `json:"created_at,omitempty"`
    Details map[string]interface{} `json:"details,omitempty"`
    ID *string `json:"id,omitempty"`
    OrganizationID *string `json:"organization_id,omitempty"`
    ProcessedAt *int64 `json:"processed_at,omitempty"`
    ProcessorID *string `json:"processor_id,omitempty"`
    SiteID *string `json:"site_id,omitempty"`
    SourceID *string `json:"source_id,omitempty"`
    SourceName *string `json:"source_name,omitempty"`
    SourceType *string `json:"source_type,omitempty"`
    State *string `json:"state,omitempty"`
    Success *bool `json:"success,omitempty"`
    TargetID *string `json:"target_id,omitempty"`
    TargetName *string `json:"target_name,omitempty"`
    TargetType *string `json:"target_type,omitempty"`
    
}

