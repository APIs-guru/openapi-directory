package shared

import (
	"time"
)

type ProxyV1ServiceShortCodeCapabilities struct {
	Fax   *bool `json:"fax"`
	Mms   *bool `json:"mms"`
	Sms   *bool `json:"sms"`
	Voice *bool `json:"voice"`
}

type ProxyV1ServiceShortCode struct {
	AccountSid   *string                              `json:"account_sid"`
	Capabilities *ProxyV1ServiceShortCodeCapabilities `json:"capabilities"`
	DateCreated  *time.Time                           `json:"date_created"`
	DateUpdated  *time.Time                           `json:"date_updated"`
	IsReserved   *bool                                `json:"is_reserved"`
	IsoCountry   *string                              `json:"iso_country"`
	ServiceSid   *string                              `json:"service_sid"`
	ShortCode    *string                              `json:"short_code"`
	Sid          *string                              `json:"sid"`
	URL          *string                              `json:"url"`
}
