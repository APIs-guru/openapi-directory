package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceServers = []string{
	"https://notify.twilio.com",
}

type UpdateServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceRequestBodyUpdateServiceRequest struct {
	AlexaSkillID                            *string `form:"name=AlexaSkillId"`
	ApnCredentialSid                        *string `form:"name=ApnCredentialSid"`
	DefaultAlexaNotificationProtocolVersion *string `form:"name=DefaultAlexaNotificationProtocolVersion"`
	DefaultApnNotificationProtocolVersion   *string `form:"name=DefaultApnNotificationProtocolVersion"`
	DefaultFcmNotificationProtocolVersion   *string `form:"name=DefaultFcmNotificationProtocolVersion"`
	DefaultGcmNotificationProtocolVersion   *string `form:"name=DefaultGcmNotificationProtocolVersion"`
	DeliveryCallbackEnabled                 *bool   `form:"name=DeliveryCallbackEnabled"`
	DeliveryCallbackURL                     *string `form:"name=DeliveryCallbackUrl"`
	FacebookMessengerPageID                 *string `form:"name=FacebookMessengerPageId"`
	FcmCredentialSid                        *string `form:"name=FcmCredentialSid"`
	FriendlyName                            *string `form:"name=FriendlyName"`
	GcmCredentialSid                        *string `form:"name=GcmCredentialSid"`
	LogEnabled                              *bool   `form:"name=LogEnabled"`
	MessagingServiceSid                     *string `form:"name=MessagingServiceSid"`
}

type UpdateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceRequest struct {
	ServerURL  *string
	PathParams UpdateServicePathParams
	Request    *UpdateServiceRequestBodyUpdateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceSecurity
}

type UpdateServiceResponse struct {
	ContentType     string
	StatusCode      int64
	NotifyV1Service *shared.NotifyV1Service
}
