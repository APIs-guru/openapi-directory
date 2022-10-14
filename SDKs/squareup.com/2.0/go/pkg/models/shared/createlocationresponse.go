package shared

type CreateLocationResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	Location *Location `json:"location,omitempty"`
}
