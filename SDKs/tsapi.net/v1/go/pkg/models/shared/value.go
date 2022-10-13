package shared

type ValueLabel struct {
	AltLabels []AltLabel `json:"altLabels"`
	Text      *string    `json:"text"`
}

type Value struct {
	Code  *string     `json:"code"`
	Ident *string     `json:"ident"`
	Label *ValueLabel `json:"label"`
	Score *int32      `json:"score"`
}
