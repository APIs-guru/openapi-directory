package operations

import (
	"openapi/pkg/models/shared"
)

var ListWorkerReservationServerList = []string{
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

type ListWorkerReservationListWorkerReservationResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListWorkerReservationListWorkerReservationResponse struct {
	Meta         *ListWorkerReservationListWorkerReservationResponseMeta `json:"meta,omitempty"`
	Reservations []shared.TaskrouterV1WorkspaceWorkerWorkerReservation   `json:"reservations,omitempty"`
}

type ListWorkerReservationRequest struct {
	ServerURL   *string
	PathParams  ListWorkerReservationPathParams
	QueryParams ListWorkerReservationQueryParams
	Security    ListWorkerReservationSecurity
}

type ListWorkerReservationResponse struct {
	ContentType                   string
	ListWorkerReservationResponse *ListWorkerReservationListWorkerReservationResponse
	StatusCode                    int64
}
