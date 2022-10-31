package operations

import (
	"openapi/pkg/models/shared"
)

var CreateIncomingPhoneNumberServers = []string{
	"https://api.twilio.com",
}

type CreateIncomingPhoneNumberPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnumHead   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnumGet    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnumPost   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnumPatch  CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnumPut    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnumDelete CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum string

const (
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnumHead   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum = "HEAD"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnumGet    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum = "GET"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnumPost   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum = "POST"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnumPatch  CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum = "PATCH"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnumPut    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum = "PUT"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnumDelete CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum string

const (
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnumHead   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnumGet    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnumPost   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnumPatch  CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnumPut    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnumDelete CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnumHead   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnumGet    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnumPost   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnumPatch  CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnumPut    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnumDelete CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum string

const (
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnumHead   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum = "HEAD"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnumGet    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum = "GET"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnumPost   CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum = "POST"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnumPatch  CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum = "PATCH"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnumPut    CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum = "PUT"
	CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnumDelete CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest struct {
	AddressSid           *string                                                                            `form:"name=AddressSid"`
	APIVersion           *string                                                                            `form:"name=ApiVersion"`
	AreaCode             *string                                                                            `form:"name=AreaCode"`
	BundleSid            *string                                                                            `form:"name=BundleSid"`
	EmergencyAddressSid  *string                                                                            `form:"name=EmergencyAddressSid"`
	EmergencyStatus      *shared.IncomingPhoneNumberEnumEmergencyStatusEnum                                 `form:"name=EmergencyStatus"`
	FriendlyName         *string                                                                            `form:"name=FriendlyName"`
	IdentitySid          *string                                                                            `form:"name=IdentitySid"`
	PhoneNumber          *string                                                                            `form:"name=PhoneNumber"`
	SmsApplicationSid    *string                                                                            `form:"name=SmsApplicationSid"`
	SmsFallbackMethod    *CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL       *string                                                                            `form:"name=SmsFallbackUrl"`
	SmsMethod            *CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL               *string                                                                            `form:"name=SmsUrl"`
	StatusCallback       *string                                                                            `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TrunkSid             *string                                                                            `form:"name=TrunkSid"`
	VoiceApplicationSid  *string                                                                            `form:"name=VoiceApplicationSid"`
	VoiceCallerIDLookup  *bool                                                                              `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod  *CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                                            `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceReceiveMode     *shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum                                `form:"name=VoiceReceiveMode"`
	VoiceURL             *string                                                                            `form:"name=VoiceUrl"`
}

type CreateIncomingPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIncomingPhoneNumberRequest struct {
	ServerURL  *string
	PathParams CreateIncomingPhoneNumberPathParams
	Request    *CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateIncomingPhoneNumberSecurity
}

type CreateIncomingPhoneNumberResponse struct {
	ContentType                        string
	StatusCode                         int64
	APIV2010AccountIncomingPhoneNumber *shared.APIV2010AccountIncomingPhoneNumber
}
