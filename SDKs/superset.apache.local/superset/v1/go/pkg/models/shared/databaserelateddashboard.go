package shared

type DatabaseRelatedDashboard struct {
	ID           *int32                 `json:"id"`
	JSONMetadata map[string]interface{} `json:"json_metadata"`
	Slug         *string                `json:"slug"`
	Title        *string                `json:"title"`
}
