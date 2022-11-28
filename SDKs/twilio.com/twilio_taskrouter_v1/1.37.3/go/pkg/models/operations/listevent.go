package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListEventServerList = []string{
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

type ListEventListEventResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListEventListEventResponse struct {
	Events []shared.TaskrouterV1WorkspaceEvent `json:"events,omitempty"`
	Meta   *ListEventListEventResponseMeta     `json:"meta,omitempty"`
}

type ListEventRequest struct {
	ServerURL   *string
	PathParams  ListEventPathParams
	QueryParams ListEventQueryParams
	Security    ListEventSecurity
}

type ListEventResponse struct {
	ContentType       string
	ListEventResponse *ListEventListEventResponse
	StatusCode        int64
}
