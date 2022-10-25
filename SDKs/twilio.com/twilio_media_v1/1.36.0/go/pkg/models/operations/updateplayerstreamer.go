package operations

import (
	"openapi/pkg/models/shared"
)

var UpdatePlayerStreamerServers = []string{
	"https://media.twilio.com",
}

type UpdatePlayerStreamerPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdatePlayerStreamerUpdatePlayerStreamerRequest struct {
	Status shared.PlayerStreamerEnumUpdateStatusEnum `form:"name=Status"`
}

type UpdatePlayerStreamerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdatePlayerStreamerRequest struct {
	ServerURL  *string
	PathParams UpdatePlayerStreamerPathParams
	Request    *UpdatePlayerStreamerUpdatePlayerStreamerRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdatePlayerStreamerSecurity
}

type UpdatePlayerStreamerResponse struct {
	ContentType           string
	StatusCode            int64
	MediaV1PlayerStreamer *shared.MediaV1PlayerStreamer
}
