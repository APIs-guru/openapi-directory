package operations

import (
"openapi/pkg/models/shared")
var UpdateUserServers = []string{
	"https://frontline-api.twilio.com",
}

type UpdateUserPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateUserUpdateUserRequest struct {
    Avatar *string `form:"name=Avatar"`
    FriendlyName *string `form:"name=FriendlyName"`
    IsAvailable *bool `form:"name=IsAvailable"`
    State *shared.UserEnumStateTypeEnum `form:"name=State"`
    
}

type UpdateUserSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateUserRequest struct {
    ServerURL *string 
    PathParams UpdateUserPathParams 
    Request *UpdateUserUpdateUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateUserSecurity 
    
}

type UpdateUserResponse struct {
    ContentType string 
    StatusCode int64 
    FrontlineV1User *shared.FrontlineV1User 
    
}

