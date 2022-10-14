package shared

type ValueLabel struct {
	AltLabels []AltLabel `json:"altLabels,omitempty"`
	Text      *string    `json:"text,omitempty"`
}

type Value struct {
	Code  *string     `json:"code,omitempty"`
	Ident *string     `json:"ident,omitempty"`
	Label *ValueLabel `json:"label,omitempty"`
	Score *int32      `json:"score,omitempty"`
}
