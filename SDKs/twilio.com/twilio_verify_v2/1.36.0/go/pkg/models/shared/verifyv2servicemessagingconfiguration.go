package shared

import (
"time")

type VerifyV2ServiceMessagingConfiguration struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Country *string `json:"country,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    MessagingServiceSid *string `json:"messaging_service_sid,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

