package shared

import (
	"time"
)

type MessagingV1ServiceFallbackMethodEnum string

const (
	MessagingV1ServiceFallbackMethodEnumHead   MessagingV1ServiceFallbackMethodEnum = "HEAD"
	MessagingV1ServiceFallbackMethodEnumGet    MessagingV1ServiceFallbackMethodEnum = "GET"
	MessagingV1ServiceFallbackMethodEnumPost   MessagingV1ServiceFallbackMethodEnum = "POST"
	MessagingV1ServiceFallbackMethodEnumPatch  MessagingV1ServiceFallbackMethodEnum = "PATCH"
	MessagingV1ServiceFallbackMethodEnumPut    MessagingV1ServiceFallbackMethodEnum = "PUT"
	MessagingV1ServiceFallbackMethodEnumDelete MessagingV1ServiceFallbackMethodEnum = "DELETE"
)

type MessagingV1ServiceInboundMethodEnum string

const (
	MessagingV1ServiceInboundMethodEnumHead   MessagingV1ServiceInboundMethodEnum = "HEAD"
	MessagingV1ServiceInboundMethodEnumGet    MessagingV1ServiceInboundMethodEnum = "GET"
	MessagingV1ServiceInboundMethodEnumPost   MessagingV1ServiceInboundMethodEnum = "POST"
	MessagingV1ServiceInboundMethodEnumPatch  MessagingV1ServiceInboundMethodEnum = "PATCH"
	MessagingV1ServiceInboundMethodEnumPut    MessagingV1ServiceInboundMethodEnum = "PUT"
	MessagingV1ServiceInboundMethodEnumDelete MessagingV1ServiceInboundMethodEnum = "DELETE"
)

type MessagingV1Service struct {
	AccountSid                *string                               `json:"account_sid"`
	AreaCodeGeomatch          *bool                                 `json:"area_code_geomatch"`
	DateCreated               *time.Time                            `json:"date_created"`
	DateUpdated               *time.Time                            `json:"date_updated"`
	FallbackMethod            *MessagingV1ServiceFallbackMethodEnum `json:"fallback_method"`
	FallbackToLongCode        *bool                                 `json:"fallback_to_long_code"`
	FallbackURL               *string                               `json:"fallback_url"`
	FriendlyName              *string                               `json:"friendly_name"`
	InboundMethod             *MessagingV1ServiceInboundMethodEnum  `json:"inbound_method"`
	InboundRequestURL         *string                               `json:"inbound_request_url"`
	Links                     map[string]interface{}                `json:"links"`
	MmsConverter              *bool                                 `json:"mms_converter"`
	ScanMessageContent        *ServiceEnumScanMessageContentEnum    `json:"scan_message_content"`
	Sid                       *string                               `json:"sid"`
	SmartEncoding             *bool                                 `json:"smart_encoding"`
	StatusCallback            *string                               `json:"status_callback"`
	StickySender              *bool                                 `json:"sticky_sender"`
	SynchronousValidation     *bool                                 `json:"synchronous_validation"`
	URL                       *string                               `json:"url"`
	UsAppToPersonRegistered   *bool                                 `json:"us_app_to_person_registered"`
	UseInboundWebhookOnNumber *bool                                 `json:"use_inbound_webhook_on_number"`
	Usecase                   *string                               `json:"usecase"`
	ValidityPeriod            *int64                                `json:"validity_period"`
}
