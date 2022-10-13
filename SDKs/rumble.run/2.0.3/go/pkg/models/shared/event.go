package shared

type Event struct {
	Action         *string                `json:"action"`
	ClientID       *string                `json:"client_id"`
	CreatedAt      *int64                 `json:"created_at"`
	Details        map[string]interface{} `json:"details"`
	ID             *string                `json:"id"`
	OrganizationID *string                `json:"organization_id"`
	ProcessedAt    *int64                 `json:"processed_at"`
	ProcessorID    *string                `json:"processor_id"`
	SiteID         *string                `json:"site_id"`
	SourceID       *string                `json:"source_id"`
	SourceName     *string                `json:"source_name"`
	SourceType     *string                `json:"source_type"`
	State          *string                `json:"state"`
	Success        *bool                  `json:"success"`
	TargetID       *string                `json:"target_id"`
	TargetName     *string                `json:"target_name"`
	TargetType     *string                `json:"target_type"`
}
