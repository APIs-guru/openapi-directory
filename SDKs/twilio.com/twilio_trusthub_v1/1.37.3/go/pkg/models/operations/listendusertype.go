package operations

import (
	"openapi/pkg/models/shared"
)

var ListEndUserTypeServerList = []string{
	"https://trusthub.twilio.com",
}

type ListEndUserTypeQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEndUserTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEndUserTypeListEndUserTypeResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListEndUserTypeListEndUserTypeResponse struct {
	EndUserTypes []shared.TrusthubV1EndUserType              `json:"end_user_types,omitempty"`
	Meta         *ListEndUserTypeListEndUserTypeResponseMeta `json:"meta,omitempty"`
}

type ListEndUserTypeRequest struct {
	ServerURL   *string
	QueryParams ListEndUserTypeQueryParams
	Security    ListEndUserTypeSecurity
}

type ListEndUserTypeResponse struct {
	ContentType             string
	ListEndUserTypeResponse *ListEndUserTypeListEndUserTypeResponse
	StatusCode              int64
}
