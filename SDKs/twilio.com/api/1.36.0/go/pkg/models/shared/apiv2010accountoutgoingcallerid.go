package shared

type APIV2010AccountOutgoingCallerID struct {
	AccountSid   *string `json:"account_sid"`
	DateCreated  *string `json:"date_created"`
	DateUpdated  *string `json:"date_updated"`
	FriendlyName *string `json:"friendly_name"`
	PhoneNumber  *string `json:"phone_number"`
	Sid          *string `json:"sid"`
	URI          *string `json:"uri"`
}
