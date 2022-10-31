package operations

import (
"openapi/pkg/models/shared")
var UpdateApplicationServers = []string{
	"https://api.twilio.com",
}

type UpdateApplicationPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}


type UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum string

const (
    UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnumHead UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum = "HEAD"
UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnumGet UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum = "GET"
UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnumPost UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum = "POST"
UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnumPatch UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum = "PATCH"
UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnumPut UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum = "PUT"
UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnumDelete UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum = "DELETE"
)



type UpdateApplicationUpdateApplicationRequestSmsMethodEnum string

const (
    UpdateApplicationUpdateApplicationRequestSmsMethodEnumHead UpdateApplicationUpdateApplicationRequestSmsMethodEnum = "HEAD"
UpdateApplicationUpdateApplicationRequestSmsMethodEnumGet UpdateApplicationUpdateApplicationRequestSmsMethodEnum = "GET"
UpdateApplicationUpdateApplicationRequestSmsMethodEnumPost UpdateApplicationUpdateApplicationRequestSmsMethodEnum = "POST"
UpdateApplicationUpdateApplicationRequestSmsMethodEnumPatch UpdateApplicationUpdateApplicationRequestSmsMethodEnum = "PATCH"
UpdateApplicationUpdateApplicationRequestSmsMethodEnumPut UpdateApplicationUpdateApplicationRequestSmsMethodEnum = "PUT"
UpdateApplicationUpdateApplicationRequestSmsMethodEnumDelete UpdateApplicationUpdateApplicationRequestSmsMethodEnum = "DELETE"
)



type UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum string

const (
    UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnumHead UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum = "HEAD"
UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnumGet UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum = "GET"
UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnumPost UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum = "POST"
UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnumPatch UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum = "PATCH"
UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnumPut UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum = "PUT"
UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnumDelete UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum = "DELETE"
)



type UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum string

const (
    UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnumHead UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum = "HEAD"
UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnumGet UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum = "GET"
UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnumPost UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum = "POST"
UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnumPatch UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum = "PATCH"
UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnumPut UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum = "PUT"
UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnumDelete UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum = "DELETE"
)



type UpdateApplicationUpdateApplicationRequestVoiceMethodEnum string

const (
    UpdateApplicationUpdateApplicationRequestVoiceMethodEnumHead UpdateApplicationUpdateApplicationRequestVoiceMethodEnum = "HEAD"
UpdateApplicationUpdateApplicationRequestVoiceMethodEnumGet UpdateApplicationUpdateApplicationRequestVoiceMethodEnum = "GET"
UpdateApplicationUpdateApplicationRequestVoiceMethodEnumPost UpdateApplicationUpdateApplicationRequestVoiceMethodEnum = "POST"
UpdateApplicationUpdateApplicationRequestVoiceMethodEnumPatch UpdateApplicationUpdateApplicationRequestVoiceMethodEnum = "PATCH"
UpdateApplicationUpdateApplicationRequestVoiceMethodEnumPut UpdateApplicationUpdateApplicationRequestVoiceMethodEnum = "PUT"
UpdateApplicationUpdateApplicationRequestVoiceMethodEnumDelete UpdateApplicationUpdateApplicationRequestVoiceMethodEnum = "DELETE"
)


type UpdateApplicationUpdateApplicationRequest struct {
    APIVersion *string `form:"name=ApiVersion"`
    FriendlyName *string `form:"name=FriendlyName"`
    MessageStatusCallback *string `form:"name=MessageStatusCallback"`
    SmsFallbackMethod *UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum `form:"name=SmsFallbackMethod"`
    SmsFallbackURL *string `form:"name=SmsFallbackUrl"`
    SmsMethod *UpdateApplicationUpdateApplicationRequestSmsMethodEnum `form:"name=SmsMethod"`
    SmsStatusCallback *string `form:"name=SmsStatusCallback"`
    SmsURL *string `form:"name=SmsUrl"`
    StatusCallback *string `form:"name=StatusCallback"`
    StatusCallbackMethod *UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
    VoiceCallerIDLookup *bool `form:"name=VoiceCallerIdLookup"`
    VoiceFallbackMethod *UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum `form:"name=VoiceFallbackMethod"`
    VoiceFallbackURL *string `form:"name=VoiceFallbackUrl"`
    VoiceMethod *UpdateApplicationUpdateApplicationRequestVoiceMethodEnum `form:"name=VoiceMethod"`
    VoiceURL *string `form:"name=VoiceUrl"`
    
}

type UpdateApplicationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateApplicationRequest struct {
    ServerURL *string 
    PathParams UpdateApplicationPathParams 
    Request *UpdateApplicationUpdateApplicationRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateApplicationSecurity 
    
}

type UpdateApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountApplication *shared.APIV2010AccountApplication 
    
}

