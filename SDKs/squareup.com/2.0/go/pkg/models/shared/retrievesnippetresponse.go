package shared

type RetrieveSnippetResponse struct {
	Errors  []Error  `json:"errors"`
	Snippet *Snippet `json:"snippet"`
}
