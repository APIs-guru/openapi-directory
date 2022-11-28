package operations

import (
	"openapi/pkg/models/shared"
)

var FetchWorkerReservationServerList = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkerReservationPathParams struct {
	Sid          string `pathParam:"style=simple,explode=false,name=Sid"`
	WorkerSid    string `pathParam:"style=simple,explode=false,name=WorkerSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type FetchWorkerReservationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchWorkerReservationRequest struct {
	ServerURL  *string
	PathParams FetchWorkerReservationPathParams
	Security   FetchWorkerReservationSecurity
}

type FetchWorkerReservationResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	TaskrouterV1WorkspaceWorkerWorkerReservation *shared.TaskrouterV1WorkspaceWorkerWorkerReservation
}
