package shared

type MemberFocus struct {
	Category *string  `json:"category,omitempty"`
	Focus    []string `json:"focus,omitempty"`
}
