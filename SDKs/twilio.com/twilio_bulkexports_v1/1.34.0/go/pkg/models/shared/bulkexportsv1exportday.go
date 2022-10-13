package shared

type BulkexportsV1ExportDay struct {
	CreateDate   *string `json:"create_date"`
	Day          *string `json:"day"`
	FriendlyName *string `json:"friendly_name"`
	ResourceType *string `json:"resource_type"`
	Size         *int64  `json:"size"`
}
