package shared

// ChecksOutput
// Represents the results of a background check search
type ChecksOutput struct {
	Checks []Check `json:"checks"`
	Next   *string `json:"next,omitempty"`
	Self   string  `json:"self"`
}
