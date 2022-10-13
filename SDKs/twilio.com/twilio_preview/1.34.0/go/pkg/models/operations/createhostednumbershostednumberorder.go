package operations

import (
	"openapi/pkg/models/shared"
)

var CreateHostedNumbersHostedNumberOrderServers = []string{
	"https://preview.twilio.com",
}

type CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum string

const (
	CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnumHead   CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum = "HEAD"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnumGet    CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum = "GET"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnumPost   CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum = "POST"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnumPatch  CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum = "PATCH"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnumPut    CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum = "PUT"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnumDelete CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum = "DELETE"
)

type CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum string

const (
	CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnumHead   CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum = "HEAD"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnumGet    CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum = "GET"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnumPost   CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum = "POST"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnumPatch  CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum = "PATCH"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnumPut    CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum = "PUT"
	CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnumDelete CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum = "DELETE"
)

type CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum string

const (
	CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnumHead   CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnumGet    CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum = "GET"
	CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnumPost   CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum = "POST"
	CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnumPatch  CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnumPut    CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnumDelete CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateHostedNumbersHostedNumberOrderRequestBodyCreateHostedNumbersHostedNumberOrderRequest struct {
	AccountSid              *string                                                                  `form:"name=AccountSid"`
	AddressSid              *string                                                                  `form:"name=AddressSid"`
	CcEmails                []string                                                                 `form:"name=CcEmails"`
	Email                   *string                                                                  `form:"name=Email"`
	FriendlyName            *string                                                                  `form:"name=FriendlyName"`
	PhoneNumber             string                                                                   `form:"name=PhoneNumber"`
	SmsApplicationSid       *string                                                                  `form:"name=SmsApplicationSid"`
	SmsCapability           bool                                                                     `form:"name=SmsCapability"`
	SmsFallbackMethod       *CreateHostedNumbersHostedNumberOrderRequestBodySmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL          *string                                                                  `form:"name=SmsFallbackUrl"`
	SmsMethod               *CreateHostedNumbersHostedNumberOrderRequestBodySmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL                  *string                                                                  `form:"name=SmsUrl"`
	StatusCallbackMethod    *CreateHostedNumbersHostedNumberOrderRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	StatusCallbackURL       *string                                                                  `form:"name=StatusCallbackUrl"`
	UniqueName              *string                                                                  `form:"name=UniqueName"`
	VerificationDocumentSid *string                                                                  `form:"name=VerificationDocumentSid"`
	VerificationType        *shared.HostedNumberOrderEnumVerificationTypeEnum                        `form:"name=VerificationType"`
}

type CreateHostedNumbersHostedNumberOrderSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateHostedNumbersHostedNumberOrderRequest struct {
	ServerURL *string
	Request   *CreateHostedNumbersHostedNumberOrderRequestBodyCreateHostedNumbersHostedNumberOrderRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateHostedNumbersHostedNumberOrderSecurity
}

type CreateHostedNumbersHostedNumberOrderResponse struct {
	ContentType                           string
	StatusCode                            int64
	PreviewHostedNumbersHostedNumberOrder *shared.PreviewHostedNumbersHostedNumberOrder
}
