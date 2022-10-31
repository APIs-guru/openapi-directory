package shared

import (
"time")

type VerifyV2ServiceVerification struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Amount *string `json:"amount,omitempty"`
    Channel *VerificationEnumChannelEnum `json:"channel,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Lookup *interface{} `json:"lookup,omitempty"`
    Payee *string `json:"payee,omitempty"`
    SendCodeAttempts []interface{} `json:"send_code_attempts,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Sna *interface{} `json:"sna,omitempty"`
    Status *string `json:"status,omitempty"`
    To *string `json:"to,omitempty"`
    URL *string `json:"url,omitempty"`
    Valid *bool `json:"valid,omitempty"`
    
}

