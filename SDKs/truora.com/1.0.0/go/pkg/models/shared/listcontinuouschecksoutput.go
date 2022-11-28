package shared

// ListContinuousChecksOutput
// Represents to ListContinuousChecksOutput
type ListContinuousChecksOutput struct {
	ContinuousChecks []Check `json:"continuous_checks,omitempty"`
	Next             *string `json:"next,omitempty"`
	Self             *string `json:"self,omitempty"`
}
