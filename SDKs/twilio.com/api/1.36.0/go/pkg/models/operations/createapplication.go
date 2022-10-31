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

type CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum string

const (
	CreateApplicationCreateApplicationRequestSmsFallbackMethodEnumHead   CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = "HEAD"
	CreateApplicationCreateApplicationRequestSmsFallbackMethodEnumGet    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = "GET"
	CreateApplicationCreateApplicationRequestSmsFallbackMethodEnumPost   CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = "POST"
	CreateApplicationCreateApplicationRequestSmsFallbackMethodEnumPatch  CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = "PATCH"
	CreateApplicationCreateApplicationRequestSmsFallbackMethodEnumPut    CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = "PUT"
	CreateApplicationCreateApplicationRequestSmsFallbackMethodEnumDelete CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum = "DELETE"
)

type CreateApplicationCreateApplicationRequestSmsMethodEnum string

const (
	CreateApplicationCreateApplicationRequestSmsMethodEnumHead   CreateApplicationCreateApplicationRequestSmsMethodEnum = "HEAD"
	CreateApplicationCreateApplicationRequestSmsMethodEnumGet    CreateApplicationCreateApplicationRequestSmsMethodEnum = "GET"
	CreateApplicationCreateApplicationRequestSmsMethodEnumPost   CreateApplicationCreateApplicationRequestSmsMethodEnum = "POST"
	CreateApplicationCreateApplicationRequestSmsMethodEnumPatch  CreateApplicationCreateApplicationRequestSmsMethodEnum = "PATCH"
	CreateApplicationCreateApplicationRequestSmsMethodEnumPut    CreateApplicationCreateApplicationRequestSmsMethodEnum = "PUT"
	CreateApplicationCreateApplicationRequestSmsMethodEnumDelete CreateApplicationCreateApplicationRequestSmsMethodEnum = "DELETE"
)

type CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum string

const (
	CreateApplicationCreateApplicationRequestStatusCallbackMethodEnumHead   CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = "HEAD"
	CreateApplicationCreateApplicationRequestStatusCallbackMethodEnumGet    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = "GET"
	CreateApplicationCreateApplicationRequestStatusCallbackMethodEnumPost   CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = "POST"
	CreateApplicationCreateApplicationRequestStatusCallbackMethodEnumPatch  CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = "PATCH"
	CreateApplicationCreateApplicationRequestStatusCallbackMethodEnumPut    CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = "PUT"
	CreateApplicationCreateApplicationRequestStatusCallbackMethodEnumDelete CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum = "DELETE"
)

type CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum string

const (
	CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnumHead   CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = "HEAD"
	CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnumGet    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = "GET"
	CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnumPost   CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = "POST"
	CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnumPatch  CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = "PATCH"
	CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnumPut    CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = "PUT"
	CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnumDelete CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum = "DELETE"
)

type CreateApplicationCreateApplicationRequestVoiceMethodEnum string

const (
	CreateApplicationCreateApplicationRequestVoiceMethodEnumHead   CreateApplicationCreateApplicationRequestVoiceMethodEnum = "HEAD"
	CreateApplicationCreateApplicationRequestVoiceMethodEnumGet    CreateApplicationCreateApplicationRequestVoiceMethodEnum = "GET"
	CreateApplicationCreateApplicationRequestVoiceMethodEnumPost   CreateApplicationCreateApplicationRequestVoiceMethodEnum = "POST"
	CreateApplicationCreateApplicationRequestVoiceMethodEnumPatch  CreateApplicationCreateApplicationRequestVoiceMethodEnum = "PATCH"
	CreateApplicationCreateApplicationRequestVoiceMethodEnumPut    CreateApplicationCreateApplicationRequestVoiceMethodEnum = "PUT"
	CreateApplicationCreateApplicationRequestVoiceMethodEnumDelete CreateApplicationCreateApplicationRequestVoiceMethodEnum = "DELETE"
)

type CreateApplicationCreateApplicationRequest struct {
	APIVersion            *string                                                            `form:"name=ApiVersion"`
	FriendlyName          *string                                                            `form:"name=FriendlyName"`
	MessageStatusCallback *string                                                            `form:"name=MessageStatusCallback"`
	SmsFallbackMethod     *CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum    `form:"name=SmsFallbackMethod"`
	SmsFallbackURL        *string                                                            `form:"name=SmsFallbackUrl"`
	SmsMethod             *CreateApplicationCreateApplicationRequestSmsMethodEnum            `form:"name=SmsMethod"`
	SmsStatusCallback     *string                                                            `form:"name=SmsStatusCallback"`
	SmsURL                *string                                                            `form:"name=SmsUrl"`
	StatusCallback        *string                                                            `form:"name=StatusCallback"`
	StatusCallbackMethod  *CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
	VoiceCallerIDLookup   *bool                                                              `form:"name=VoiceCallerIdLookup"`
	VoiceFallbackMethod   *CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum  `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL      *string                                                            `form:"name=VoiceFallbackUrl"`
	VoiceMethod           *CreateApplicationCreateApplicationRequestVoiceMethodEnum          `form:"name=VoiceMethod"`
	VoiceURL              *string                                                            `form:"name=VoiceUrl"`
}

type CreateApplicationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateApplicationRequest struct {
	ServerURL  *string
	PathParams CreateApplicationPathParams
	Request    *CreateApplicationCreateApplicationRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateApplicationSecurity
}

type CreateApplicationResponse struct {
	ContentType                string
	StatusCode                 int64
	APIV2010AccountApplication *shared.APIV2010AccountApplication
}
