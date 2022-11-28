package shared

// CheckOutput
// Represents the result of a background check search
type CheckOutput struct {
	Check   Check  `json:"check"`
	Details string `json:"details"`
	Self    string `json:"self"`
}
