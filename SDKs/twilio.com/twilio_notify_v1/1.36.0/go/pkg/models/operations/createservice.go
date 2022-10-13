package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceServers = []string{
	"https://notify.twilio.com",
}

type CreateServiceRequestBodyCreateServiceRequest struct {
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

type CreateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceRequest struct {
	ServerURL *string
	Request   *CreateServiceRequestBodyCreateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateServiceSecurity
}

type CreateServiceResponse struct {
	ContentType     string
	StatusCode      int64
	NotifyV1Service *shared.NotifyV1Service
}
