package shared

import (
"time")

type VerifyV2ServiceWebhook struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    EventTypes []string `json:"event_types,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *WebhookEnumStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    Version *WebhookEnumVersionEnum `json:"version,omitempty"`
    WebhookMethod *WebhookEnumMethodsEnum `json:"webhook_method,omitempty"`
    WebhookURL *string `json:"webhook_url,omitempty"`
    
}

