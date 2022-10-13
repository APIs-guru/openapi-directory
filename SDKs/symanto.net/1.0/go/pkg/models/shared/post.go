package shared

type Post struct {
	ID       *string `json:"id"`
	Language string  `json:"language"`
	Text     string  `json:"text"`
}
