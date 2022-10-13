package shared

type ListCardsResponse struct {
	Cards  []Card  `json:"cards"`
	Cursor *string `json:"cursor"`
	Errors []Error `json:"errors"`
}
