package operations

import (
	"openapi/pkg/models/shared"
)

var ListEndUserTypeServers = []string{
	"https://numbers.twilio.com",
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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListEndUserType200ApplicationJSONListEndUserTypeResponse struct {
	EndUserTypes []shared.NumbersV2RegulatoryComplianceEndUserType `json:"end_user_types,omitempty"`
	Meta         *ListEndUserType200ApplicationJSONMeta            `json:"meta,omitempty"`
}

type ListEndUserTypeResponse struct {
	ContentType             string
	ListEndUserTypeResponse *ListEndUserType200ApplicationJSONListEndUserTypeResponse
	StatusCode              int64
}
