package operations

import (
	"openapi/pkg/models/shared"
)

var ListWorkerReservationServers = []string{
	"https://taskrouter.twilio.com",
}

type ListWorkerReservationPathParams struct {
	WorkerSid    string `pathParam:"style=simple,explode=false,name=WorkerSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListWorkerReservationQueryParams struct {
	PageSize          *int64                                  `queryParam:"style=form,explode=true,name=PageSize"`
	ReservationStatus *shared.WorkerReservationEnumStatusEnum `queryParam:"style=form,explode=true,name=ReservationStatus"`
}

type ListWorkerReservationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWorkerReservationRequest struct {
	ServerURL   *string
	PathParams  ListWorkerReservationPathParams
	QueryParams ListWorkerReservationQueryParams
	Security    ListWorkerReservationSecurity
}

type ListWorkerReservation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListWorkerReservation200ApplicationJSONListWorkerReservationResponse struct {
	Meta         *ListWorkerReservation200ApplicationJSONMeta          `json:"meta"`
	Reservations []shared.TaskrouterV1WorkspaceWorkerWorkerReservation `json:"reservations"`
}

type ListWorkerReservationResponse struct {
	ContentType                   string
	ListWorkerReservationResponse *ListWorkerReservation200ApplicationJSONListWorkerReservationResponse
	StatusCode                    int64
}
