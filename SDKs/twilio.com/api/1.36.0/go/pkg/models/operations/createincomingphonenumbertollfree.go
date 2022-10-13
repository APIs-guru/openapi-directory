package operations

import (
	"openapi/pkg/models/shared"
)

var CreateIncomingPhoneNumberTollFreeServers = []string{
	"https://api.twilio.com",
}

type CreateIncomingPhoneNumberTollFreePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnumHead   CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnumGet    CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnumPost   CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnumPatch  CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnumPut    CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnumDelete CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnumHead   CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnumGet    CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnumPost   CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnumPatch  CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnumPut    CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnumDelete CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnumHead   CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnumGet    CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnumPost   CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnumPatch  CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnumPut    CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnumDelete CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnumHead   CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnumGet    CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnumPost   CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnumPatch  CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnumPut    CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnumDelete CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnumHead   CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnumGet    CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnumPost   CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnumPatch  CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnumPut    CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnumDelete CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeRequestBodyCreateIncomingPhoneNumberTollFreeRequest struct {
	AddressSid           *string                                                               `form:"name=AddressSid"`
	APIVersion           *string                                                               `form:"name=ApiVersion"`
	BundleSid            *string                                                               `form:"name=BundleSid"`
	EmergencyAddressSid  *string                                                               `form:"name=EmergencyAddressSid"`
	EmergencyStatus      *shared.IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum            `form:"name=EmergencyStatus"`
	FriendlyName         *string                                                               `form:"name=FriendlyName"`
	IdentitySid          *string                                                               `form:"name=IdentitySid"`
	PhoneNumber          string                                                                `form:"name=PhoneNumber"`
	SmsApplicationSid    *string                                                               `form:"name=SmsApplicationSid"`
	SmsFallbackMethod    *CreateIncomingPhoneNumberTollFreeRequestBodySmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL       *string                                                               `form:"name=SmsFallbackUrl"`
	SmsMethod            *CreateIncomingPhoneNumberTollFreeRequestBodySmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL               *string                                                               `form:"name=SmsUrl"`
	StatusCallback       *string                                                               `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateIncomingPhoneNumberTollFreeRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TrunkSid             *string                                                               `form:"name=TrunkSid"`
	VoiceApplicationSid  *string                                                               `form:"name=VoiceApplicationSid"`
	VoiceCallerIDLookup  *bool                                                                 `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod  *CreateIncomingPhoneNumberTollFreeRequestBodyVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                               `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *CreateIncomingPhoneNumberTollFreeRequestBodyVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceReceiveMode     *shared.IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum           `form:"name=VoiceReceiveMode"`
	VoiceURL             *string                                                               `form:"name=VoiceUrl"`
}

type CreateIncomingPhoneNumberTollFreeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIncomingPhoneNumberTollFreeRequest struct {
	ServerURL  *string
	PathParams CreateIncomingPhoneNumberTollFreePathParams
	Request    *CreateIncomingPhoneNumberTollFreeRequestBodyCreateIncomingPhoneNumberTollFreeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateIncomingPhoneNumberTollFreeSecurity
}

type CreateIncomingPhoneNumberTollFreeResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree *shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree
}
