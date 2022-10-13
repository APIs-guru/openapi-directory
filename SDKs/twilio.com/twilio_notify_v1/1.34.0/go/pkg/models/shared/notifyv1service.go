package shared

import (
	"time"
)

type NotifyV1Service struct {
	AccountSid                              *string                `json:"account_sid"`
	AlexaSkillID                            *string                `json:"alexa_skill_id"`
	ApnCredentialSid                        *string                `json:"apn_credential_sid"`
	DateCreated                             *time.Time             `json:"date_created"`
	DateUpdated                             *time.Time             `json:"date_updated"`
	DefaultAlexaNotificationProtocolVersion *string                `json:"default_alexa_notification_protocol_version"`
	DefaultApnNotificationProtocolVersion   *string                `json:"default_apn_notification_protocol_version"`
	DefaultFcmNotificationProtocolVersion   *string                `json:"default_fcm_notification_protocol_version"`
	DefaultGcmNotificationProtocolVersion   *string                `json:"default_gcm_notification_protocol_version"`
	DeliveryCallbackEnabled                 *bool                  `json:"delivery_callback_enabled"`
	DeliveryCallbackURL                     *string                `json:"delivery_callback_url"`
	FacebookMessengerPageID                 *string                `json:"facebook_messenger_page_id"`
	FcmCredentialSid                        *string                `json:"fcm_credential_sid"`
	FriendlyName                            *string                `json:"friendly_name"`
	GcmCredentialSid                        *string                `json:"gcm_credential_sid"`
	Links                                   map[string]interface{} `json:"links"`
	LogEnabled                              *bool                  `json:"log_enabled"`
	MessagingServiceSid                     *string                `json:"messaging_service_sid"`
	Sid                                     *string                `json:"sid"`
	URL                                     *string                `json:"url"`
}
