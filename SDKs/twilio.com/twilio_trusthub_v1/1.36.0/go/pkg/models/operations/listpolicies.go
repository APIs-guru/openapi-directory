package operations

import (
	"openapi/pkg/models/shared"
)

var ListPoliciesServers = []string{
	"https://trusthub.twilio.com",
}

type ListPoliciesQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListPoliciesSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListPoliciesRequest struct {
	ServerURL   *string
	QueryParams ListPoliciesQueryParams
	Security    ListPoliciesSecurity
}

type ListPolicies200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListPolicies200ApplicationJSONListPoliciesResponse struct {
	Meta    *ListPolicies200ApplicationJSONMeta `json:"meta"`
	Results []shared.TrusthubV1Policies         `json:"results"`
}

type ListPoliciesResponse struct {
	ContentType          string
	ListPoliciesResponse *ListPolicies200ApplicationJSONListPoliciesResponse
	StatusCode           int64
}
