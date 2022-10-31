package shared

type APIV2010AccountOutgoingCallerID struct {
	AccountSid   *string `json:"account_sid,omitempty"`
	DateCreated  *string `json:"date_created,omitempty"`
	DateUpdated  *string `json:"date_updated,omitempty"`
	FriendlyName *string `json:"friendly_name,omitempty"`
	PhoneNumber  *string `json:"phone_number,omitempty"`
	Sid          *string `json:"sid,omitempty"`
	URI          *string `json:"uri,omitempty"`
}
