package shared

type RetrieveLocationResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	Location *Location `json:"location,omitempty"`
}
