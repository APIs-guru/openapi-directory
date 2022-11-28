package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListBindingServerList = []string{
	"https://notify.twilio.com",
}

type ListBindingPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListBindingQueryParams struct {
	EndDate   *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	Identity  []string   `queryParam:"style=form,explode=true,name=Identity"`
	PageSize  *int64     `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
	Tag       []string   `queryParam:"style=form,explode=true,name=Tag"`
}

type ListBindingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListBindingListBindingResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListBindingListBindingResponse struct {
	Bindings []shared.NotifyV1ServiceBinding     `json:"bindings,omitempty"`
	Meta     *ListBindingListBindingResponseMeta `json:"meta,omitempty"`
}

type ListBindingRequest struct {
	ServerURL   *string
	PathParams  ListBindingPathParams
	QueryParams ListBindingQueryParams
	Security    ListBindingSecurity
}

type ListBindingResponse struct {
	ContentType         string
	ListBindingResponse *ListBindingListBindingResponse
	StatusCode          int64
}
