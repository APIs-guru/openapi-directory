package operations

import (
	"openapi/pkg/models/shared"
)

var CreateIPAccessControlListServerList = []string{
	"https://trunking.twilio.com",
}

type CreateIPAccessControlListPathParams struct {
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type CreateIPAccessControlListCreateIPAccessControlListRequest struct {
	IPAccessControlListSid string `form:"name=IpAccessControlListSid"`
}

type CreateIPAccessControlListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIPAccessControlListRequest struct {
	ServerURL  *string
	PathParams CreateIPAccessControlListPathParams
	Request    *CreateIPAccessControlListCreateIPAccessControlListRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateIPAccessControlListSecurity
}

type CreateIPAccessControlListResponse struct {
	ContentType                        string
	StatusCode                         int64
	TrunkingV1TrunkIPAccessControlList *shared.TrunkingV1TrunkIPAccessControlList
}
