package shared

type CheckOutput struct {
	Check   Check  `json:"check"`
	Details string `json:"details"`
	Self    string `json:"self"`
}
