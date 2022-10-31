package operations

import (
"openapi/pkg/models/shared")
var UpdateTestUserServers = []string{
	"https://studio.twilio.com",
}

type UpdateTestUserPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateTestUserUpdateTestUserRequest struct {
    TestUsers []string `form:"name=TestUsers"`
    
}

type UpdateTestUserSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateTestUserRequest struct {
    ServerURL *string 
    PathParams UpdateTestUserPathParams 
    Request *UpdateTestUserUpdateTestUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateTestUserSecurity 
    
}

type UpdateTestUserResponse struct {
    ContentType string 
    StatusCode int64 
    StudioV2FlowTestUser *shared.StudioV2FlowTestUser 
    
}

