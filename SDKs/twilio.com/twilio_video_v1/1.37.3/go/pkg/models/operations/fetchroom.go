package operations

import (
	"openapi/pkg/models/shared"
)

var FetchRoomServerList = []string{
	"https://video.twilio.com",
}

type FetchRoomPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchRoomSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchRoomRequest struct {
	ServerURL  *string
	PathParams FetchRoomPathParams
	Security   FetchRoomSecurity
}

type FetchRoomResponse struct {
	ContentType string
	StatusCode  int64
	VideoV1Room *shared.VideoV1Room
}
