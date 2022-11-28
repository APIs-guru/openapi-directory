package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSipDomainServerList = []string{
	"https://api.twilio.com",
}

type UpdateSipDomainPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum string

const (
	UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnumHead   UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum = "HEAD"
	UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnumGet    UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum = "GET"
	UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnumPost   UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum = "POST"
	UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnumPatch  UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum = "PATCH"
	UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnumPut    UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum = "PUT"
	UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnumDelete UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum = "DELETE"
)

type UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum string

const (
	UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnumHead   UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum = "HEAD"
	UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnumGet    UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum = "GET"
	UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnumPost   UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum = "POST"
	UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnumPatch  UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum = "PATCH"
	UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnumPut    UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum = "PUT"
	UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnumDelete UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum = "DELETE"
)

type UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum string

const (
	UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnumHead   UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum = "HEAD"
	UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnumGet    UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum = "GET"
	UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnumPost   UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum = "POST"
	UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnumPatch  UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum = "PATCH"
	UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnumPut    UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum = "PUT"
	UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnumDelete UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum = "DELETE"
)

type UpdateSipDomainUpdateSipDomainRequest struct {
	ByocTrunkSid              *string                                                             `form:"name=ByocTrunkSid"`
	DomainName                *string                                                             `form:"name=DomainName"`
	EmergencyCallerSid        *string                                                             `form:"name=EmergencyCallerSid"`
	EmergencyCallingEnabled   *bool                                                               `form:"name=EmergencyCallingEnabled"`
	FriendlyName              *string                                                             `form:"name=FriendlyName"`
	Secure                    *bool                                                               `form:"name=Secure"`
	SipRegistration           *bool                                                               `form:"name=SipRegistration"`
	VoiceFallbackMethod       *UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum       `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL          *string                                                             `form:"name=VoiceFallbackUrl"`
	VoiceMethod               *UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum               `form:"name=VoiceMethod"`
	VoiceStatusCallbackMethod *UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum `form:"name=VoiceStatusCallbackMethod"`
	VoiceStatusCallbackURL    *string                                                             `form:"name=VoiceStatusCallbackUrl"`
	VoiceURL                  *string                                                             `form:"name=VoiceUrl"`
}

type UpdateSipDomainSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSipDomainRequest struct {
	ServerURL  *string
	PathParams UpdateSipDomainPathParams
	Request    *UpdateSipDomainUpdateSipDomainRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSipDomainSecurity
}

type UpdateSipDomainResponse struct {
	ContentType                 string
	StatusCode                  int64
	APIV2010AccountSipSipDomain *shared.APIV2010AccountSipSipDomain
}
