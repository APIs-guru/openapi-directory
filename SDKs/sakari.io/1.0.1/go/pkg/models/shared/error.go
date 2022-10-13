package shared

type Error struct {
	Code        *string `json:"code"`
	Description *string `json:"description"`
}
