package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipIPAccessControlListServerList = []string{
	"https://api.twilio.com",
}

type DeleteSipIPAccessControlListPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipIPAccessControlListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipIPAccessControlListRequest struct {
	ServerURL  *string
	PathParams DeleteSipIPAccessControlListPathParams
	Security   DeleteSipIPAccessControlListSecurity
}

type DeleteSipIPAccessControlListResponse struct {
	ContentType string
	StatusCode  int64
}
