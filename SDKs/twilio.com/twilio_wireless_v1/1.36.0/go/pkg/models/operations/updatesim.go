package operations

import (
"openapi/pkg/models/shared")
var UpdateSimServers = []string{
	"https://wireless.twilio.com",
}

type UpdateSimPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}


type UpdateSimUpdateSimRequestCallbackMethodEnum string

const (
    UpdateSimUpdateSimRequestCallbackMethodEnumHead UpdateSimUpdateSimRequestCallbackMethodEnum = "HEAD"
UpdateSimUpdateSimRequestCallbackMethodEnumGet UpdateSimUpdateSimRequestCallbackMethodEnum = "GET"
UpdateSimUpdateSimRequestCallbackMethodEnumPost UpdateSimUpdateSimRequestCallbackMethodEnum = "POST"
UpdateSimUpdateSimRequestCallbackMethodEnumPatch UpdateSimUpdateSimRequestCallbackMethodEnum = "PATCH"
UpdateSimUpdateSimRequestCallbackMethodEnumPut UpdateSimUpdateSimRequestCallbackMethodEnum = "PUT"
UpdateSimUpdateSimRequestCallbackMethodEnumDelete UpdateSimUpdateSimRequestCallbackMethodEnum = "DELETE"
)



type UpdateSimUpdateSimRequestCommandsCallbackMethodEnum string

const (
    UpdateSimUpdateSimRequestCommandsCallbackMethodEnumHead UpdateSimUpdateSimRequestCommandsCallbackMethodEnum = "HEAD"
UpdateSimUpdateSimRequestCommandsCallbackMethodEnumGet UpdateSimUpdateSimRequestCommandsCallbackMethodEnum = "GET"
UpdateSimUpdateSimRequestCommandsCallbackMethodEnumPost UpdateSimUpdateSimRequestCommandsCallbackMethodEnum = "POST"
UpdateSimUpdateSimRequestCommandsCallbackMethodEnumPatch UpdateSimUpdateSimRequestCommandsCallbackMethodEnum = "PATCH"
UpdateSimUpdateSimRequestCommandsCallbackMethodEnumPut UpdateSimUpdateSimRequestCommandsCallbackMethodEnum = "PUT"
UpdateSimUpdateSimRequestCommandsCallbackMethodEnumDelete UpdateSimUpdateSimRequestCommandsCallbackMethodEnum = "DELETE"
)



type UpdateSimUpdateSimRequestSmsFallbackMethodEnum string

const (
    UpdateSimUpdateSimRequestSmsFallbackMethodEnumHead UpdateSimUpdateSimRequestSmsFallbackMethodEnum = "HEAD"
UpdateSimUpdateSimRequestSmsFallbackMethodEnumGet UpdateSimUpdateSimRequestSmsFallbackMethodEnum = "GET"
UpdateSimUpdateSimRequestSmsFallbackMethodEnumPost UpdateSimUpdateSimRequestSmsFallbackMethodEnum = "POST"
UpdateSimUpdateSimRequestSmsFallbackMethodEnumPatch UpdateSimUpdateSimRequestSmsFallbackMethodEnum = "PATCH"
UpdateSimUpdateSimRequestSmsFallbackMethodEnumPut UpdateSimUpdateSimRequestSmsFallbackMethodEnum = "PUT"
UpdateSimUpdateSimRequestSmsFallbackMethodEnumDelete UpdateSimUpdateSimRequestSmsFallbackMethodEnum = "DELETE"
)



type UpdateSimUpdateSimRequestSmsMethodEnum string

const (
    UpdateSimUpdateSimRequestSmsMethodEnumHead UpdateSimUpdateSimRequestSmsMethodEnum = "HEAD"
UpdateSimUpdateSimRequestSmsMethodEnumGet UpdateSimUpdateSimRequestSmsMethodEnum = "GET"
UpdateSimUpdateSimRequestSmsMethodEnumPost UpdateSimUpdateSimRequestSmsMethodEnum = "POST"
UpdateSimUpdateSimRequestSmsMethodEnumPatch UpdateSimUpdateSimRequestSmsMethodEnum = "PATCH"
UpdateSimUpdateSimRequestSmsMethodEnumPut UpdateSimUpdateSimRequestSmsMethodEnum = "PUT"
UpdateSimUpdateSimRequestSmsMethodEnumDelete UpdateSimUpdateSimRequestSmsMethodEnum = "DELETE"
)



type UpdateSimUpdateSimRequestVoiceFallbackMethodEnum string

const (
    UpdateSimUpdateSimRequestVoiceFallbackMethodEnumHead UpdateSimUpdateSimRequestVoiceFallbackMethodEnum = "HEAD"
UpdateSimUpdateSimRequestVoiceFallbackMethodEnumGet UpdateSimUpdateSimRequestVoiceFallbackMethodEnum = "GET"
UpdateSimUpdateSimRequestVoiceFallbackMethodEnumPost UpdateSimUpdateSimRequestVoiceFallbackMethodEnum = "POST"
UpdateSimUpdateSimRequestVoiceFallbackMethodEnumPatch UpdateSimUpdateSimRequestVoiceFallbackMethodEnum = "PATCH"
UpdateSimUpdateSimRequestVoiceFallbackMethodEnumPut UpdateSimUpdateSimRequestVoiceFallbackMethodEnum = "PUT"
UpdateSimUpdateSimRequestVoiceFallbackMethodEnumDelete UpdateSimUpdateSimRequestVoiceFallbackMethodEnum = "DELETE"
)



type UpdateSimUpdateSimRequestVoiceMethodEnum string

const (
    UpdateSimUpdateSimRequestVoiceMethodEnumHead UpdateSimUpdateSimRequestVoiceMethodEnum = "HEAD"
UpdateSimUpdateSimRequestVoiceMethodEnumGet UpdateSimUpdateSimRequestVoiceMethodEnum = "GET"
UpdateSimUpdateSimRequestVoiceMethodEnumPost UpdateSimUpdateSimRequestVoiceMethodEnum = "POST"
UpdateSimUpdateSimRequestVoiceMethodEnumPatch UpdateSimUpdateSimRequestVoiceMethodEnum = "PATCH"
UpdateSimUpdateSimRequestVoiceMethodEnumPut UpdateSimUpdateSimRequestVoiceMethodEnum = "PUT"
UpdateSimUpdateSimRequestVoiceMethodEnumDelete UpdateSimUpdateSimRequestVoiceMethodEnum = "DELETE"
)


type UpdateSimUpdateSimRequest struct {
    AccountSid *string `form:"name=AccountSid"`
    CallbackMethod *UpdateSimUpdateSimRequestCallbackMethodEnum `form:"name=CallbackMethod"`
    CallbackURL *string `form:"name=CallbackUrl"`
    CommandsCallbackMethod *UpdateSimUpdateSimRequestCommandsCallbackMethodEnum `form:"name=CommandsCallbackMethod"`
    CommandsCallbackURL *string `form:"name=CommandsCallbackUrl"`
    FriendlyName *string `form:"name=FriendlyName"`
    RatePlan *string `form:"name=RatePlan"`
    ResetStatus *shared.SimEnumResetStatusEnum `form:"name=ResetStatus"`
    SmsFallbackMethod *UpdateSimUpdateSimRequestSmsFallbackMethodEnum `form:"name=SmsFallbackMethod"`
    SmsFallbackURL *string `form:"name=SmsFallbackUrl"`
    SmsMethod *UpdateSimUpdateSimRequestSmsMethodEnum `form:"name=SmsMethod"`
    SmsURL *string `form:"name=SmsUrl"`
    Status *shared.SimEnumStatusEnum `form:"name=Status"`
    UniqueName *string `form:"name=UniqueName"`
    VoiceFallbackMethod *UpdateSimUpdateSimRequestVoiceFallbackMethodEnum `form:"name=VoiceFallbackMethod"`
    VoiceFallbackURL *string `form:"name=VoiceFallbackUrl"`
    VoiceMethod *UpdateSimUpdateSimRequestVoiceMethodEnum `form:"name=VoiceMethod"`
    VoiceURL *string `form:"name=VoiceUrl"`
    
}

type UpdateSimSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateSimRequest struct {
    ServerURL *string 
    PathParams UpdateSimPathParams 
    Request *UpdateSimUpdateSimRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateSimSecurity 
    
}

type UpdateSimResponse struct {
    ContentType string 
    StatusCode int64 
    WirelessV1Sim *shared.WirelessV1Sim 
    
}

