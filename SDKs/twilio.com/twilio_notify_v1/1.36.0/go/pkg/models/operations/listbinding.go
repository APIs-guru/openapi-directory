package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListBindingServers = []string{
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

type ListBindingRequest struct {
	ServerURL   *string
	PathParams  ListBindingPathParams
	QueryParams ListBindingQueryParams
	Security    ListBindingSecurity
}

type ListBinding200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListBinding200ApplicationJSONListBindingResponse struct {
	Bindings []shared.NotifyV1ServiceBinding    `json:"bindings,omitempty"`
	Meta     *ListBinding200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListBindingResponse struct {
	ContentType         string
	ListBindingResponse *ListBinding200ApplicationJSONListBindingResponse
	StatusCode          int64
}
