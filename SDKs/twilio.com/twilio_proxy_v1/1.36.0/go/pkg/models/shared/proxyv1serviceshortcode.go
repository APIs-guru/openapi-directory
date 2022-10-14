package shared

import (
	"time"
)

type ProxyV1ServiceShortCodeCapabilities struct {
	Fax   *bool `json:"fax,omitempty"`
	Mms   *bool `json:"mms,omitempty"`
	Sms   *bool `json:"sms,omitempty"`
	Voice *bool `json:"voice,omitempty"`
}

type ProxyV1ServiceShortCode struct {
	AccountSid   *string                              `json:"account_sid,omitempty"`
	Capabilities *ProxyV1ServiceShortCodeCapabilities `json:"capabilities,omitempty"`
	DateCreated  *time.Time                           `json:"date_created,omitempty"`
	DateUpdated  *time.Time                           `json:"date_updated,omitempty"`
	IsReserved   *bool                                `json:"is_reserved,omitempty"`
	IsoCountry   *string                              `json:"iso_country,omitempty"`
	ServiceSid   *string                              `json:"service_sid,omitempty"`
	ShortCode    *string                              `json:"short_code,omitempty"`
	Sid          *string                              `json:"sid,omitempty"`
	URL          *string                              `json:"url,omitempty"`
}
