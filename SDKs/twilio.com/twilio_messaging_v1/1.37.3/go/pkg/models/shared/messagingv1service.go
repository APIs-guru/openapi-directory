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
	AccountSid                *string                               `json:"account_sid,omitempty"`
	AreaCodeGeomatch          *bool                                 `json:"area_code_geomatch,omitempty"`
	DateCreated               *time.Time                            `json:"date_created,omitempty"`
	DateUpdated               *time.Time                            `json:"date_updated,omitempty"`
	FallbackMethod            *MessagingV1ServiceFallbackMethodEnum `json:"fallback_method,omitempty"`
	FallbackToLongCode        *bool                                 `json:"fallback_to_long_code,omitempty"`
	FallbackURL               *string                               `json:"fallback_url,omitempty"`
	FriendlyName              *string                               `json:"friendly_name,omitempty"`
	InboundMethod             *MessagingV1ServiceInboundMethodEnum  `json:"inbound_method,omitempty"`
	InboundRequestURL         *string                               `json:"inbound_request_url,omitempty"`
	Links                     map[string]interface{}                `json:"links,omitempty"`
	MmsConverter              *bool                                 `json:"mms_converter,omitempty"`
	ScanMessageContent        *ServiceEnumScanMessageContentEnum    `json:"scan_message_content,omitempty"`
	Sid                       *string                               `json:"sid,omitempty"`
	SmartEncoding             *bool                                 `json:"smart_encoding,omitempty"`
	StatusCallback            *string                               `json:"status_callback,omitempty"`
	StickySender              *bool                                 `json:"sticky_sender,omitempty"`
	SynchronousValidation     *bool                                 `json:"synchronous_validation,omitempty"`
	URL                       *string                               `json:"url,omitempty"`
	UsAppToPersonRegistered   *bool                                 `json:"us_app_to_person_registered,omitempty"`
	UseInboundWebhookOnNumber *bool                                 `json:"use_inbound_webhook_on_number,omitempty"`
	Usecase                   *string                               `json:"usecase,omitempty"`
	ValidityPeriod            *int64                                `json:"validity_period,omitempty"`
}
