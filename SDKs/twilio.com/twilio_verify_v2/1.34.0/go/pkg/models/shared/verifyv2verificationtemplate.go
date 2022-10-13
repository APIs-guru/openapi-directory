package shared

type VerifyV2VerificationTemplate struct {
	AccountSid   *string      `json:"account_sid"`
	FriendlyName *string      `json:"friendly_name"`
	Sid          *string      `json:"sid"`
	Translations *interface{} `json:"translations"`
}
