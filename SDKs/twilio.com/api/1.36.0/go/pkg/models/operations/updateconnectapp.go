package operations

import (
"openapi/pkg/models/shared")
var UpdateConnectAppServers = []string{
	"https://api.twilio.com",
}

type UpdateConnectAppPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}


type UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum string

const (
    UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnumHead UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum = "HEAD"
UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnumGet UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum = "GET"
UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnumPost UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum = "POST"
UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnumPatch UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum = "PATCH"
UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnumPut UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum = "PUT"
UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnumDelete UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum = "DELETE"
)


type UpdateConnectAppUpdateConnectAppRequest struct {
    AuthorizeRedirectURL *string `form:"name=AuthorizeRedirectUrl"`
    CompanyName *string `form:"name=CompanyName"`
    DeauthorizeCallbackMethod *UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum `form:"name=DeauthorizeCallbackMethod"`
    DeauthorizeCallbackURL *string `form:"name=DeauthorizeCallbackUrl"`
    Description *string `form:"name=Description"`
    FriendlyName *string `form:"name=FriendlyName"`
    HomepageURL *string `form:"name=HomepageUrl"`
    Permissions []shared.ConnectAppEnumPermissionEnum `form:"name=Permissions"`
    
}

type UpdateConnectAppSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateConnectAppRequest struct {
    ServerURL *string 
    PathParams UpdateConnectAppPathParams 
    Request *UpdateConnectAppUpdateConnectAppRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateConnectAppSecurity 
    
}

type UpdateConnectAppResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountConnectApp *shared.APIV2010AccountConnectApp 
    
}

