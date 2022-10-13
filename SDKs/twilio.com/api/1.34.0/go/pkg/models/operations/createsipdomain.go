package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipDomainServers = []string{
	"https://api.twilio.com",
}

type CreateSipDomainPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateSipDomainRequestBodyVoiceFallbackMethodEnum string

const (
	CreateSipDomainRequestBodyVoiceFallbackMethodEnumHead   CreateSipDomainRequestBodyVoiceFallbackMethodEnum = "HEAD"
	CreateSipDomainRequestBodyVoiceFallbackMethodEnumGet    CreateSipDomainRequestBodyVoiceFallbackMethodEnum = "GET"
	CreateSipDomainRequestBodyVoiceFallbackMethodEnumPost   CreateSipDomainRequestBodyVoiceFallbackMethodEnum = "POST"
	CreateSipDomainRequestBodyVoiceFallbackMethodEnumPatch  CreateSipDomainRequestBodyVoiceFallbackMethodEnum = "PATCH"
	CreateSipDomainRequestBodyVoiceFallbackMethodEnumPut    CreateSipDomainRequestBodyVoiceFallbackMethodEnum = "PUT"
	CreateSipDomainRequestBodyVoiceFallbackMethodEnumDelete CreateSipDomainRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type CreateSipDomainRequestBodyVoiceMethodEnum string

const (
	CreateSipDomainRequestBodyVoiceMethodEnumHead   CreateSipDomainRequestBodyVoiceMethodEnum = "HEAD"
	CreateSipDomainRequestBodyVoiceMethodEnumGet    CreateSipDomainRequestBodyVoiceMethodEnum = "GET"
	CreateSipDomainRequestBodyVoiceMethodEnumPost   CreateSipDomainRequestBodyVoiceMethodEnum = "POST"
	CreateSipDomainRequestBodyVoiceMethodEnumPatch  CreateSipDomainRequestBodyVoiceMethodEnum = "PATCH"
	CreateSipDomainRequestBodyVoiceMethodEnumPut    CreateSipDomainRequestBodyVoiceMethodEnum = "PUT"
	CreateSipDomainRequestBodyVoiceMethodEnumDelete CreateSipDomainRequestBodyVoiceMethodEnum = "DELETE"
)

type CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnum string

const (
	CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnumHead   CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "HEAD"
	CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnumGet    CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "GET"
	CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnumPost   CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "POST"
	CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnumPatch  CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "PATCH"
	CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnumPut    CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "PUT"
	CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnumDelete CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnum = "DELETE"
)

type CreateSipDomainRequestBodyCreateSipDomainRequest struct {
	ByocTrunkSid              *string                                                  `form:"name=ByocTrunkSid"`
	DomainName                string                                                   `form:"name=DomainName"`
	EmergencyCallerSid        *string                                                  `form:"name=EmergencyCallerSid"`
	EmergencyCallingEnabled   *bool                                                    `form:"name=EmergencyCallingEnabled"`
	FriendlyName              *string                                                  `form:"name=FriendlyName"`
	Secure                    *bool                                                    `form:"name=Secure"`
	SipRegistration           *bool                                                    `form:"name=SipRegistration"`
	VoiceFallbackMethod       *CreateSipDomainRequestBodyVoiceFallbackMethodEnum       `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL          *string                                                  `form:"name=VoiceFallbackUrl"`
	VoiceMethod               *CreateSipDomainRequestBodyVoiceMethodEnum               `form:"name=VoiceMethod"`
	VoiceStatusCallbackMethod *CreateSipDomainRequestBodyVoiceStatusCallbackMethodEnum `form:"name=VoiceStatusCallbackMethod"`
	VoiceStatusCallbackURL    *string                                                  `form:"name=VoiceStatusCallbackUrl"`
	VoiceURL                  *string                                                  `form:"name=VoiceUrl"`
}

type CreateSipDomainSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipDomainRequest struct {
	ServerURL  *string
	PathParams CreateSipDomainPathParams
	Request    *CreateSipDomainRequestBodyCreateSipDomainRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipDomainSecurity
}

type CreateSipDomainResponse struct {
	ContentType                 string
	StatusCode                  int64
	APIV2010AccountSipSipDomain *shared.APIV2010AccountSipSipDomain
}
