package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSipDomainServers = []string{
	"https://api.twilio.com",
}

type UpdateSipDomainPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSipDomainRequestBodyVoiceFallbackMethodEnum string

const (
	UpdateSipDomainRequestBodyVoiceFallbackMethodEnumHead   UpdateSipDomainRequestBodyVoiceFallbackMethodEnum = "HEAD"
	UpdateSipDomainRequestBodyVoiceFallbackMethodEnumGet    UpdateSipDomainRequestBodyVoiceFallbackMethodEnum = "GET"
	UpdateSipDomainRequestBodyVoiceFallbackMethodEnumPost   UpdateSipDomainRequestBodyVoiceFallbackMethodEnum = "POST"
	UpdateSipDomainRequestBodyVoiceFallbackMethodEnumPatch  UpdateSipDomainRequestBodyVoiceFallbackMethodEnum = "PATCH"
	UpdateSipDomainRequestBodyVoiceFallbackMethodEnumPut    UpdateSipDomainRequestBodyVoiceFallbackMethodEnum = "PUT"
	UpdateSipDomainRequestBodyVoiceFallbackMethodEnumDelete UpdateSipDomainRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type UpdateSipDomainRequestBodyVoiceMethodEnum string

const (
	UpdateSipDomainRequestBodyVoiceMethodEnumHead   UpdateSipDomainRequestBodyVoiceMethodEnum = "HEAD"
	UpdateSipDomainRequestBodyVoiceMethodEnumGet    UpdateSipDomainRequestBodyVoiceMethodEnum = "GET"
	UpdateSipDomainRequestBodyVoiceMethodEnumPost   UpdateSipDomainRequestBodyVoiceMethodEnum = "POST"
	UpdateSipDomainRequestBodyVoiceMethodEnumPatch  UpdateSipDomainRequestBodyVoiceMethodEnum = "PATCH"
	UpdateSipDomainRequestBodyVoiceMethodEnumPut    UpdateSipDomainRequestBodyVoiceMethodEnum = "PUT"
	UpdateSipDomainRequestBodyVoiceMethodEnumDelete UpdateSipDomainRequestBodyVoiceMethodEnum = "DELETE"
)

type UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnum string

const (
	UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnumHead   UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "HEAD"
	UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnumGet    UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "GET"
	UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnumPost   UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "POST"
	UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnumPatch  UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "PATCH"
	UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnumPut    UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "PUT"
	UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnumDelete UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "DELETE"
)

type UpdateSipDomainRequestBodyUpdateSipDomainRequest struct {
	ByocTrunkSid              *string                                                  `form:"name=ByocTrunkSid"`
	DomainName                *string                                                  `form:"name=DomainName"`
	EmergencyCallerSid        *string                                                  `form:"name=EmergencyCallerSid"`
	EmergencyCallingEnabled   *bool                                                    `form:"name=EmergencyCallingEnabled"`
	FriendlyName              *string                                                  `form:"name=FriendlyName"`
	Secure                    *bool                                                    `form:"name=Secure"`
	SipRegistration           *bool                                                    `form:"name=SipRegistration"`
	VoiceFallbackMethod       *UpdateSipDomainRequestBodyVoiceFallbackMethodEnum       `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL          *string                                                  `form:"name=VoiceFallbackUrl"`
	VoiceMethod               *UpdateSipDomainRequestBodyVoiceMethodEnum               `form:"name=VoiceMethod"`
	VoiceStatusCallbackMethod *UpdateSipDomainRequestBodyVoiceStatusCallbackMethodEnum `form:"name=VoiceStatusCallbackMethod"`
	VoiceStatusCallbackURL    *string                                                  `form:"name=VoiceStatusCallbackUrl"`
	VoiceURL                  *string                                                  `form:"name=VoiceUrl"`
}

type UpdateSipDomainSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSipDomainRequest struct {
	ServerURL  *string
	PathParams UpdateSipDomainPathParams
	Request    *UpdateSipDomainRequestBodyUpdateSipDomainRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSipDomainSecurity
}

type UpdateSipDomainResponse struct {
	ContentType                 string
	StatusCode                  int64
	APIV2010AccountSipSipDomain *shared.APIV2010AccountSipSipDomain
}
