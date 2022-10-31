package shared

import (
"time")

type NotifyV1Service struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AlexaSkillID *string `json:"alexa_skill_id,omitempty"`
    ApnCredentialSid *string `json:"apn_credential_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    DefaultAlexaNotificationProtocolVersion *string `json:"default_alexa_notification_protocol_version,omitempty"`
    DefaultApnNotificationProtocolVersion *string `json:"default_apn_notification_protocol_version,omitempty"`
    DefaultFcmNotificationProtocolVersion *string `json:"default_fcm_notification_protocol_version,omitempty"`
    DefaultGcmNotificationProtocolVersion *string `json:"default_gcm_notification_protocol_version,omitempty"`
    DeliveryCallbackEnabled *bool `json:"delivery_callback_enabled,omitempty"`
    DeliveryCallbackURL *string `json:"delivery_callback_url,omitempty"`
    FacebookMessengerPageID *string `json:"facebook_messenger_page_id,omitempty"`
    FcmCredentialSid *string `json:"fcm_credential_sid,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    GcmCredentialSid *string `json:"gcm_credential_sid,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    LogEnabled *bool `json:"log_enabled,omitempty"`
    MessagingServiceSid *string `json:"messaging_service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

