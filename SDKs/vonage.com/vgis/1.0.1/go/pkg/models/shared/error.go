package shared

type Error struct {
	Field   *string `json:"field"`
	Message *string `json:"message"`
}
