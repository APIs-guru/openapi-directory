package operations

import (
	"openapi/pkg/models/shared"
)

var CreateHostedNumbersHostedNumberOrderServers = []string{
	"https://preview.twilio.com",
}

type CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum string

const (
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnumHead   CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum = "HEAD"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnumGet    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum = "GET"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnumPost   CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum = "POST"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnumPatch  CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum = "PATCH"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnumPut    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum = "PUT"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnumDelete CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum = "DELETE"
)

type CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum string

const (
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnumHead   CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum = "HEAD"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnumGet    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum = "GET"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnumPost   CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum = "POST"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnumPatch  CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum = "PATCH"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnumPut    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum = "PUT"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnumDelete CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum = "DELETE"
)

type CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum string

const (
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnumHead   CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum = "HEAD"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnumGet    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum = "GET"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnumPost   CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum = "POST"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnumPatch  CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum = "PATCH"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnumPut    CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum = "PUT"
	CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnumDelete CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest struct {
	AccountSid              *string                                                                                                  `form:"name=AccountSid"`
	AddressSid              *string                                                                                                  `form:"name=AddressSid"`
	CcEmails                []string                                                                                                 `form:"name=CcEmails"`
	Email                   *string                                                                                                  `form:"name=Email"`
	FriendlyName            *string                                                                                                  `form:"name=FriendlyName"`
	PhoneNumber             string                                                                                                   `form:"name=PhoneNumber"`
	SmsApplicationSid       *string                                                                                                  `form:"name=SmsApplicationSid"`
	SmsCapability           bool                                                                                                     `form:"name=SmsCapability"`
	SmsFallbackMethod       *CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL          *string                                                                                                  `form:"name=SmsFallbackUrl"`
	SmsMethod               *CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL                  *string                                                                                                  `form:"name=SmsUrl"`
	StatusCallbackMethod    *CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	StatusCallbackURL       *string                                                                                                  `form:"name=StatusCallbackUrl"`
	UniqueName              *string                                                                                                  `form:"name=UniqueName"`
	VerificationDocumentSid *string                                                                                                  `form:"name=VerificationDocumentSid"`
	VerificationType        *shared.HostedNumberOrderEnumVerificationTypeEnum                                                        `form:"name=VerificationType"`
}

type CreateHostedNumbersHostedNumberOrderSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateHostedNumbersHostedNumberOrderRequest struct {
	ServerURL *string
	Request   *CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateHostedNumbersHostedNumberOrderSecurity
}

type CreateHostedNumbersHostedNumberOrderResponse struct {
	ContentType                           string
	StatusCode                            int64
	PreviewHostedNumbersHostedNumberOrder *shared.PreviewHostedNumbersHostedNumberOrder
}
