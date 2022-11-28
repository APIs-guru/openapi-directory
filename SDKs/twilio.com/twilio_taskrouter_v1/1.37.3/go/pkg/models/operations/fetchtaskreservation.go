package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTaskReservationServerList = []string{
	"https://taskrouter.twilio.com",
}

type FetchTaskReservationPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchTaskReservationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTaskReservationRequest struct {
	ServerURL  *string
	PathParams FetchTaskReservationPathParams
	Security   FetchTaskReservationSecurity
}

type FetchTaskReservationResponse struct {
	ContentType                              string
	StatusCode                               int64
	TaskrouterV1WorkspaceTaskTaskReservation *shared.TaskrouterV1WorkspaceTaskTaskReservation
}
