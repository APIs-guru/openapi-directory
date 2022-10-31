package shared

import (
"time")

type EventsV1Subscription struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Description *string `json:"description,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SinkSid *string `json:"sink_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

