package operations

import (
	"openapi/pkg/models/shared"
)

var CreateApplicationServers = []string{
	"https://api.twilio.com",
}

type CreateApplicationPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateApplicationRequestBodySmsFallbackMethodEnum string

const (
	CreateApplicationRequestBodySmsFallbackMethodEnumHead   CreateApplicationRequestBodySmsFallbackMethodEnum = "HEAD"
	CreateApplicationRequestBodySmsFallbackMethodEnumGet    CreateApplicationRequestBodySmsFallbackMethodEnum = "GET"
	CreateApplicationRequestBodySmsFallbackMethodEnumPost   CreateApplicationRequestBodySmsFallbackMethodEnum = "POST"
	CreateApplicationRequestBodySmsFallbackMethodEnumPatch  CreateApplicationRequestBodySmsFallbackMethodEnum = "PATCH"
	CreateApplicationRequestBodySmsFallbackMethodEnumPut    CreateApplicationRequestBodySmsFallbackMethodEnum = "PUT"
	CreateApplicationRequestBodySmsFallbackMethodEnumDelete CreateApplicationRequestBodySmsFallbackMethodEnum = "DELETE"
)

type CreateApplicationRequestBodySmsMethodEnum string

const (
	CreateApplicationRequestBodySmsMethodEnumHead   CreateApplicationRequestBodySmsMethodEnum = "HEAD"
	CreateApplicationRequestBodySmsMethodEnumGet    CreateApplicationRequestBodySmsMethodEnum = "GET"
	CreateApplicationRequestBodySmsMethodEnumPost   CreateApplicationRequestBodySmsMethodEnum = "POST"
	CreateApplicationRequestBodySmsMethodEnumPatch  CreateApplicationRequestBodySmsMethodEnum = "PATCH"
	CreateApplicationRequestBodySmsMethodEnumPut    CreateApplicationRequestBodySmsMethodEnum = "PUT"
	CreateApplicationRequestBodySmsMethodEnumDelete CreateApplicationRequestBodySmsMethodEnum = "DELETE"
)

type CreateApplicationRequestBodyStatusCallbackMethodEnum string

const (
	CreateApplicationRequestBodyStatusCallbackMethodEnumHead   CreateApplicationRequestBodyStatusCallbackMethodEnum = "HEAD"
	CreateApplicationRequestBodyStatusCallbackMethodEnumGet    CreateApplicationRequestBodyStatusCallbackMethodEnum = "GET"
	CreateApplicationRequestBodyStatusCallbackMethodEnumPost   CreateApplicationRequestBodyStatusCallbackMethodEnum = "POST"
	CreateApplicationRequestBodyStatusCallbackMethodEnumPatch  CreateApplicationRequestBodyStatusCallbackMethodEnum = "PATCH"
	CreateApplicationRequestBodyStatusCallbackMethodEnumPut    CreateApplicationRequestBodyStatusCallbackMethodEnum = "PUT"
	CreateApplicationRequestBodyStatusCallbackMethodEnumDelete CreateApplicationRequestBodyStatusCallbackMethodEnum = "DELETE"
)

type CreateApplicationRequestBodyVoiceFallbackMethodEnum string

const (
	CreateApplicationRequestBodyVoiceFallbackMethodEnumHead   CreateApplicationRequestBodyVoiceFallbackMethodEnum = "HEAD"
	CreateApplicationRequestBodyVoiceFallbackMethodEnumGet    CreateApplicationRequestBodyVoiceFallbackMethodEnum = "GET"
	CreateApplicationRequestBodyVoiceFallbackMethodEnumPost   CreateApplicationRequestBodyVoiceFallbackMethodEnum = "POST"
	CreateApplicationRequestBodyVoiceFallbackMethodEnumPatch  CreateApplicationRequestBodyVoiceFallbackMethodEnum = "PATCH"
	CreateApplicationRequestBodyVoiceFallbackMethodEnumPut    CreateApplicationRequestBodyVoiceFallbackMethodEnum = "PUT"
	CreateApplicationRequestBodyVoiceFallbackMethodEnumDelete CreateApplicationRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type CreateApplicationRequestBodyVoiceMethodEnum string

const (
	CreateApplicationRequestBodyVoiceMethodEnumHead   CreateApplicationRequestBodyVoiceMethodEnum = "HEAD"
	CreateApplicationRequestBodyVoiceMethodEnumGet    CreateApplicationRequestBodyVoiceMethodEnum = "GET"
	CreateApplicationRequestBodyVoiceMethodEnumPost   CreateApplicationRequestBodyVoiceMethodEnum = "POST"
	CreateApplicationRequestBodyVoiceMethodEnumPatch  CreateApplicationRequestBodyVoiceMethodEnum = "PATCH"
	CreateApplicationRequestBodyVoiceMethodEnumPut    CreateApplicationRequestBodyVoiceMethodEnum = "PUT"
	CreateApplicationRequestBodyVoiceMethodEnumDelete CreateApplicationRequestBodyVoiceMethodEnum = "DELETE"
)

type CreateApplicationRequestBodyCreateApplicationRequest struct {
	APIVersion            *string                                               `form:"name=ApiVersion"`
	FriendlyName          *string                                               `form:"name=FriendlyName"`
	MessageStatusCallback *string                                               `form:"name=MessageStatusCallback"`
	SmsFallbackMethod     *CreateApplicationRequestBodySmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL        *string                                               `form:"name=SmsFallbackUrl"`
	SmsMethod             *CreateApplicationRequestBodySmsMethodEnum            `form:"name=SmsMethod"`
	SmsStatusCallback     *string                                               `form:"name=SmsStatusCallback"`
	SmsURL                *string                                               `form:"name=SmsUrl"`
	StatusCallback        *string                                               `form:"name=StatusCallback"`
	StatusCallbackMethod  *CreateApplicationRequestBodyStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	VoiceCallerIDLookup   *bool                                                 `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod   *CreateApplicationRequestBodyVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL      *string                                               `form:"name=VoiceFallbackUrl"`
	VoiceMethod           *CreateApplicationRequestBodyVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceURL              *string                                               `form:"name=VoiceUrl"`
}

type CreateApplicationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateApplicationRequest struct {
	ServerURL  *string
	PathParams CreateApplicationPathParams
	Request    *CreateApplicationRequestBodyCreateApplicationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateApplicationSecurity
}

type CreateApplicationResponse struct {
	ContentType                string
	StatusCode                 int64
	APIV2010AccountApplication *shared.APIV2010AccountApplication
}
