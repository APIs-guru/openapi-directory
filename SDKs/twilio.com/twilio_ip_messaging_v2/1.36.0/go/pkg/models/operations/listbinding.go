package operations

import (
	"openapi/pkg/models/shared"
)

var ListBindingServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListBindingPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListBindingQueryParams struct {
	BindingType []shared.BindingEnumBindingTypeEnum `queryParam:"style=form,explode=true,name=BindingType"`
	Identity    []string                            `queryParam:"style=form,explode=true,name=Identity"`
	PageSize    *int64                              `queryParam:"style=form,explode=true,name=PageSize"`
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
	Bindings []shared.IPMessagingV2ServiceBinding `json:"bindings,omitempty"`
	Meta     *ListBindingListBindingResponseMeta  `json:"meta,omitempty"`
}

type ListBindingResponse struct {
	ContentType         string
	ListBindingResponse *ListBindingListBindingResponse
	StatusCode          int64
}
