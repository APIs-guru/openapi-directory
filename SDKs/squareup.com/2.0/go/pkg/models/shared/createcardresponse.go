package shared

type CreateCardResponse struct {
	Card   *Card   `json:"card"`
	Errors []Error `json:"errors"`
}
