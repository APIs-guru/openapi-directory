package shared

import (
"time")

type SupersimV1SmsCommand struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Direction *SmsCommandEnumDirectionEnum `json:"direction,omitempty"`
    Payload *string `json:"payload,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SimSid *string `json:"sim_sid,omitempty"`
    Status *SmsCommandEnumStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

