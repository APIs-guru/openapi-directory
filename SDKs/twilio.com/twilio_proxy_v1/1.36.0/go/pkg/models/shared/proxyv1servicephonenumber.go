package shared

import (
	"time"
)

type ProxyV1ServicePhoneNumberCapabilities struct {
	Fax   *bool `json:"fax,omitempty"`
	Mms   *bool `json:"mms,omitempty"`
	Sms   *bool `json:"sms,omitempty"`
	Voice *bool `json:"voice,omitempty"`
}

type ProxyV1ServicePhoneNumber struct {
	AccountSid   *string                                `json:"account_sid,omitempty"`
	Capabilities *ProxyV1ServicePhoneNumberCapabilities `json:"capabilities,omitempty"`
	DateCreated  *time.Time                             `json:"date_created,omitempty"`
	DateUpdated  *time.Time                             `json:"date_updated,omitempty"`
	FriendlyName *string                                `json:"friendly_name,omitempty"`
	InUse        *int64                                 `json:"in_use,omitempty"`
	IsReserved   *bool                                  `json:"is_reserved,omitempty"`
	IsoCountry   *string                                `json:"iso_country,omitempty"`
	PhoneNumber  *string                                `json:"phone_number,omitempty"`
	ServiceSid   *string                                `json:"service_sid,omitempty"`
	Sid          *string                                `json:"sid,omitempty"`
	URL          *string                                `json:"url,omitempty"`
}
