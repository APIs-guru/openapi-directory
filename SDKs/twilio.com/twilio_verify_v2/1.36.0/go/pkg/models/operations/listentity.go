package operations

import (
	"openapi/pkg/models/shared"
)

var ListEntityServers = []string{
	"https://verify.twilio.com",
}

type ListEntityPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListEntityQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEntitySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEntityRequest struct {
	ServerURL   *string
	PathParams  ListEntityPathParams
	QueryParams ListEntityQueryParams
	Security    ListEntitySecurity
}

type ListEntity200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListEntity200ApplicationJSONListEntityResponse struct {
	Entities []shared.VerifyV2ServiceEntity    `json:"entities"`
	Meta     *ListEntity200ApplicationJSONMeta `json:"meta"`
}

type ListEntityResponse struct {
	ContentType        string
	ListEntityResponse *ListEntity200ApplicationJSONListEntityResponse
	StatusCode         int64
}
