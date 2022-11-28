package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceBindingServerList = []string{
	"https://conversations.twilio.com",
}

type ListServiceBindingPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type ListServiceBindingQueryParams struct {
	BindingType []shared.ServiceBindingEnumBindingTypeEnum `queryParam:"style=form,explode=true,name=BindingType"`
	Identity    []string                                   `queryParam:"style=form,explode=true,name=Identity"`
	PageSize    *int64                                     `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceBindingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceBindingListServiceBindingResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceBindingListServiceBindingResponse struct {
	Bindings []shared.ConversationsV1ServiceServiceBinding     `json:"bindings,omitempty"`
	Meta     *ListServiceBindingListServiceBindingResponseMeta `json:"meta,omitempty"`
}

type ListServiceBindingRequest struct {
	ServerURL   *string
	PathParams  ListServiceBindingPathParams
	QueryParams ListServiceBindingQueryParams
	Security    ListServiceBindingSecurity
}

type ListServiceBindingResponse struct {
	ContentType                string
	ListServiceBindingResponse *ListServiceBindingListServiceBindingResponse
	StatusCode                 int64
}
