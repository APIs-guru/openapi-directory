package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateWirelessSimServers = []string{
	"https://preview.twilio.com",
}

type UpdateWirelessSimPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum string

const (
	UpdateWirelessSimRequestBodyCommandsCallbackMethodEnumHead   UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum = "HEAD"
	UpdateWirelessSimRequestBodyCommandsCallbackMethodEnumGet    UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum = "GET"
	UpdateWirelessSimRequestBodyCommandsCallbackMethodEnumPost   UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum = "POST"
	UpdateWirelessSimRequestBodyCommandsCallbackMethodEnumPatch  UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum = "PATCH"
	UpdateWirelessSimRequestBodyCommandsCallbackMethodEnumPut    UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum = "PUT"
	UpdateWirelessSimRequestBodyCommandsCallbackMethodEnumDelete UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum = "DELETE"
)

type UpdateWirelessSimRequestBodySmsFallbackMethodEnum string

const (
	UpdateWirelessSimRequestBodySmsFallbackMethodEnumHead   UpdateWirelessSimRequestBodySmsFallbackMethodEnum = "HEAD"
	UpdateWirelessSimRequestBodySmsFallbackMethodEnumGet    UpdateWirelessSimRequestBodySmsFallbackMethodEnum = "GET"
	UpdateWirelessSimRequestBodySmsFallbackMethodEnumPost   UpdateWirelessSimRequestBodySmsFallbackMethodEnum = "POST"
	UpdateWirelessSimRequestBodySmsFallbackMethodEnumPatch  UpdateWirelessSimRequestBodySmsFallbackMethodEnum = "PATCH"
	UpdateWirelessSimRequestBodySmsFallbackMethodEnumPut    UpdateWirelessSimRequestBodySmsFallbackMethodEnum = "PUT"
	UpdateWirelessSimRequestBodySmsFallbackMethodEnumDelete UpdateWirelessSimRequestBodySmsFallbackMethodEnum = "DELETE"
)

type UpdateWirelessSimRequestBodySmsMethodEnum string

const (
	UpdateWirelessSimRequestBodySmsMethodEnumHead   UpdateWirelessSimRequestBodySmsMethodEnum = "HEAD"
	UpdateWirelessSimRequestBodySmsMethodEnumGet    UpdateWirelessSimRequestBodySmsMethodEnum = "GET"
	UpdateWirelessSimRequestBodySmsMethodEnumPost   UpdateWirelessSimRequestBodySmsMethodEnum = "POST"
	UpdateWirelessSimRequestBodySmsMethodEnumPatch  UpdateWirelessSimRequestBodySmsMethodEnum = "PATCH"
	UpdateWirelessSimRequestBodySmsMethodEnumPut    UpdateWirelessSimRequestBodySmsMethodEnum = "PUT"
	UpdateWirelessSimRequestBodySmsMethodEnumDelete UpdateWirelessSimRequestBodySmsMethodEnum = "DELETE"
)

type UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum string

const (
	UpdateWirelessSimRequestBodyVoiceFallbackMethodEnumHead   UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum = "HEAD"
	UpdateWirelessSimRequestBodyVoiceFallbackMethodEnumGet    UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum = "GET"
	UpdateWirelessSimRequestBodyVoiceFallbackMethodEnumPost   UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum = "POST"
	UpdateWirelessSimRequestBodyVoiceFallbackMethodEnumPatch  UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum = "PATCH"
	UpdateWirelessSimRequestBodyVoiceFallbackMethodEnumPut    UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum = "PUT"
	UpdateWirelessSimRequestBodyVoiceFallbackMethodEnumDelete UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum = "DELETE"
)

type UpdateWirelessSimRequestBodyVoiceMethodEnum string

const (
	UpdateWirelessSimRequestBodyVoiceMethodEnumHead   UpdateWirelessSimRequestBodyVoiceMethodEnum = "HEAD"
	UpdateWirelessSimRequestBodyVoiceMethodEnumGet    UpdateWirelessSimRequestBodyVoiceMethodEnum = "GET"
	UpdateWirelessSimRequestBodyVoiceMethodEnumPost   UpdateWirelessSimRequestBodyVoiceMethodEnum = "POST"
	UpdateWirelessSimRequestBodyVoiceMethodEnumPatch  UpdateWirelessSimRequestBodyVoiceMethodEnum = "PATCH"
	UpdateWirelessSimRequestBodyVoiceMethodEnumPut    UpdateWirelessSimRequestBodyVoiceMethodEnum = "PUT"
	UpdateWirelessSimRequestBodyVoiceMethodEnumDelete UpdateWirelessSimRequestBodyVoiceMethodEnum = "DELETE"
)

type UpdateWirelessSimRequestBodyUpdateWirelessSimRequest struct {
	CallbackMethod         *string                                                 `form:"name=CallbackMethod"`
	CallbackURL            *string                                                 `form:"name=CallbackUrl"`
	CommandsCallbackMethod *UpdateWirelessSimRequestBodyCommandsCallbackMethodEnum `form:"name=CommandsCallbackMethod"`
	CommandsCallbackURL    *string                                                 `form:"name=CommandsCallbackUrl"`
	FriendlyName           *string                                                 `form:"name=FriendlyName"`
	RatePlan               *string                                                 `form:"name=RatePlan"`
	SmsFallbackMethod      *UpdateWirelessSimRequestBodySmsFallbackMethodEnum      `form:"name=SmsFallbackMethod"`
	SmsFallbackURL         *string                                                 `form:"name=SmsFallbackUrl"`
	SmsMethod              *UpdateWirelessSimRequestBodySmsMethodEnum              `form:"name=SmsMethod"`
	SmsURL                 *string                                                 `form:"name=SmsUrl"`
	Status                 *string                                                 `form:"name=Status"`
	UniqueName             *string                                                 `form:"name=UniqueName"`
	VoiceFallbackMethod    *UpdateWirelessSimRequestBodyVoiceFallbackMethodEnum    `form:"name=VoiceFallbackMethod"`
	VoiceFallbackURL       *string                                                 `form:"name=VoiceFallbackUrl"`
	VoiceMethod            *UpdateWirelessSimRequestBodyVoiceMethodEnum            `form:"name=VoiceMethod"`
	VoiceURL               *string                                                 `form:"name=VoiceUrl"`
}

type UpdateWirelessSimSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateWirelessSimRequest struct {
	ServerURL  *string
	PathParams UpdateWirelessSimPathParams
	Request    *UpdateWirelessSimRequestBodyUpdateWirelessSimRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateWirelessSimSecurity
}

type UpdateWirelessSimResponse struct {
	ContentType        string
	StatusCode         int64
	PreviewWirelessSim *shared.PreviewWirelessSim
}
