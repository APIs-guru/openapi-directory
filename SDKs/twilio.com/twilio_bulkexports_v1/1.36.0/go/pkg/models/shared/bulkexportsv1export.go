package shared

type BulkexportsV1Export struct {
	Links        map[string]interface{} `json:"links"`
	ResourceType *string                `json:"resource_type"`
	URL          *string                `json:"url"`
}
