package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateApplicationServers = []string{
	"https://api.twilio.com",
}

type UpdateApplicationPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateApplicationRequestBodySmsFallbackMethodEnum string

const (
	UpdateApplicationRequestBodySmsFallbackMethodEnumHead   UpdateApplicationRequestBodySmsFallbackMethodEnum = "HEAD"
	UpdateApplicationRequestBodySmsFallbackMethodEnumGet    UpdateApplicationRequestBodySmsFallbackMethodEnum = "GET"
	UpdateApplicationRequestBodySmsFallbackMethodEnumPost   UpdateApplicationRequestBodySmsFallbackMethodEnum = "POST"
	UpdateApplicationRequestBodySmsFallbackMethodEnumPatch  UpdateApplicationRequestBodySmsFallbackMethodEnum = "PATCH"
	UpdateApplicationRequestBodySmsFallbackMethodEnumPut    UpdateApplicationRequestBodySmsFallbackMethodEnum = "PUT"
	UpdateApplicationRequestBodySmsFallbackMethodEnumDelete UpdateApplicationRequestBodySmsFallbackMethodEnum = "DELETE"
)

type UpdateApplicationRequestBodySmsMethodEnum string

const (
	UpdateApplicationRequestBodySmsMethodEnumHead   UpdateApplicationRequestBodySmsMethodEnum = "HEAD"
	UpdateApplicationRequestBodySmsMethodEnumGet    UpdateApplicationRequestBodySmsMethodEnum = "GET"
	UpdateApplicationRequestBodySmsMethodEnumPost   UpdateApplicationRequestBodySmsMethodEnum = "POST"
	UpdateApplicationRequestBodySmsMethodEnumPatch  UpdateApplicationRequestBodySmsMethodEnum = "PATCH"
	UpdateApplicationRequestBodySmsMethodEnumPut    UpdateApplicationRequestBodySmsMethodEnum = "PUT"
	UpdateApplicationRequestBodySmsMethodEnumDelete UpdateApplicationRequestBodySmsMethodEnum = "DELETE"
)

type UpdateApplicationRequestBodyStatusCallbackMethodEnum string

const (
	UpdateApplicationRequestBodyStatusCallbackMethodEnumHead   UpdateApplicationRequestBodyStatusCallbackMethodEnum = "HEAD"
	UpdateApplicationRequestBodyStatusCallbackMethodEnumGet    UpdateApplicationRequestBodyStatusCallbackMethodEnum = "GET"
	UpdateApplicationRequestBodyStatusCallbackMethodEnumPost   UpdateApplicationRequestBodyStatusCallbackMethodEnum = "POST"
	UpdateApplicationRequestBodyStatusCallbackMethodEnumPatch  UpdateApplicationRequestBodyStatusCallbackMethodEnum = "PATCH"
	UpdateApplicationRequestBodyStatusCallbackMethodEnumPut    UpdateApplicationRequestBodyStatusCallbackMethodEnum = "PUT"
	UpdateApplicationRequestBodyStatusCallbackMethodEnumDelete UpdateApplicationRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type UpdateApplicationRequestBodyVoiceFallbackMethodEnum string

const (
	UpdateApplicationRequestBodyVoiceFallbackMethodEnumHead   UpdateApplicationRequestBodyVoiceFallbackMethodEnum = "HEAD"
	UpdateApplicationRequestBodyVoiceFallbackMethodEnumGet    UpdateApplicationRequestBodyVoiceFallbackMethodEnum = "GET"
	UpdateApplicationRequestBodyVoiceFallbackMethodEnumPost   UpdateApplicationRequestBodyVoiceFallbackMethodEnum = "POST"
	UpdateApplicationRequestBodyVoiceFallbackMethodEnumPatch  UpdateApplicationRequestBodyVoiceFallbackMethodEnum = "PATCH"
	UpdateApplicationRequestBodyVoiceFallbackMethodEnumPut    UpdateApplicationRequestBodyVoiceFallbackMethodEnum = "PUT"
	UpdateApplicationRequestBodyVoiceFallbackMethodEnumDelete UpdateApplicationRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type UpdateApplicationRequestBodyVoiceMethodEnum string

const (
	UpdateApplicationRequestBodyVoiceMethodEnumHead   UpdateApplicationRequestBodyVoiceMethodEnum = "HEAD"
	UpdateApplicationRequestBodyVoiceMethodEnumGet    UpdateApplicationRequestBodyVoiceMethodEnum = "GET"
	UpdateApplicationRequestBodyVoiceMethodEnumPost   UpdateApplicationRequestBodyVoiceMethodEnum = "POST"
	UpdateApplicationRequestBodyVoiceMethodEnumPatch  UpdateApplicationRequestBodyVoiceMethodEnum = "PATCH"
	UpdateApplicationRequestBodyVoiceMethodEnumPut    UpdateApplicationRequestBodyVoiceMethodEnum = "PUT"
	UpdateApplicationRequestBodyVoiceMethodEnumDelete UpdateApplicationRequestBodyVoiceMethodEnum = "DELETE"
)

type UpdateApplicationRequestBodyUpdateApplicationRequest struct {
	APIVersion            *string                                               `form:"name=ApiVersion"`
	FriendlyName          *string                                               `form:"name=FriendlyName"`
	MessageStatusCallback *string                                               `form:"name=MessageStatusCallback"`
	SmsFallbackMethod     *UpdateApplicationRequestBodySmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL        *string                                               `form:"name=SmsFallbackUrl"`
	SmsMethod             *UpdateApplicationRequestBodySmsMethodEnum            `form:"name=SmsMethod"`
	SmsStatusCallback     *string                                               `form:"name=SmsStatusCallback"`
	SmsURL                *string                                               `form:"name=SmsUrl"`
	StatusCallback        *string                                               `form:"name=StatusCallback"`
	StatusCallbackMethod  *UpdateApplicationRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	VoiceCallerIDLookup   *bool                                                 `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod   *UpdateApplicationRequestBodyVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL      *string                                               `form:"name=VoiceFallbackUrl"`
	VoiceMethod           *UpdateApplicationRequestBodyVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceURL              *string                                               `form:"name=VoiceUrl"`
}

type UpdateApplicationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateApplicationRequest struct {
	ServerURL  *string
	PathParams UpdateApplicationPathParams
	Request    *UpdateApplicationRequestBodyUpdateApplicationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateApplicationSecurity
}

type UpdateApplicationResponse struct {
	ContentType                string
	StatusCode                 int64
	APIV2010AccountApplication *shared.APIV2010AccountApplication
}
