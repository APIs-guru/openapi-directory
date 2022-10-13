package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSimServers = []string{
	"https://wireless.twilio.com",
}

type UpdateSimPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSimRequestBodyCallbackMethodEnum string

const (
	UpdateSimRequestBodyCallbackMethodEnumHead   UpdateSimRequestBodyCallbackMethodEnum = "HEAD"
	UpdateSimRequestBodyCallbackMethodEnumGet    UpdateSimRequestBodyCallbackMethodEnum = "GET"
	UpdateSimRequestBodyCallbackMethodEnumPost   UpdateSimRequestBodyCallbackMethodEnum = "POST"
	UpdateSimRequestBodyCallbackMethodEnumPatch  UpdateSimRequestBodyCallbackMethodEnum = "PATCH"
	UpdateSimRequestBodyCallbackMethodEnumPut    UpdateSimRequestBodyCallbackMethodEnum = "PUT"
	UpdateSimRequestBodyCallbackMethodEnumDelete UpdateSimRequestBodyCallbackMethodEnum = "DELETE"
)

type UpdateSimRequestBodyCommandsCallbackMethodEnum string

const (
	UpdateSimRequestBodyCommandsCallbackMethodEnumHead   UpdateSimRequestBodyCommandsCallbackMethodEnum = "HEAD"
	UpdateSimRequestBodyCommandsCallbackMethodEnumGet    UpdateSimRequestBodyCommandsCallbackMethodEnum = "GET"
	UpdateSimRequestBodyCommandsCallbackMethodEnumPost   UpdateSimRequestBodyCommandsCallbackMethodEnum = "POST"
	UpdateSimRequestBodyCommandsCallbackMethodEnumPatch  UpdateSimRequestBodyCommandsCallbackMethodEnum = "PATCH"
	UpdateSimRequestBodyCommandsCallbackMethodEnumPut    UpdateSimRequestBodyCommandsCallbackMethodEnum = "PUT"
	UpdateSimRequestBodyCommandsCallbackMethodEnumDelete UpdateSimRequestBodyCommandsCallbackMethodEnum = "DELETE"
)

type UpdateSimRequestBodySmsFallbackMethodEnum string

const (
	UpdateSimRequestBodySmsFallbackMethodEnumHead   UpdateSimRequestBodySmsFallbackMethodEnum = "HEAD"
	UpdateSimRequestBodySmsFallbackMethodEnumGet    UpdateSimRequestBodySmsFallbackMethodEnum = "GET"
	UpdateSimRequestBodySmsFallbackMethodEnumPost   UpdateSimRequestBodySmsFallbackMethodEnum = "POST"
	UpdateSimRequestBodySmsFallbackMethodEnumPatch  UpdateSimRequestBodySmsFallbackMethodEnum = "PATCH"
	UpdateSimRequestBodySmsFallbackMethodEnumPut    UpdateSimRequestBodySmsFallbackMethodEnum = "PUT"
	UpdateSimRequestBodySmsFallbackMethodEnumDelete UpdateSimRequestBodySmsFallbackMethodEnum = "DELETE"
)

type UpdateSimRequestBodySmsMethodEnum string

const (
	UpdateSimRequestBodySmsMethodEnumHead   UpdateSimRequestBodySmsMethodEnum = "HEAD"
	UpdateSimRequestBodySmsMethodEnumGet    UpdateSimRequestBodySmsMethodEnum = "GET"
	UpdateSimRequestBodySmsMethodEnumPost   UpdateSimRequestBodySmsMethodEnum = "POST"
	UpdateSimRequestBodySmsMethodEnumPatch  UpdateSimRequestBodySmsMethodEnum = "PATCH"
	UpdateSimRequestBodySmsMethodEnumPut    UpdateSimRequestBodySmsMethodEnum = "PUT"
	UpdateSimRequestBodySmsMethodEnumDelete UpdateSimRequestBodySmsMethodEnum = "DELETE"
)

type UpdateSimRequestBodyVoiceFallbackMethodEnum string

const (
	UpdateSimRequestBodyVoiceFallbackMethodEnumHead   UpdateSimRequestBodyVoiceFallbackMethodEnum = "HEAD"
	UpdateSimRequestBodyVoiceFallbackMethodEnumGet    UpdateSimRequestBodyVoiceFallbackMethodEnum = "GET"
	UpdateSimRequestBodyVoiceFallbackMethodEnumPost   UpdateSimRequestBodyVoiceFallbackMethodEnum = "POST"
	UpdateSimRequestBodyVoiceFallbackMethodEnumPatch  UpdateSimRequestBodyVoiceFallbackMethodEnum = "PATCH"
	UpdateSimRequestBodyVoiceFallbackMethodEnumPut    UpdateSimRequestBodyVoiceFallbackMethodEnum = "PUT"
	UpdateSimRequestBodyVoiceFallbackMethodEnumDelete UpdateSimRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type UpdateSimRequestBodyVoiceMethodEnum string

const (
	UpdateSimRequestBodyVoiceMethodEnumHead   UpdateSimRequestBodyVoiceMethodEnum = "HEAD"
	UpdateSimRequestBodyVoiceMethodEnumGet    UpdateSimRequestBodyVoiceMethodEnum = "GET"
	UpdateSimRequestBodyVoiceMethodEnumPost   UpdateSimRequestBodyVoiceMethodEnum = "POST"
	UpdateSimRequestBodyVoiceMethodEnumPatch  UpdateSimRequestBodyVoiceMethodEnum = "PATCH"
	UpdateSimRequestBodyVoiceMethodEnumPut    UpdateSimRequestBodyVoiceMethodEnum = "PUT"
	UpdateSimRequestBodyVoiceMethodEnumDelete UpdateSimRequestBodyVoiceMethodEnum = "DELETE"
)

type UpdateSimRequestBodyUpdateSimRequest struct {
	AccountSid             *string                                         `form:"name=AccountSid"`
	CallbackMethod         *UpdateSimRequestBodyCallbackMethodEnum         `form:"name=CallbackMethod"`
	CallbackURL            *string                                         `form:"name=CallbackUrl"`
	CommandsCallbackMethod *UpdateSimRequestBodyCommandsCallbackMethodEnum `form:"name=CommandsCallbackMethod"`
	CommandsCallbackURL    *string                                         `form:"name=CommandsCallbackUrl"`
	FriendlyName           *string                                         `form:"name=FriendlyName"`
	RatePlan               *string                                         `form:"name=RatePlan"`
	ResetStatus            *shared.SimEnumResetStatusEnum                  `form:"name=ResetStatus"`
	SmsFallbackMethod      *UpdateSimRequestBodySmsFallbackMethodEnum      `form:"name=SmsFallbackMethod"`
	SmsFallbackURL         *string                                         `form:"name=SmsFallbackUrl"`
	SmsMethod              *UpdateSimRequestBodySmsMethodEnum              `form:"name=SmsMethod"`
	SmsURL                 *string                                         `form:"name=SmsUrl"`
	Status                 *shared.SimEnumStatusEnum                       `form:"name=Status"`
	UniqueName             *string                                         `form:"name=UniqueName"`
	VoiceFallbackMethod    *UpdateSimRequestBodyVoiceFallbackMethodEnum    `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL       *string                                         `form:"name=VoiceFallbackUrl"`
	VoiceMethod            *UpdateSimRequestBodyVoiceMethodEnum            `form:"name=VoiceMethod"`
	VoiceURL               *string                                         `form:"name=VoiceUrl"`
}

type UpdateSimSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSimRequest struct {
	ServerURL  *string
	PathParams UpdateSimPathParams
	Request    *UpdateSimRequestBodyUpdateSimRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSimSecurity
}

type UpdateSimResponse struct {
	ContentType   string
	StatusCode    int64
	WirelessV1Sim *shared.WirelessV1Sim
}
