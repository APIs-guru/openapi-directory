package shared

type StudioV2FlowTestUser struct {
	Sid       *string  `json:"sid"`
	TestUsers []string `json:"test_users"`
	URL       *string  `json:"url"`
}
