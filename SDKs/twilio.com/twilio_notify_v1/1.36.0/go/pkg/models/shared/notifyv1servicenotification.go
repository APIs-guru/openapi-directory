package shared

import (
"time")

type NotifyV1ServiceNotification struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Action *string `json:"action,omitempty"`
    Alexa *interface{} `json:"alexa,omitempty"`
    Apn *interface{} `json:"apn,omitempty"`
    Body *string `json:"body,omitempty"`
    Data *interface{} `json:"data,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    FacebookMessenger *interface{} `json:"facebook_messenger,omitempty"`
    Fcm *interface{} `json:"fcm,omitempty"`
    Gcm *interface{} `json:"gcm,omitempty"`
    Identities []string `json:"identities,omitempty"`
    Priority *NotificationEnumPriorityEnum `json:"priority,omitempty"`
    Segments []string `json:"segments,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Sms *interface{} `json:"sms,omitempty"`
    Sound *string `json:"sound,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Title *string `json:"title,omitempty"`
    TTL *int64 `json:"ttl,omitempty"`
    
}

