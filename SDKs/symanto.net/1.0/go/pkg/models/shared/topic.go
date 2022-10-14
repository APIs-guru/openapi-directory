package shared

type Topic struct {
	Category *string  `json:"category,omitempty"`
	End      *int32   `json:"end,omitempty"`
	Polarity *float64 `json:"polarity,omitempty"`
	Start    *int32   `json:"start,omitempty"`
	Text     *string  `json:"text,omitempty"`
	Topic    *string  `json:"topic,omitempty"`
}
