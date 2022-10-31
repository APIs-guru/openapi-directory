package operations

import (
"openapi/pkg/models/shared")
var CreateByocTrunkServers = []string{
	"https://voice.twilio.com",
}


type CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum string

const (
    CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnumHead CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = "HEAD"
CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnumGet CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = "GET"
CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnumPost CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = "POST"
CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnumPatch CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = "PATCH"
CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnumPut CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = "PUT"
CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnumDelete CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum = "DELETE"
)



type CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum string

const (
    CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnumHead CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = "HEAD"
CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnumGet CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = "GET"
CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnumPost CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = "POST"
CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnumPatch CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = "PATCH"
CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnumPut CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = "PUT"
CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnumDelete CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum = "DELETE"
)



type CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum string

const (
    CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnumHead CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = "HEAD"
CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnumGet CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = "GET"
CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnumPost CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = "POST"
CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnumPatch CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = "PATCH"
CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnumPut CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = "PUT"
CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnumDelete CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum = "DELETE"
)


type CreateByocTrunkCreateByocTrunkRequest struct {
    CnamLookupEnabled *bool `form:"name=CnamLookupEnabled"`
    ConnectionPolicySid *string `form:"name=ConnectionPolicySid"`
    FriendlyName *string `form:"name=FriendlyName"`
    FromDomainSid *string `form:"name=FromDomainSid"`
    StatusCallbackMethod *CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
    StatusCallbackURL *string `form:"name=StatusCallbackUrl"`
    VoiceFallbackMethod *CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum `form:"name=VoiceFallbackMethod"`
    VoiceFallbackURL *string `form:"name=VoiceFallbackUrl"`
    VoiceMethod *CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum `form:"name=VoiceMethod"`
    VoiceURL *string `form:"name=VoiceUrl"`
    
}

type CreateByocTrunkSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateByocTrunkRequest struct {
    ServerURL *string 
    Request *CreateByocTrunkCreateByocTrunkRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateByocTrunkSecurity 
    
}

type CreateByocTrunkResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1ByocTrunk *shared.VoiceV1ByocTrunk 
    
}

