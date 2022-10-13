package operations

import (
	"openapi/pkg/models/shared"
)

var ListTaskReservationServers = []string{
	"https://taskrouter.twilio.com",
}

type ListTaskReservationPathParams struct {
	TaskSid      string `pathParam:"style=simple,explode=false,name=TaskSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListTaskReservationQueryParams struct {
	PageSize          *int64                                `queryParam:"style=form,explode=true,name=PageSize"`
	ReservationStatus *shared.TaskReservationEnumStatusEnum `queryParam:"style=form,explode=true,name=ReservationStatus"`
}

type ListTaskReservationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTaskReservationRequest struct {
	ServerURL   *string
	PathParams  ListTaskReservationPathParams
	QueryParams ListTaskReservationQueryParams
	Security    ListTaskReservationSecurity
}

type ListTaskReservation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTaskReservation200ApplicationJSONListTaskReservationResponse struct {
	Meta         *ListTaskReservation200ApplicationJSONMeta        `json:"meta"`
	Reservations []shared.TaskrouterV1WorkspaceTaskTaskReservation `json:"reservations"`
}

type ListTaskReservationResponse struct {
	ContentType                 string
	ListTaskReservationResponse *ListTaskReservation200ApplicationJSONListTaskReservationResponse
	StatusCode                  int64
}
