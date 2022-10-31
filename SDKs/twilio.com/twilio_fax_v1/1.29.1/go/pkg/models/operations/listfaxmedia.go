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

type ListFaxMediaListFaxMediaResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFaxMediaListFaxMediaResponse struct {
	Media []shared.FaxV1FaxFaxMedia             `json:"media,omitempty"`
	Meta  *ListFaxMediaListFaxMediaResponseMeta `json:"meta,omitempty"`
}

type ListFaxMediaResponse struct {
	ContentType          string
	ListFaxMediaResponse *ListFaxMediaListFaxMediaResponse
	StatusCode           int64
}
