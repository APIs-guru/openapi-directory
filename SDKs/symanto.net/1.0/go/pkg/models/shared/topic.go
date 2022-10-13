package shared

type Topic struct {
	Category *string  `json:"category"`
	End      *int32   `json:"end"`
	Polarity *float64 `json:"polarity"`
	Start    *int32   `json:"start"`
	Text     *string  `json:"text"`
	Topic    *string  `json:"topic"`
}
