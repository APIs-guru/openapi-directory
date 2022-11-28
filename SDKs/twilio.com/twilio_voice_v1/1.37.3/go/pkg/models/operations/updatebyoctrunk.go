package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateByocTrunkServerList = []string{
	"https://voice.twilio.com",
}

type UpdateByocTrunkPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum string

const (
	UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnumHead   UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum = "HEAD"
	UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnumGet    UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum = "GET"
	UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnumPost   UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum = "POST"
	UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnumPatch  UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum = "PATCH"
	UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnumPut    UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum = "PUT"
	UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnumDelete UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum = "DELETE"
)

type UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum string

const (
	UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnumHead   UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum = "HEAD"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnumGet    UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum = "GET"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnumPost   UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum = "POST"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnumPatch  UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum = "PATCH"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnumPut    UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum = "PUT"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnumDelete UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum = "DELETE"
)

type UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum string

const (
	UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnumHead   UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum = "HEAD"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnumGet    UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum = "GET"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnumPost   UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum = "POST"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnumPatch  UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum = "PATCH"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnumPut    UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum = "PUT"
	UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnumDelete UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum = "DELETE"
)

type UpdateByocTrunkUpdateByocTrunkRequest struct {
	CnamLookupEnabled    *bool                                                          `form:"name=CnamLookupEnabled"`
	ConnectionPolicySid  *string                                                        `form:"name=ConnectionPolicySid"`
	FriendlyName         *string                                                        `form:"name=FriendlyName"`
	FromDomainSid        *string                                                        `form:"name=FromDomainSid"`
	StatusCallbackMethod *UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	StatusCallbackURL    *string                                                        `form:"name=StatusCallbackUrl"`
	VoiceFallbackMethod  *UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL     *string                                                        `form:"name=VoiceFallbackUrl"`
	VoiceMethod          *UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceURL             *string                                                        `form:"name=VoiceUrl"`
}

type UpdateByocTrunkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateByocTrunkRequest struct {
	ServerURL  *string
	PathParams UpdateByocTrunkPathParams
	Request    *UpdateByocTrunkUpdateByocTrunkRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateByocTrunkSecurity
}

type UpdateByocTrunkResponse struct {
	ContentType      string
	StatusCode       int64
	VoiceV1ByocTrunk *shared.VoiceV1ByocTrunk
}
