package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSipIPAccessControlListServerList = []string{
	"https://api.twilio.com",
}

type FetchSipIPAccessControlListPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSipIPAccessControlListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSipIPAccessControlListRequest struct {
	ServerURL  *string
	PathParams FetchSipIPAccessControlListPathParams
	Security   FetchSipIPAccessControlListSecurity
}

type FetchSipIPAccessControlListResponse struct {
	ContentType                              string
	StatusCode                               int64
	APIV2010AccountSipSipIPAccessControlList *shared.APIV2010AccountSipSipIPAccessControlList
}
