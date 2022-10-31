package shared

type CustomPage struct {
	Body     *string `json:"body,omitempty"`
	Hidden   *bool   `json:"hidden,omitempty"`
	HTML     *string `json:"html,omitempty"`
	Htmlmode *bool   `json:"htmlmode,omitempty"`
	Title    string  `json:"title"`
}
