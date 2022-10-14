package shared

type DateTimeZone struct {
	Fixed *bool   `json:"fixed,omitempty"`
	ID    *string `json:"id,omitempty"`
}
