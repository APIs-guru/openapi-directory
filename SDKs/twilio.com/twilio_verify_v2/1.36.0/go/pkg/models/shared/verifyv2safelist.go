package shared

type VerifyV2Safelist struct {
	PhoneNumber *string `json:"phone_number,omitempty"`
	Sid         *string `json:"sid,omitempty"`
	URL         *string `json:"url,omitempty"`
}
