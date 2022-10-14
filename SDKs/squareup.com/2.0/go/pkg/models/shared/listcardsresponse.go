package shared

type ListCardsResponse struct {
	Cards  []Card  `json:"cards,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	Errors []Error `json:"errors,omitempty"`
}
