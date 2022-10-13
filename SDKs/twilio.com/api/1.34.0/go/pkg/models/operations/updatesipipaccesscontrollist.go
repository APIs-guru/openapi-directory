package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSipIPAccessControlListServers = []string{
	"https://api.twilio.com",
}

type UpdateSipIPAccessControlListPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSipIPAccessControlListRequestBodyUpdateSipIPAccessControlListRequest struct {
	FriendlyName string `form:"name=FriendlyName"`
}

type UpdateSipIPAccessControlListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSipIPAccessControlListRequest struct {
	ServerURL  *string
	PathParams UpdateSipIPAccessControlListPathParams
	Request    *UpdateSipIPAccessControlListRequestBodyUpdateSipIPAccessControlListRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSipIPAccessControlListSecurity
}

type UpdateSipIPAccessControlListResponse struct {
	ContentType                              string
	StatusCode                               int64
	APIV2010AccountSipSipIPAccessControlList *shared.APIV2010AccountSipSipIPAccessControlList
}
