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

type CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnumHead   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnumGet    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnumPost   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnumPatch  CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnumPut    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnumDelete CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnumHead   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnumGet    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnumPost   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnumPatch  CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnumPut    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnumDelete CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnumHead   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnumGet    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnumPost   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnumPatch  CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnumPut    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnumDelete CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnumHead   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnumGet    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnumPost   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnumPatch  CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnumPut    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnumDelete CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum string

const (
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnumHead   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum = "HEAD"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnumGet    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum = "GET"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnumPost   CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum = "POST"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnumPatch  CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum = "PATCH"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnumPut    CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum = "PUT"
	CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnumDelete CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest struct {
	AddressSid           *string                                                                                            `form:"name=AddressSid"`
	APIVersion           *string                                                                                            `form:"name=ApiVersion"`
	BundleSid            *string                                                                                            `form:"name=BundleSid"`
	EmergencyAddressSid  *string                                                                                            `form:"name=EmergencyAddressSid"`
	EmergencyStatus      *shared.IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum                                         `form:"name=EmergencyStatus"`
	FriendlyName         *string                                                                                            `form:"name=FriendlyName"`
	IdentitySid          *string                                                                                            `form:"name=IdentitySid"`
	PhoneNumber          string                                                                                             `form:"name=PhoneNumber"`
	SmsApplicationSid    *string                                                                                            `form:"name=SmsApplicationSid"`
	SmsFallbackMethod    *CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL       *string                                                                                            `form:"name=SmsFallbackUrl"`
	SmsMethod            *CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL               *string                                                                                            `form:"name=SmsUrl"`
	StatusCallback       *string                                                                                            `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TrunkSid             *string                                                                                            `form:"name=TrunkSid"`
	VoiceApplicationSid  *string                                                                                            `form:"name=VoiceApplicationSid"`
	VoiceCallerIDLookup  *bool                                                                                              `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod  *CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                                                            `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceReceiveMode     *shared.IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum                                        `form:"name=VoiceReceiveMode"`
	VoiceURL             *string                                                                                            `form:"name=VoiceUrl"`
}

type CreateIncomingPhoneNumberTollFreeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIncomingPhoneNumberTollFreeRequest struct {
	ServerURL  *string
	PathParams CreateIncomingPhoneNumberTollFreePathParams
	Request    *CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateIncomingPhoneNumberTollFreeSecurity
}

type CreateIncomingPhoneNumberTollFreeResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree *shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree
}
