package shared

type Level struct {
	ID    *string           `json:"id"`
	Names map[string]string `json:"names"`
}
