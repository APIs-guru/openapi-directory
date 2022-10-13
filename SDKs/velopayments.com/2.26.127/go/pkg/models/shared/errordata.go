package shared

type ErrorData struct {
	Content     map[string]interface{} `json:"content"`
	Description *string                `json:"description"`
}
