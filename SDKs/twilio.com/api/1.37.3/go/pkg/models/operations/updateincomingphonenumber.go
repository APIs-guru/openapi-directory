package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateIncomingPhoneNumberServerList = []string{
	"https://api.twilio.com",
}

type UpdateIncomingPhoneNumberPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum string

const (
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnumHead   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnumGet    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "GET"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnumPost   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "POST"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnumPatch  UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnumPut    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "PUT"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnumDelete UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum string

const (
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnumHead   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnumGet    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum = "GET"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnumPost   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum = "POST"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnumPatch  UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnumPut    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum = "PUT"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnumDelete UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum string

const (
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnumHead   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnumGet    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "GET"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnumPost   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "POST"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnumPatch  UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnumPut    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "PUT"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnumDelete UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum string

const (
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnumHead   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnumGet    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "GET"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnumPost   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "POST"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnumPatch  UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnumPut    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "PUT"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnumDelete UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum string

const (
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnumHead   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum = "HEAD"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnumGet    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum = "GET"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnumPost   UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum = "POST"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnumPatch  UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum = "PATCH"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnumPut    UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum = "PUT"
	UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnumDelete UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum = "DELETE"
)

type UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest struct {
	AccountSid           *string                                                                            `form:"name=AccountSid"`
	AddressSid           *string                                                                            `form:"name=AddressSid"`
	APIVersion           *string                                                                            `form:"name=ApiVersion"`
	BundleSid            *string                                                                            `form:"name=BundleSid"`
	EmergencyAddressSid  *string                                                                            `form:"name=EmergencyAddressSid"`
	EmergencyStatus      *shared.IncomingPhoneNumberEnumEmergencyStatusEnum                                 `form:"name=EmergencyStatus"`
	FriendlyName         *string                                                                            `form:"name=FriendlyName"`
	IdentitySid          *string                                                                            `form:"name=IdentitySid"`
	SmsApplicationSid    *string                                                                            `form:"name=SmsApplicationSid"`
	SmsFallbackMethod    *UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL       *string                                                                            `form:"name=SmsFallbackUrl"`
	SmsMethod            *UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum            `form:"name=SmsMethod"`
	SmsURL               *string                                                                            `form:"name=SmsUrl"`
	StatusCallback       *string                                                                            `form:"name=StatusCallback"`
	StatusCallbackMethod *UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	TrunkSid             *string                                                                            `form:"name=TrunkSid"`
	VoiceApplicationSid  *string                                                                            `form:"name=VoiceApplicationSid"`
	VoiceCallerIDLookup  *bool                                                                              `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod  *UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                                            `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceReceiveMode     *shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum                                `form:"name=VoiceReceiveMode"`
	VoiceURL             *string                                                                            `form:"name=VoiceUrl"`
}

type UpdateIncomingPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateIncomingPhoneNumberRequest struct {
	ServerURL  *string
	PathParams UpdateIncomingPhoneNumberPathParams
	Request    *UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateIncomingPhoneNumberSecurity
}

type UpdateIncomingPhoneNumberResponse struct {
	ContentType                        string
	StatusCode                         int64
	APIV2010AccountIncomingPhoneNumber *shared.APIV2010AccountIncomingPhoneNumber
}
