package shared

type CustomPage struct {
	Body     *string `json:"body"`
	Hidden   *bool   `json:"hidden"`
	HTML     *string `json:"html"`
	Htmlmode *bool   `json:"htmlmode"`
	Title    string  `json:"title"`
}
