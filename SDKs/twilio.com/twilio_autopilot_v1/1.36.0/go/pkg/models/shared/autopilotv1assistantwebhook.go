package shared

import (
"time")

type AutopilotV1AssistantWebhook struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AssistantSid *string `json:"assistant_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Events *string `json:"events,omitempty"`
    Sid *string `json:"sid,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    WebhookMethod *string `json:"webhook_method,omitempty"`
    WebhookURL *string `json:"webhook_url,omitempty"`
    
}

