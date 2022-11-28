package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateNetworkAccessProfileServerList = []string{
	"https://supersim.twilio.com",
}

type UpdateNetworkAccessProfilePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest struct {
	UniqueName *string `form:"name=UniqueName"`
}

type UpdateNetworkAccessProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateNetworkAccessProfileRequest struct {
	ServerURL  *string
	PathParams UpdateNetworkAccessProfilePathParams
	Request    *UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateNetworkAccessProfileSecurity
}

type UpdateNetworkAccessProfileResponse struct {
	ContentType                    string
	StatusCode                     int64
	SupersimV1NetworkAccessProfile *shared.SupersimV1NetworkAccessProfile
}
