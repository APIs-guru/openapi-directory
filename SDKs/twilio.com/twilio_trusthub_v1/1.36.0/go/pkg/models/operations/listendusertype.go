package operations

import (
	"openapi/pkg/models/shared"
)

var ListEndUserTypeServers = []string{
	"https://trusthub.twilio.com",
}

type ListEndUserTypeQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEndUserTypeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEndUserTypeRequest struct {
	ServerURL   *string
	QueryParams ListEndUserTypeQueryParams
	Security    ListEndUserTypeSecurity
}

type ListEndUserType200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListEndUserType200ApplicationJSONListEndUserTypeResponse struct {
	EndUserTypes []shared.TrusthubV1EndUserType         `json:"end_user_types"`
	Meta         *ListEndUserType200ApplicationJSONMeta `json:"meta"`
}

type ListEndUserTypeResponse struct {
	ContentType             string
	ListEndUserTypeResponse *ListEndUserType200ApplicationJSONListEndUserTypeResponse
	StatusCode              int64
}
