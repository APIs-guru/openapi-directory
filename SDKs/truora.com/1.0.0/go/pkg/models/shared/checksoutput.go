package shared

type ChecksOutput struct {
	Checks []Check `json:"checks"`
	Next   *string `json:"next"`
	Self   string  `json:"self"`
}
