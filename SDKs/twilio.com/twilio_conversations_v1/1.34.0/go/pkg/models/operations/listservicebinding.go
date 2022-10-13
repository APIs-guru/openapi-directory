package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceBindingServers = []string{
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

type ListServiceBindingRequest struct {
	ServerURL   *string
	PathParams  ListServiceBindingPathParams
	QueryParams ListServiceBindingQueryParams
	Security    ListServiceBindingSecurity
}

type ListServiceBinding200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListServiceBinding200ApplicationJSONListServiceBindingResponse struct {
	Bindings []shared.ConversationsV1ServiceServiceBinding `json:"bindings"`
	Meta     *ListServiceBinding200ApplicationJSONMeta     `json:"meta"`
}

type ListServiceBindingResponse struct {
	ContentType                string
	ListServiceBindingResponse *ListServiceBinding200ApplicationJSONListServiceBindingResponse
	StatusCode                 int64
}
