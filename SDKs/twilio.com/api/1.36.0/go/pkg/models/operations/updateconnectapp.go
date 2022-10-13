package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateConnectAppServers = []string{
	"https://api.twilio.com",
}

type UpdateConnectAppPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnum string

const (
	UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnumHead   UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnum = "HEAD"
	UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnumGet    UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnum = "GET"
	UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnumPost   UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnum = "POST"
	UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnumPatch  UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnum = "PATCH"
	UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnumPut    UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnum = "PUT"
	UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnumDelete UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnum = "DELETE"
)

type UpdateConnectAppRequestBodyUpdateConnectAppRequest struct {
	AuthorizeRedirectURL      *string                                                   `form:"name=AuthorizeRedirectUrl"`
	CompanyName               *string                                                   `form:"name=CompanyName"`
	DeauthorizeCallbackMethod *UpdateConnectAppRequestBodyDeauthorizeCallbackMethodEnum `form:"name=DeauthorizeCallbackMethod"`
	DeauthorizeCallbackURL    *string                                                   `form:"name=DeauthorizeCallbackUrl"`
	Description               *string                                                   `form:"name=Description"`
	FriendlyName              *string                                                   `form:"name=FriendlyName"`
	HomepageURL               *string                                                   `form:"name=HomepageUrl"`
	Permissions               []shared.ConnectAppEnumPermissionEnum                     `form:"name=Permissions"`
}

type UpdateConnectAppSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConnectAppRequest struct {
	ServerURL  *string
	PathParams UpdateConnectAppPathParams
	Request    *UpdateConnectAppRequestBodyUpdateConnectAppRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConnectAppSecurity
}

type UpdateConnectAppResponse struct {
	ContentType               string
	StatusCode                int64
	APIV2010AccountConnectApp *shared.APIV2010AccountConnectApp
}
