package shared

type RetrieveSnippetResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Snippet *Snippet `json:"snippet,omitempty"`
}
