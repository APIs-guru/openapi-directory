package shared

type BulkexportsV1ExportDay struct {
	CreateDate   *string `json:"create_date,omitempty"`
	Day          *string `json:"day,omitempty"`
	FriendlyName *string `json:"friendly_name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
	Size         *int64  `json:"size,omitempty"`
}
