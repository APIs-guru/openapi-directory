package operations

import (
	"openapi/pkg/models/shared"
)

var ListFaxMediaServers = []string{
	"https://fax.twilio.com",
}

type ListFaxMediaPathParams struct {
	FaxSid string `pathParam:"style=simple,explode=false,name=FaxSid"`
}

type ListFaxMediaQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFaxMediaSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFaxMediaRequest struct {
	ServerURL   *string
	PathParams  ListFaxMediaPathParams
	QueryParams ListFaxMediaQueryParams
	Security    ListFaxMediaSecurity
}

type ListFaxMedia200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFaxMedia200ApplicationJSONListFaxMediaResponse struct {
	Media []shared.FaxV1FaxFaxMedia           `json:"media"`
	Meta  *ListFaxMedia200ApplicationJSONMeta `json:"meta"`
}

type ListFaxMediaResponse struct {
	ContentType          string
	ListFaxMediaResponse *ListFaxMedia200ApplicationJSONListFaxMediaResponse
	StatusCode           int64
}
