package shared

type CreateLocationResponse struct {
	Errors   []Error   `json:"errors"`
	Location *Location `json:"location"`
}
