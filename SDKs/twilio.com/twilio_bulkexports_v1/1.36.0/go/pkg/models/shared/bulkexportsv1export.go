package shared

type BulkexportsV1Export struct {
	Links        map[string]interface{} `json:"links,omitempty"`
	ResourceType *string                `json:"resource_type,omitempty"`
	URL          *string                `json:"url,omitempty"`
}
