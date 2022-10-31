package shared

import (
"time")

type IPMessagingV1ServiceChannelMessage struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Attributes *string `json:"attributes,omitempty"`
    Body *string `json:"body,omitempty"`
    ChannelSid *string `json:"channel_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    From *string `json:"from,omitempty"`
    Index *int64 `json:"index,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    To *string `json:"to,omitempty"`
    URL *string `json:"url,omitempty"`
    WasEdited *bool `json:"was_edited,omitempty"`
    
}

