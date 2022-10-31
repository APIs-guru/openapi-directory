package operations

import (
"openapi/pkg/models/shared")
var CreateIPCommandServers = []string{
	"https://supersim.twilio.com",
}


type CreateIPCommandCreateIPCommandRequestCallbackMethodEnum string

const (
    CreateIPCommandCreateIPCommandRequestCallbackMethodEnumHead CreateIPCommandCreateIPCommandRequestCallbackMethodEnum = "HEAD"
CreateIPCommandCreateIPCommandRequestCallbackMethodEnumGet CreateIPCommandCreateIPCommandRequestCallbackMethodEnum = "GET"
CreateIPCommandCreateIPCommandRequestCallbackMethodEnumPost CreateIPCommandCreateIPCommandRequestCallbackMethodEnum = "POST"
CreateIPCommandCreateIPCommandRequestCallbackMethodEnumPatch CreateIPCommandCreateIPCommandRequestCallbackMethodEnum = "PATCH"
CreateIPCommandCreateIPCommandRequestCallbackMethodEnumPut CreateIPCommandCreateIPCommandRequestCallbackMethodEnum = "PUT"
CreateIPCommandCreateIPCommandRequestCallbackMethodEnumDelete CreateIPCommandCreateIPCommandRequestCallbackMethodEnum = "DELETE"
)


type CreateIPCommandCreateIPCommandRequest struct {
    CallbackMethod *CreateIPCommandCreateIPCommandRequestCallbackMethodEnum `form:"name=CallbackMethod"`
    CallbackURL *string `form:"name=CallbackUrl"`
    DevicePort int64 `form:"name=DevicePort"`
    Payload string `form:"name=Payload"`
    PayloadType *shared.IPCommandEnumPayloadTypeEnum `form:"name=PayloadType"`
    Sim string `form:"name=Sim"`
    
}

type CreateIPCommandSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateIPCommandRequest struct {
    ServerURL *string 
    Request *CreateIPCommandCreateIPCommandRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateIPCommandSecurity 
    
}

type CreateIPCommandResponse struct {
    ContentType string 
    StatusCode int64 
    SupersimV1IPCommand *shared.SupersimV1IPCommand 
    
}

