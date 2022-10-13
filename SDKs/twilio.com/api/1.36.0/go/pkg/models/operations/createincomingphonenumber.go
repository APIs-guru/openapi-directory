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

type CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumHead   CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumGet    CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumPost   CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumPatch  CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumPut    CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumDelete CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberRequestBodySmsMethodEnum string

const (
	CreateIncomingPhoneNumberRequestBodySmsMethodEnumHead   CreateIncomingPhoneNumberRequestBodySmsMethodEnum = "HEAD"
	CreateIncomingPhoneNumberRequestBodySmsMethodEnumGet    CreateIncomingPhoneNumberRequestBodySmsMethodEnum = "GET"
	CreateIncomingPhoneNumberRequestBodySmsMethodEnumPost   CreateIncomingPhoneNumberRequestBodySmsMethodEnum = "POST"
	CreateIncomingPhoneNumberRequestBodySmsMethodEnumPatch  CreateIncomingPhoneNumberRequestBodySmsMethodEnum = "PATCH"
	CreateIncomingPhoneNumberRequestBodySmsMethodEnumPut    CreateIncomingPhoneNumberRequestBodySmsMethodEnum = "PUT"
	CreateIncomingPhoneNumberRequestBodySmsMethodEnumDelete CreateIncomingPhoneNumberRequestBodySmsMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum string

const (
	CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumHead   CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumGet    CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumPost   CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumPatch  CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumPut    CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumDelete CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum string

const (
	CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumHead   CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "HEAD"
	CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumGet    CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "GET"
	CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumPost   CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "POST"
	CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumPatch  CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "PATCH"
	CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumPut    CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "PUT"
	CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumDelete CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberRequestBodyVoiceMethodEnum string

const (
	CreateIncomingPhoneNumberRequestBodyVoiceMethodEnumHead   CreateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "HEAD"
	CreateIncomingPhoneNumberRequestBodyVoiceMethodEnumGet    CreateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "GET"
	CreateIncomingPhoneNumberRequestBodyVoiceMethodEnumPost   CreateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "POST"
	CreateIncomingPhoneNumberRequestBodyVoiceMethodEnumPatch  CreateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "PATCH"
	CreateIncomingPhoneNumberRequestBodyVoiceMethodEnumPut    CreateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "PUT"
	CreateIncomingPhoneNumberRequestBodyVoiceMethodEnumDelete CreateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "DELETE"
)

type CreateIncomingPhoneNumberRequestBodyCreateIncomingPhoneNumberRequest struct {
	AddressSid           *string                                                       `form:"name=AddressSid"`
	APIVersion           *string                                                       `form:"name=ApiVersion"`
	AreaCode             *string                                                       `form:"name=AreaCode"`
	BundleSid            *string                                                       `form:"name=BundleSid"`
	EmergencyAddressSid  *string                                                       `form:"name=EmergencyAddressSid"`
	EmergencyStatus      *shared.IncomingPhoneNumberEnumEmergencyStatusEnum            `form:"name=EmergencyStatus"`
	FriendlyName         *string                                                       `form:"name=FriendlyName"`
	IdentitySid          *string                                                       `form:"name=IdentitySid"`
	PhoneNumber          *string                                                       `form:"name=PhoneNumber"`
	SmsApplicationSid    *string                                                       `form:"name=SmsApplicationSid"`
	SmsFallbackMethod    *CreateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL       *string                                                       `form:"name=SmsFallbackUrl"`
	SmsMethod            *CreateIncomingPhoneNumberRequestBodySmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL               *string                                                       `form:"name=SmsUrl"`
	StatusCallback       *string                                                       `form:"name=StatusCallback"`
	StatusCallbackMethod *CreateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TrunkSid             *string                                                       `form:"name=TrunkSid"`
	VoiceApplicationSid  *string                                                       `form:"name=VoiceApplicationSid"`
	VoiceCallerIDLookup  *bool                                                         `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod  *CreateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                       `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *CreateIncomingPhoneNumberRequestBodyVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceReceiveMode     *shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum           `form:"name=VoiceReceiveMode"`
	VoiceURL             *string                                                       `form:"name=VoiceUrl"`
}

type CreateIncomingPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIncomingPhoneNumberRequest struct {
	ServerURL  *string
	PathParams CreateIncomingPhoneNumberPathParams
	Request    *CreateIncomingPhoneNumberRequestBodyCreateIncomingPhoneNumberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateIncomingPhoneNumberSecurity
}

type CreateIncomingPhoneNumberResponse struct {
	ContentType                        string
	StatusCode                         int64
	APIV2010AccountIncomingPhoneNumber *shared.APIV2010AccountIncomingPhoneNumber
}
