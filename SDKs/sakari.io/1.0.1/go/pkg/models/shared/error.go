package shared

type Error struct {
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
}
