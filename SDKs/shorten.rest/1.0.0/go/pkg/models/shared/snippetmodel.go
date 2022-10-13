package shared

type SnippetModel struct {
	ID         string            `json:"id"`
	Parameters map[string]string `json:"parameters"`
}
