package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateByocTrunkServers = []string{
	"https://voice.twilio.com",
}

type UpdateByocTrunkPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateByocTrunkRequestBodyStatusCallbackMethodEnum string

const (
	UpdateByocTrunkRequestBodyStatusCallbackMethodEnumHead   UpdateByocTrunkRequestBodyStatusCallbackMethodEnum = "HEAD"
	UpdateByocTrunkRequestBodyStatusCallbackMethodEnumGet    UpdateByocTrunkRequestBodyStatusCallbackMethodEnum = "GET"
	UpdateByocTrunkRequestBodyStatusCallbackMethodEnumPost   UpdateByocTrunkRequestBodyStatusCallbackMethodEnum = "POST"
	UpdateByocTrunkRequestBodyStatusCallbackMethodEnumPatch  UpdateByocTrunkRequestBodyStatusCallbackMethodEnum = "PATCH"
	UpdateByocTrunkRequestBodyStatusCallbackMethodEnumPut    UpdateByocTrunkRequestBodyStatusCallbackMethodEnum = "PUT"
	UpdateByocTrunkRequestBodyStatusCallbackMethodEnumDelete UpdateByocTrunkRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type UpdateByocTrunkRequestBodyVoiceFallbackMethodEnum string

const (
	UpdateByocTrunkRequestBodyVoiceFallbackMethodEnumHead   UpdateByocTrunkRequestBodyVoiceFallbackMethodEnum = "HEAD"
	UpdateByocTrunkRequestBodyVoiceFallbackMethodEnumGet    UpdateByocTrunkRequestBodyVoiceFallbackMethodEnum = "GET"
	UpdateByocTrunkRequestBodyVoiceFallbackMethodEnumPost   UpdateByocTrunkRequestBodyVoiceFallbackMethodEnum = "POST"
	UpdateByocTrunkRequestBodyVoiceFallbackMethodEnumPatch  UpdateByocTrunkRequestBodyVoiceFallbackMethodEnum = "PATCH"
	UpdateByocTrunkRequestBodyVoiceFallbackMethodEnumPut    UpdateByocTrunkRequestBodyVoiceFallbackMethodEnum = "PUT"
	UpdateByocTrunkRequestBodyVoiceFallbackMethodEnumDelete UpdateByocTrunkRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type UpdateByocTrunkRequestBodyVoiceMethodEnum string

const (
	UpdateByocTrunkRequestBodyVoiceMethodEnumHead   UpdateByocTrunkRequestBodyVoiceMethodEnum = "HEAD"
	UpdateByocTrunkRequestBodyVoiceMethodEnumGet    UpdateByocTrunkRequestBodyVoiceMethodEnum = "GET"
	UpdateByocTrunkRequestBodyVoiceMethodEnumPost   UpdateByocTrunkRequestBodyVoiceMethodEnum = "POST"
	UpdateByocTrunkRequestBodyVoiceMethodEnumPatch  UpdateByocTrunkRequestBodyVoiceMethodEnum = "PATCH"
	UpdateByocTrunkRequestBodyVoiceMethodEnumPut    UpdateByocTrunkRequestBodyVoiceMethodEnum = "PUT"
	UpdateByocTrunkRequestBodyVoiceMethodEnumDelete UpdateByocTrunkRequestBodyVoiceMethodEnum = "DELETE"
)

type UpdateByocTrunkRequestBodyUpdateByocTrunkRequest struct {
	CnamLookupEnabled    *bool                                               `form:"name=CnamLookupEnabled"`
	ConnectionPolicySid  *string                                             `form:"name=ConnectionPolicySid"`
	FriendlyName         *string                                             `form:"name=FriendlyName"`
	FromDomainSid        *string                                             `form:"name=FromDomainSid"`
	StatusCallbackMethod *UpdateByocTrunkRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	StatusCallbackURL    *string                                             `form:"name=StatusCallbackUrl"`
	VoiceFallbackMethod  *UpdateByocTrunkRequestBodyVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                             `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *UpdateByocTrunkRequestBodyVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceURL             *string                                             `form:"name=VoiceUrl"`
}

type UpdateByocTrunkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateByocTrunkRequest struct {
	ServerURL  *string
	PathParams UpdateByocTrunkPathParams
	Request    *UpdateByocTrunkRequestBodyUpdateByocTrunkRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateByocTrunkSecurity
}

type UpdateByocTrunkResponse struct {
	ContentType      string
	StatusCode       int64
	VoiceV1ByocTrunk *shared.VoiceV1ByocTrunk
}
