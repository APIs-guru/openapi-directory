package shared

type UpsertSnippetResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Snippet *Snippet `json:"snippet,omitempty"`
}
