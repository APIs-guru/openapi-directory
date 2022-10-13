package shared

import (
	"time"
)

type ProxyV1ServicePhoneNumberCapabilities struct {
	Fax   *bool `json:"fax"`
	Mms   *bool `json:"mms"`
	Sms   *bool `json:"sms"`
	Voice *bool `json:"voice"`
}

type ProxyV1ServicePhoneNumber struct {
	AccountSid   *string                                `json:"account_sid"`
	Capabilities *ProxyV1ServicePhoneNumberCapabilities `json:"capabilities"`
	DateCreated  *time.Time                             `json:"date_created"`
	DateUpdated  *time.Time                             `json:"date_updated"`
	FriendlyName *string                                `json:"friendly_name"`
	InUse        *int64                                 `json:"in_use"`
	IsReserved   *bool                                  `json:"is_reserved"`
	IsoCountry   *string                                `json:"iso_country"`
	PhoneNumber  *string                                `json:"phone_number"`
	ServiceSid   *string                                `json:"service_sid"`
	Sid          *string                                `json:"sid"`
	URL          *string                                `json:"url"`
}
