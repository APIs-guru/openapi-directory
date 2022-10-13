package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateIncomingPhoneNumberServers = []string{
	"https://api.twilio.com",
}

type UpdateIncomingPhoneNumberPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum string

const (
	UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumHead   UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumGet    UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "GET"
	UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumPost   UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "POST"
	UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumPatch  UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumPut    UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "PUT"
	UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnumDelete UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberRequestBodySmsMethodEnum string

const (
	UpdateIncomingPhoneNumberRequestBodySmsMethodEnumHead   UpdateIncomingPhoneNumberRequestBodySmsMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberRequestBodySmsMethodEnumGet    UpdateIncomingPhoneNumberRequestBodySmsMethodEnum = "GET"
	UpdateIncomingPhoneNumberRequestBodySmsMethodEnumPost   UpdateIncomingPhoneNumberRequestBodySmsMethodEnum = "POST"
	UpdateIncomingPhoneNumberRequestBodySmsMethodEnumPatch  UpdateIncomingPhoneNumberRequestBodySmsMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberRequestBodySmsMethodEnumPut    UpdateIncomingPhoneNumberRequestBodySmsMethodEnum = "PUT"
	UpdateIncomingPhoneNumberRequestBodySmsMethodEnumDelete UpdateIncomingPhoneNumberRequestBodySmsMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum string

const (
	UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumHead   UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumGet    UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "GET"
	UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumPost   UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "POST"
	UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumPatch  UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumPut    UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "PUT"
	UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnumDelete UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum string

const (
	UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumHead   UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumGet    UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "GET"
	UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumPost   UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "POST"
	UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumPatch  UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumPut    UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "PUT"
	UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnumDelete UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnum string

const (
	UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnumHead   UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnumGet    UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "GET"
	UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnumPost   UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "POST"
	UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnumPatch  UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnumPut    UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "PUT"
	UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnumDelete UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberRequestBodyUpdateIncomingPhoneNumberRequest struct {
	AccountSid           *string                                                       `form:"name=AccountSid"`
	AddressSid           *string                                                       `form:"name=AddressSid"`
	APIVersion           *string                                                       `form:"name=ApiVersion"`
	BundleSid            *string                                                       `form:"name=BundleSid"`
	EmergencyAddressSid  *string                                                       `form:"name=EmergencyAddressSid"`
	EmergencyStatus      *shared.IncomingPhoneNumberEnumEmergencyStatusEnum            `form:"name=EmergencyStatus"`
	FriendlyName         *string                                                       `form:"name=FriendlyName"`
	IdentitySid          *string                                                       `form:"name=IdentitySid"`
	SmsApplicationSid    *string                                                       `form:"name=SmsApplicationSid"`
	SmsFallbackMethod    *UpdateIncomingPhoneNumberRequestBodySmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL       *string                                                       `form:"name=SmsFallbackUrl"`
	SmsMethod            *UpdateIncomingPhoneNumberRequestBodySmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL               *string                                                       `form:"name=SmsUrl"`
	StatusCallback       *string                                                       `form:"name=StatusCallback"`
	StatusCallbackMethod *UpdateIncomingPhoneNumberRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TrunkSid             *string                                                       `form:"name=TrunkSid"`
	VoiceApplicationSid  *string                                                       `form:"name=VoiceApplicationSid"`
	VoiceCallerIDLookup  *bool                                                         `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod  *UpdateIncomingPhoneNumberRequestBodyVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                       `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *UpdateIncomingPhoneNumberRequestBodyVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceReceiveMode     *shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum           `form:"name=VoiceReceiveMode"`
	VoiceURL             *string                                                       `form:"name=VoiceUrl"`
}

type UpdateIncomingPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateIncomingPhoneNumberRequest struct {
	ServerURL  *string
	PathParams UpdateIncomingPhoneNumberPathParams
	Request    *UpdateIncomingPhoneNumberRequestBodyUpdateIncomingPhoneNumberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateIncomingPhoneNumberSecurity
}

type UpdateIncomingPhoneNumberResponse struct {
	ContentType                        string
	StatusCode                         int64
	APIV2010AccountIncomingPhoneNumber *shared.APIV2010AccountIncomingPhoneNumber
}
