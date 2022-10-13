package shared

import (
	"time"
)

type VoiceV1SourceIPMapping struct {
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	IPRecordSid  *string    `json:"ip_record_sid"`
	Sid          *string    `json:"sid"`
	SipDomainSid *string    `json:"sip_domain_sid"`
	URL          *string    `json:"url"`
}
