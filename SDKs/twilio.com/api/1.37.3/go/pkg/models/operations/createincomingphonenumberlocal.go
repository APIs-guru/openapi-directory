package operations

import (
	"openapi/pkg/models/shared"
)

var CreateIncomingPhoneNumberLocalServerList = []string{
	"https://api.twilio.com",
}

type CreateIncomingPhoneNumberLocalPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnumHead   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnumGet    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnumPost   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnumPatch  CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnumPut    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnumDelete CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum string

const (
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnumHead   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnumGet    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnumPost   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnumPatch  CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnumPut    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnumDelete CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum string

const (
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnumHead   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnumGet    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnumPost   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnumPatch  CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnumPut    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnumDelete CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnumHead   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnumGet    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnumPost   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnumPatch  CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnumPut    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnumDelete CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum string

const (
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnumHead   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum = "HEAD"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnumGet    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum = "GET"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnumPost   CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum = "POST"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnumPatch  CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum = "PATCH"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnumPut    CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum = "PUT"
	CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnumDelete CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest struct {
	AddressSid           *string                                                                                      `form:"name=AddressSid"`
	APIVersion           *string                                                                                      `form:"name=ApiVersion"`
	BundleSid            *string                                                                                      `form:"name=BundleSid"`
	EmergencyAddressSid  *string                                                                                      `form:"name=EmergencyAddressSid"`
	EmergencyStatus      *shared.IncomingPhoneNumberLocalEnumEmergencyStatusEnum                                      `form:"name=EmergencyStatus"`
	FriendlyName         *string                                                                                      `form:"name=FriendlyName"`
	IdentitySid          *string                                                                                      `form:"name=IdentitySid"`
	PhoneNumber          string                                                                                       `form:"name=PhoneNumber"`
	SmsApplicationSid    *string                                                                                      `form:"name=SmsApplicationSid"`
	SmsFallbackMethod    *CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL       *string                                                                                      `form:"name=SmsFallbackUrl"`
	SmsMethod            *CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL               *string                                                                                      `form:"name=SmsUrl"`
	StatusCallback       *string                                                                                      `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TrunkSid             *string                                                                                      `form:"name=TrunkSid"`
	VoiceApplicationSid  *string                                                                                      `form:"name=VoiceApplicationSid"`
	VoiceCallerIDLookup  *bool                                                                                        `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod  *CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                                                      `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceReceiveMode     *shared.IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum                                     `form:"name=VoiceReceiveMode"`
	VoiceURL             *string                                                                                      `form:"name=VoiceUrl"`
}

type CreateIncomingPhoneNumberLocalSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIncomingPhoneNumberLocalRequest struct {
	ServerURL  *string
	PathParams CreateIncomingPhoneNumberLocalPathParams
	Request    *CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateIncomingPhoneNumberLocalSecurity
}

type CreateIncomingPhoneNumberLocalResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal *shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal
}
