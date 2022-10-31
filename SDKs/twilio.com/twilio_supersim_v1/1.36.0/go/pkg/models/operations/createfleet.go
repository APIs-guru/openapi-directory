package operations

import (
"openapi/pkg/models/shared")
var CreateFleetServers = []string{
	"https://supersim.twilio.com",
}


type CreateFleetCreateFleetRequestIPCommandsMethodEnum string

const (
    CreateFleetCreateFleetRequestIPCommandsMethodEnumHead CreateFleetCreateFleetRequestIPCommandsMethodEnum = "HEAD"
CreateFleetCreateFleetRequestIPCommandsMethodEnumGet CreateFleetCreateFleetRequestIPCommandsMethodEnum = "GET"
CreateFleetCreateFleetRequestIPCommandsMethodEnumPost CreateFleetCreateFleetRequestIPCommandsMethodEnum = "POST"
CreateFleetCreateFleetRequestIPCommandsMethodEnumPatch CreateFleetCreateFleetRequestIPCommandsMethodEnum = "PATCH"
CreateFleetCreateFleetRequestIPCommandsMethodEnumPut CreateFleetCreateFleetRequestIPCommandsMethodEnum = "PUT"
CreateFleetCreateFleetRequestIPCommandsMethodEnumDelete CreateFleetCreateFleetRequestIPCommandsMethodEnum = "DELETE"
)



type CreateFleetCreateFleetRequestSmsCommandsMethodEnum string

const (
    CreateFleetCreateFleetRequestSmsCommandsMethodEnumHead CreateFleetCreateFleetRequestSmsCommandsMethodEnum = "HEAD"
CreateFleetCreateFleetRequestSmsCommandsMethodEnumGet CreateFleetCreateFleetRequestSmsCommandsMethodEnum = "GET"
CreateFleetCreateFleetRequestSmsCommandsMethodEnumPost CreateFleetCreateFleetRequestSmsCommandsMethodEnum = "POST"
CreateFleetCreateFleetRequestSmsCommandsMethodEnumPatch CreateFleetCreateFleetRequestSmsCommandsMethodEnum = "PATCH"
CreateFleetCreateFleetRequestSmsCommandsMethodEnumPut CreateFleetCreateFleetRequestSmsCommandsMethodEnum = "PUT"
CreateFleetCreateFleetRequestSmsCommandsMethodEnumDelete CreateFleetCreateFleetRequestSmsCommandsMethodEnum = "DELETE"
)


type CreateFleetCreateFleetRequest struct {
    DataEnabled *bool `form:"name=DataEnabled"`
    DataLimit *int64 `form:"name=DataLimit"`
    IPCommandsMethod *CreateFleetCreateFleetRequestIPCommandsMethodEnum `form:"name=IpCommandsMethod"`
    IPCommandsURL *string `form:"name=IpCommandsUrl"`
    NetworkAccessProfile string `form:"name=NetworkAccessProfile"`
    SmsCommandsEnabled *bool `form:"name=SmsCommandsEnabled"`
    SmsCommandsMethod *CreateFleetCreateFleetRequestSmsCommandsMethodEnum `form:"name=SmsCommandsMethod"`
    SmsCommandsURL *string `form:"name=SmsCommandsUrl"`
    UniqueName *string `form:"name=UniqueName"`
    
}

type CreateFleetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateFleetRequest struct {
    ServerURL *string 
    Request *CreateFleetCreateFleetRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateFleetSecurity 
    
}

type CreateFleetResponse struct {
    ContentType string 
    StatusCode int64 
    SupersimV1Fleet *shared.SupersimV1Fleet 
    
}

