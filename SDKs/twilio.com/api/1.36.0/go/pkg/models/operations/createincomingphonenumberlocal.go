package operations

import (
	"openapi/pkg/models/shared"
)

var CreateIncomingPhoneNumberLocalServers = []string{
	"https://api.twilio.com",
}

type CreateIncomingPhoneNumberLocalPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnumHead   CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnumGet    CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnumPost   CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnumPatch  CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnumPut    CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnumDelete CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnum string

const (
	CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnumHead   CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnumGet    CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnumPost   CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnumPatch  CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnumPut    CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnumDelete CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnum string

const (
	CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnumHead   CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnumGet    CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnumPost   CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnumPatch  CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnumPut    CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnumDelete CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnumHead   CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnumGet    CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnumPost   CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnumPatch  CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnumPut    CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnumDelete CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnum string

const (
	CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnumHead   CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnumGet    CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnumPost   CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnumPatch  CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnumPut    CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnumDelete CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalRequestBodyCreateIncomingPhoneNumberLocalRequest struct {
	AddressSid           *string                                                            `form:"name=AddressSid"`
	APIVersion           *string                                                            `form:"name=ApiVersion"`
	BundleSid            *string                                                            `form:"name=BundleSid"`
	EmergencyAddressSid  *string                                                            `form:"name=EmergencyAddressSid"`
	EmergencyStatus      *shared.IncomingPhoneNumberLocalEnumEmergencyStatusEnum            `form:"name=EmergencyStatus"`
	FriendlyName         *string                                                            `form:"name=FriendlyName"`
	IdentitySid          *string                                                            `form:"name=IdentitySid"`
	PhoneNumber          string                                                             `form:"name=PhoneNumber"`
	SmsApplicationSid    *string                                                            `form:"name=SmsApplicationSid"`
	SmsFallbackMethod    *CreateIncomingPhoneNumberLocalRequestBodySmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL       *string                                                            `form:"name=SmsFallbackUrl"`
	SmsMethod            *CreateIncomingPhoneNumberLocalRequestBodySmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL               *string                                                            `form:"name=SmsUrl"`
	StatusCallback       *string                                                            `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateIncomingPhoneNumberLocalRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TrunkSid             *string                                                            `form:"name=TrunkSid"`
	VoiceApplicationSid  *string                                                            `form:"name=VoiceApplicationSid"`
	VoiceCallerIDLookup  *bool                                                              `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod  *CreateIncomingPhoneNumberLocalRequestBodyVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                            `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *CreateIncomingPhoneNumberLocalRequestBodyVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceReceiveMode     *shared.IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum           `form:"name=VoiceReceiveMode"`
	VoiceURL             *string                                                            `form:"name=VoiceUrl"`
}

type CreateIncomingPhoneNumberLocalSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIncomingPhoneNumberLocalRequest struct {
	ServerURL  *string
	PathParams CreateIncomingPhoneNumberLocalPathParams
	Request    *CreateIncomingPhoneNumberLocalRequestBodyCreateIncomingPhoneNumberLocalRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateIncomingPhoneNumberLocalSecurity
}

type CreateIncomingPhoneNumberLocalResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal *shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal
}
