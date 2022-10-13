package shared

type UpdateLocationResponse struct {
	Errors   []Error   `json:"errors"`
	Location *Location `json:"location"`
}
