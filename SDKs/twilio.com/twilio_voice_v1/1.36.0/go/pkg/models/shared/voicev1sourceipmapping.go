package shared

import (
"time")

type VoiceV1SourceIPMapping struct {
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    IPRecordSid *string `json:"ip_record_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SipDomainSid *string `json:"sip_domain_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

