package shared

type VerifyV2Safelist struct {
	PhoneNumber *string `json:"phone_number"`
	Sid         *string `json:"sid"`
	URL         *string `json:"url"`
}
