package shared

type ErrorOptions struct {
	Code        *string `json:"code"`
	Description *string `json:"description"`
}

type Error struct {
	Field   *string        `json:"field"`
	Message *string        `json:"message"`
	Options []ErrorOptions `json:"options"`
	Path    *string        `json:"path"`
}
