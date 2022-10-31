package shared

import (
"time")

type StudioV1FlowEngagement struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ContactChannelAddress *string `json:"contact_channel_address,omitempty"`
    ContactSid *string `json:"contact_sid,omitempty"`
    Context *interface{} `json:"context,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FlowSid *string `json:"flow_sid,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *EngagementEnumStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

