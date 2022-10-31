package operations

import (
"openapi/pkg/models/shared")
var CreateSmsCommandServers = []string{
	"https://supersim.twilio.com",
}


type CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum string

const (
    CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnumHead CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum = "HEAD"
CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnumGet CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum = "GET"
CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnumPost CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum = "POST"
CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnumPatch CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum = "PATCH"
CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnumPut CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum = "PUT"
CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnumDelete CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum = "DELETE"
)


type CreateSmsCommandCreateSmsCommandRequest struct {
    CallbackMethod *CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum `form:"name=CallbackMethod"`
    CallbackURL *string `form:"name=CallbackUrl"`
    Payload string `form:"name=Payload"`
    Sim string `form:"name=Sim"`
    
}

type CreateSmsCommandSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateSmsCommandRequest struct {
    ServerURL *string 
    Request *CreateSmsCommandCreateSmsCommandRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateSmsCommandSecurity 
    
}

type CreateSmsCommandResponse struct {
    ContentType string 
    StatusCode int64 
    SupersimV1SmsCommand *shared.SupersimV1SmsCommand 
    
}

