package operations

import (
"openapi/pkg/models/shared")
var UpdateCompositionHookServers = []string{
	"https://video.twilio.com",
}

type UpdateCompositionHookPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}


type UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum string

const (
    UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnumHead UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum = "HEAD"
UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnumGet UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum = "GET"
UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnumPost UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum = "POST"
UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnumPatch UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum = "PATCH"
UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnumPut UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum = "PUT"
UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnumDelete UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum = "DELETE"
)


type UpdateCompositionHookUpdateCompositionHookRequest struct {
    AudioSources []string `form:"name=AudioSources"`
    AudioSourcesExcluded []string `form:"name=AudioSourcesExcluded"`
    Enabled *bool `form:"name=Enabled"`
    Format *shared.CompositionHookEnumFormatEnum `form:"name=Format"`
    FriendlyName string `form:"name=FriendlyName"`
    Resolution *string `form:"name=Resolution"`
    StatusCallback *string `form:"name=StatusCallback"`
    StatusCallbackMethod *UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
    Trim *bool `form:"name=Trim"`
    VideoLayout *interface{} `form:"name=VideoLayout"`
    
}

type UpdateCompositionHookSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateCompositionHookRequest struct {
    ServerURL *string 
    PathParams UpdateCompositionHookPathParams 
    Request *UpdateCompositionHookUpdateCompositionHookRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateCompositionHookSecurity 
    
}

type UpdateCompositionHookResponse struct {
    ContentType string 
    StatusCode int64 
    VideoV1CompositionHook *shared.VideoV1CompositionHook 
    
}

