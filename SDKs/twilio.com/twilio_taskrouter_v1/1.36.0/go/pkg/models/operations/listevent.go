package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListEventServers = []string{
	"https://taskrouter.twilio.com",
}

type ListEventPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListEventQueryParams struct {
	EndDate        *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	EventType      *string    `queryParam:"style=form,explode=true,name=EventType"`
	Minutes        *int64     `queryParam:"style=form,explode=true,name=Minutes"`
	PageSize       *int64     `queryParam:"style=form,explode=true,name=PageSize"`
	ReservationSid *string    `queryParam:"style=form,explode=true,name=ReservationSid"`
	Sid            *string    `queryParam:"style=form,explode=true,name=Sid"`
	StartDate      *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	TaskChannel    *string    `queryParam:"style=form,explode=true,name=TaskChannel"`
	TaskQueueSid   *string    `queryParam:"style=form,explode=true,name=TaskQueueSid"`
	TaskSid        *string    `queryParam:"style=form,explode=true,name=TaskSid"`
	WorkerSid      *string    `queryParam:"style=form,explode=true,name=WorkerSid"`
	WorkflowSid    *string    `queryParam:"style=form,explode=true,name=WorkflowSid"`
}

type ListEventSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEventRequest struct {
	ServerURL   *string
	PathParams  ListEventPathParams
	QueryParams ListEventQueryParams
	Security    ListEventSecurity
}

type ListEvent200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListEvent200ApplicationJSONListEventResponse struct {
	Events []shared.TaskrouterV1WorkspaceEvent `json:"events"`
	Meta   *ListEvent200ApplicationJSONMeta    `json:"meta"`
}

type ListEventResponse struct {
	ContentType       string
	ListEventResponse *ListEvent200ApplicationJSONListEventResponse
	StatusCode        int64
}
