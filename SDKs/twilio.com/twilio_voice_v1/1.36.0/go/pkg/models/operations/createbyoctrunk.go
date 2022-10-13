package operations

import (
	"openapi/pkg/models/shared"
)

var CreateByocTrunkServers = []string{
	"https://voice.twilio.com",
}

type CreateByocTrunkRequestBodyStatusCallbackMethodEnum string

const (
	CreateByocTrunkRequestBodyStatusCallbackMethodEnumHead   CreateByocTrunkRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateByocTrunkRequestBodyStatusCallbackMethodEnumGet    CreateByocTrunkRequestBodyStatusCallbackMethodEnum = "GET"
	CreateByocTrunkRequestBodyStatusCallbackMethodEnumPost   CreateByocTrunkRequestBodyStatusCallbackMethodEnum = "POST"
	CreateByocTrunkRequestBodyStatusCallbackMethodEnumPatch  CreateByocTrunkRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateByocTrunkRequestBodyStatusCallbackMethodEnumPut    CreateByocTrunkRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateByocTrunkRequestBodyStatusCallbackMethodEnumDelete CreateByocTrunkRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateByocTrunkRequestBodyVoiceFallbackMethodEnum string

const (
	CreateByocTrunkRequestBodyVoiceFallbackMethodEnumHead   CreateByocTrunkRequestBodyVoiceFallbackMethodEnum = "HEAD"
	CreateByocTrunkRequestBodyVoiceFallbackMethodEnumGet    CreateByocTrunkRequestBodyVoiceFallbackMethodEnum = "GET"
	CreateByocTrunkRequestBodyVoiceFallbackMethodEnumPost   CreateByocTrunkRequestBodyVoiceFallbackMethodEnum = "POST"
	CreateByocTrunkRequestBodyVoiceFallbackMethodEnumPatch  CreateByocTrunkRequestBodyVoiceFallbackMethodEnum = "PATCH"
	CreateByocTrunkRequestBodyVoiceFallbackMethodEnumPut    CreateByocTrunkRequestBodyVoiceFallbackMethodEnum = "PUT"
	CreateByocTrunkRequestBodyVoiceFallbackMethodEnumDelete CreateByocTrunkRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type CreateByocTrunkRequestBodyVoiceMethodEnum string

const (
	CreateByocTrunkRequestBodyVoiceMethodEnumHead   CreateByocTrunkRequestBodyVoiceMethodEnum = "HEAD"
	CreateByocTrunkRequestBodyVoiceMethodEnumGet    CreateByocTrunkRequestBodyVoiceMethodEnum = "GET"
	CreateByocTrunkRequestBodyVoiceMethodEnumPost   CreateByocTrunkRequestBodyVoiceMethodEnum = "POST"
	CreateByocTrunkRequestBodyVoiceMethodEnumPatch  CreateByocTrunkRequestBodyVoiceMethodEnum = "PATCH"
	CreateByocTrunkRequestBodyVoiceMethodEnumPut    CreateByocTrunkRequestBodyVoiceMethodEnum = "PUT"
	CreateByocTrunkRequestBodyVoiceMethodEnumDelete CreateByocTrunkRequestBodyVoiceMethodEnum = "DELETE"
)

type CreateByocTrunkRequestBodyCreateByocTrunkRequest struct {
	CnamLookupEnabled    *bool                                               `form:"name=CnamLookupEnabled"`
	ConnectionPolicySid  *string                                             `form:"name=ConnectionPolicySid"`
	FriendlyName         *string                                             `form:"name=FriendlyName"`
	FromDomainSid        *string                                             `form:"name=FromDomainSid"`
	StatusCallbackMethod *CreateByocTrunkRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	StatusCallbackURL    *string                                             `form:"name=StatusCallbackUrl"`
	VoiceFallbackMethod  *CreateByocTrunkRequestBodyVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                             `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *CreateByocTrunkRequestBodyVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceURL             *string                                             `form:"name=VoiceUrl"`
}

type CreateByocTrunkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateByocTrunkRequest struct {
	ServerURL *string
	Request   *CreateByocTrunkRequestBodyCreateByocTrunkRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateByocTrunkSecurity
}

type CreateByocTrunkResponse struct {
	ContentType      string
	StatusCode       int64
	VoiceV1ByocTrunk *shared.VoiceV1ByocTrunk
}
