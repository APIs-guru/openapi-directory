package operations

import (
"openapi/pkg/models/shared")
var CreateEndUserServers = []string{
	"https://numbers.twilio.com",
}

type CreateEndUserCreateEndUserRequest struct {
    Attributes *interface{} `form:"name=Attributes"`
    FriendlyName string `form:"name=FriendlyName"`
    Type shared.EndUserEnumTypeEnum `form:"name=Type"`
    
}

type CreateEndUserSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateEndUserRequest struct {
    ServerURL *string 
    Request *CreateEndUserCreateEndUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateEndUserSecurity 
    
}

type CreateEndUserResponse struct {
    ContentType string 
    StatusCode int64 
    NumbersV2RegulatoryComplianceEndUser *shared.NumbersV2RegulatoryComplianceEndUser 
    
}

