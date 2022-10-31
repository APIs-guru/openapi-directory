package operations

import (
"openapi/pkg/models/shared")
var CreateSipIPAccessControlListServers = []string{
	"https://api.twilio.com",
}

type CreateSipIPAccessControlListPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type CreateSipIPAccessControlListCreateSipIPAccessControlListRequest struct {
    FriendlyName string `form:"name=FriendlyName"`
    
}

type CreateSipIPAccessControlListSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateSipIPAccessControlListRequest struct {
    ServerURL *string 
    PathParams CreateSipIPAccessControlListPathParams 
    Request *CreateSipIPAccessControlListCreateSipIPAccessControlListRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateSipIPAccessControlListSecurity 
    
}

type CreateSipIPAccessControlListResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountSipSipIPAccessControlList *shared.APIV2010AccountSipSipIPAccessControlList 
    
}

