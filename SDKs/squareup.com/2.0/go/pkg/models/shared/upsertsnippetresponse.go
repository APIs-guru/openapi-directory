package shared

type UpsertSnippetResponse struct {
	Errors  []Error  `json:"errors"`
	Snippet *Snippet `json:"snippet"`
}
