package shared

type ListContinuousChecksOutput struct {
	ContinuousChecks []Check `json:"continuous_checks"`
	Next             *string `json:"next"`
	Self             *string `json:"self"`
}
