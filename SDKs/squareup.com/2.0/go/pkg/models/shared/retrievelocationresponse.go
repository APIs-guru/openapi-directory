package shared

type RetrieveLocationResponse struct {
	Errors   []Error   `json:"errors"`
	Location *Location `json:"location"`
}
