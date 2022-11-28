package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTrunkServerList = []string{
	"https://trunking.twilio.com",
}

type FetchTrunkPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchTrunkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTrunkRequest struct {
	ServerURL  *string
	PathParams FetchTrunkPathParams
	Security   FetchTrunkSecurity
}

type FetchTrunkResponse struct {
	ContentType     string
	StatusCode      int64
	TrunkingV1Trunk *shared.TrunkingV1Trunk
}
