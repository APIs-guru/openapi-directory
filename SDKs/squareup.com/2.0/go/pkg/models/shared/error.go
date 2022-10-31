package shared

type Error struct {
	Category string  `json:"category"`
	Code     string  `json:"code"`
	Detail   *string `json:"detail,omitempty"`
	Field    *string `json:"field,omitempty"`
}
