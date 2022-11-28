package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipDomainServerList = []string{
	"https://api.twilio.com",
}

type CreateSipDomainPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum string

const (
	CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnumHead   CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum = "HEAD"
	CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnumGet    CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum = "GET"
	CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnumPost   CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum = "POST"
	CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnumPatch  CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum = "PATCH"
	CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnumPut    CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum = "PUT"
	CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnumDelete CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum = "DELETE"
)

type CreateSipDomainCreateSipDomainRequestVoiceMethodEnum string

const (
	CreateSipDomainCreateSipDomainRequestVoiceMethodEnumHead   CreateSipDomainCreateSipDomainRequestVoiceMethodEnum = "HEAD"
	CreateSipDomainCreateSipDomainRequestVoiceMethodEnumGet    CreateSipDomainCreateSipDomainRequestVoiceMethodEnum = "GET"
	CreateSipDomainCreateSipDomainRequestVoiceMethodEnumPost   CreateSipDomainCreateSipDomainRequestVoiceMethodEnum = "POST"
	CreateSipDomainCreateSipDomainRequestVoiceMethodEnumPatch  CreateSipDomainCreateSipDomainRequestVoiceMethodEnum = "PATCH"
	CreateSipDomainCreateSipDomainRequestVoiceMethodEnumPut    CreateSipDomainCreateSipDomainRequestVoiceMethodEnum = "PUT"
	CreateSipDomainCreateSipDomainRequestVoiceMethodEnumDelete CreateSipDomainCreateSipDomainRequestVoiceMethodEnum = "DELETE"
)

type CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum string

const (
	CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnumHead   CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum = "HEAD"
	CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnumGet    CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum = "GET"
	CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnumPost   CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum = "POST"
	CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnumPatch  CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum = "PATCH"
	CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnumPut    CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum = "PUT"
	CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnumDelete CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum = "DELETE"
)

type CreateSipDomainCreateSipDomainRequest struct {
	ByocTrunkSid              *string                                                             `form:"name=ByocTrunkSid"`
	DomainName                string                                                              `form:"name=DomainName"`
	EmergencyCallerSid        *string                                                             `form:"name=EmergencyCallerSid"`
	EmergencyCallingEnabled   *bool                                                               `form:"name=EmergencyCallingEnabled"`
	FriendlyName              *string                                                             `form:"name=FriendlyName"`
	Secure                    *bool                                                               `form:"name=Secure"`
	SipRegistration           *bool                                                               `form:"name=SipRegistration"`
	VoiceFallbackMethod       *CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum       `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL          *string                                                             `form:"name=VoiceFallbackUrl"`
	VoiceMethod               *CreateSipDomainCreateSipDomainRequestVoiceMethodEnum               `form:"name=VoiceMethod"`
	VoiceStatusCallbackMethod *CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum `form:"name=VoiceStatusCallbackMethod"`
	VoiceStatusCallbackURL    *string                                                             `form:"name=VoiceStatusCallbackUrl"`
	VoiceURL                  *string                                                             `form:"name=VoiceUrl"`
}

type CreateSipDomainSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipDomainRequest struct {
	ServerURL  *string
	PathParams CreateSipDomainPathParams
	Request    *CreateSipDomainCreateSipDomainRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipDomainSecurity
}

type CreateSipDomainResponse struct {
	ContentType                 string
	StatusCode                  int64
	APIV2010AccountSipSipDomain *shared.APIV2010AccountSipSipDomain
}
