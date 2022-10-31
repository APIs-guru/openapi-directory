package shared

type StudioV2FlowTestUser struct {
	Sid       *string  `json:"sid,omitempty"`
	TestUsers []string `json:"test_users,omitempty"`
	URL       *string  `json:"url,omitempty"`
}
