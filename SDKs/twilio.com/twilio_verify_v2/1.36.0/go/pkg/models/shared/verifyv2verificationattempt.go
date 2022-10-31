package shared

import (
"time")

type VerifyV2VerificationAttempt struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Channel *VerificationAttemptEnumChannelsEnum `json:"channel,omitempty"`
    ChannelData *interface{} `json:"channel_data,omitempty"`
    ConversionStatus *VerificationAttemptEnumConversionStatusEnum `json:"conversion_status,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Price *interface{} `json:"price,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    VerificationSid *string `json:"verification_sid,omitempty"`
    
}

