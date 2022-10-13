package operations

import (
	"openapi/pkg/models/shared"
)

var CreateIncomingPhoneNumberMobileServers = []string{
	"https://api.twilio.com",
}

type CreateIncomingPhoneNumberMobilePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnumHead   CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnumGet    CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnumPost   CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnumPatch  CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnumPut    CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnumDelete CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnum string

const (
	CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnumHead   CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnum = "HEAD"
	CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnumGet    CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnum = "GET"
	CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnumPost   CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnum = "POST"
	CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnumPatch  CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnum = "PATCH"
	CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnumPut    CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnum = "PUT"
	CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnumDelete CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnum string

const (
	CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnumHead   CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnumGet    CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnumPost   CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnumPatch  CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnumPut    CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnumDelete CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnumHead   CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnumGet    CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnumPost   CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnumPatch  CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnumPut    CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnumDelete CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnum string

const (
	CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnumHead   CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnum = "HEAD"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnumGet    CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnum = "GET"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnumPost   CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnum = "POST"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnumPatch  CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnum = "PATCH"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnumPut    CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnum = "PUT"
	CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnumDelete CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberMobileRequestBodyCreateIncomingPhoneNumberMobileRequest struct {
	AddressSid           *string                                                             `form:"name=AddressSid"`
	APIVersion           *string                                                             `form:"name=ApiVersion"`
	BundleSid            *string                                                             `form:"name=BundleSid"`
	EmergencyAddressSid  *string                                                             `form:"name=EmergencyAddressSid"`
	EmergencyStatus      *shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnum            `form:"name=EmergencyStatus"`
	FriendlyName         *string                                                             `form:"name=FriendlyName"`
	IdentitySid          *string                                                             `form:"name=IdentitySid"`
	PhoneNumber          string                                                              `form:"name=PhoneNumber"`
	SmsApplicationSid    *string                                                             `form:"name=SmsApplicationSid"`
	SmsFallbackMethod    *CreateIncomingPhoneNumberMobileRequestBodySmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL       *string                                                             `form:"name=SmsFallbackUrl"`
	SmsMethod            *CreateIncomingPhoneNumberMobileRequestBodySmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL               *string                                                             `form:"name=SmsUrl"`
	StatusCallback       *string                                                             `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateIncomingPhoneNumberMobileRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TrunkSid             *string                                                             `form:"name=TrunkSid"`
	VoiceApplicationSid  *string                                                             `form:"name=VoiceApplicationSid"`
	VoiceCallerIDLookup  *bool                                                               `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod  *CreateIncomingPhoneNumberMobileRequestBodyVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                             `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *CreateIncomingPhoneNumberMobileRequestBodyVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceReceiveMode     *shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum           `form:"name=VoiceReceiveMode"`
	VoiceURL             *string                                                             `form:"name=VoiceUrl"`
}

type CreateIncomingPhoneNumberMobileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIncomingPhoneNumberMobileRequest struct {
	ServerURL  *string
	PathParams CreateIncomingPhoneNumberMobilePathParams
	Request    *CreateIncomingPhoneNumberMobileRequestBodyCreateIncomingPhoneNumberMobileRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateIncomingPhoneNumberMobileSecurity
}

type CreateIncomingPhoneNumberMobileResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile *shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile
}
