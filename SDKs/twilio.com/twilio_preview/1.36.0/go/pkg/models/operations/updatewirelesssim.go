package operations

import (
"openapi/pkg/models/shared")
var UpdateWirelessSimServers = []string{
	"https://preview.twilio.com",
}

type UpdateWirelessSimPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}


type UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum string

const (
    UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnumHead UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum = "HEAD"
UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnumGet UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum = "GET"
UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnumPost UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum = "POST"
UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnumPatch UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum = "PATCH"
UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnumPut UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum = "PUT"
UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnumDelete UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum = "DELETE"
)



type UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum string

const (
    UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnumHead UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum = "HEAD"
UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnumGet UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum = "GET"
UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnumPost UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum = "POST"
UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnumPatch UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum = "PATCH"
UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnumPut UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum = "PUT"
UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnumDelete UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum = "DELETE"
)



type UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum string

const (
    UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnumHead UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum = "HEAD"
UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnumGet UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum = "GET"
UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnumPost UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum = "POST"
UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnumPatch UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum = "PATCH"
UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnumPut UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum = "PUT"
UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnumDelete UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum = "DELETE"
)



type UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum string

const (
    UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnumHead UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum = "HEAD"
UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnumGet UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum = "GET"
UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnumPost UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum = "POST"
UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnumPatch UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum = "PATCH"
UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnumPut UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum = "PUT"
UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnumDelete UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum = "DELETE"
)



type UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum string

const (
    UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnumHead UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum = "HEAD"
UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnumGet UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum = "GET"
UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnumPost UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum = "POST"
UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnumPatch UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum = "PATCH"
UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnumPut UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum = "PUT"
UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnumDelete UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum = "DELETE"
)


type UpdateWirelessSimUpdateWirelessSimRequest struct {
    CallbackMethod *string `form:"name=CallbackMethod"`
    CallbackURL *string `form:"name=CallbackUrl"`
    CommandsCallbackMethod *UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum `form:"name=CommandsCallbackMethod"`
    CommandsCallbackURL *string `form:"name=CommandsCallbackUrl"`
    FriendlyName *string `form:"name=FriendlyName"`
    RatePlan *string `form:"name=RatePlan"`
    SmsFallbackMethod *UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum `form:"name=SmsFallbackMethod"`
    SmsFallbackURL *string `form:"name=SmsFallbackUrl"`
    SmsMethod *UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum `form:"name=SmsMethod"`
    SmsURL *string `form:"name=SmsUrl"`
    Status *string `form:"name=Status"`
    UniqueName *string `form:"name=UniqueName"`
    VoiceFallbackMethod *UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum `form:"name=VoiceFallbackMethod"`
    VoiceFallbackURL *string `form:"name=VoiceFallbackUrl"`
    VoiceMethod *UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum `form:"name=VoiceMethod"`
    VoiceURL *string `form:"name=VoiceUrl"`
    
}

type UpdateWirelessSimSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateWirelessSimRequest struct {
    ServerURL *string 
    PathParams UpdateWirelessSimPathParams 
    Request *UpdateWirelessSimUpdateWirelessSimRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateWirelessSimSecurity 
    
}

type UpdateWirelessSimResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewWirelessSim *shared.PreviewWirelessSim 
    
}

