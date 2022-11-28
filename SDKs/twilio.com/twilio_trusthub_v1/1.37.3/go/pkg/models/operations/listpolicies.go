package operations

import (
	"openapi/pkg/models/shared"
)

var ListPoliciesServerList = []string{
	"https://trusthub.twilio.com",
}

type ListPoliciesQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListPoliciesSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListPoliciesListPoliciesResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListPoliciesListPoliciesResponse struct {
	Meta    *ListPoliciesListPoliciesResponseMeta `json:"meta,omitempty"`
	Results []shared.TrusthubV1Policies           `json:"results,omitempty"`
}

type ListPoliciesRequest struct {
	ServerURL   *string
	QueryParams ListPoliciesQueryParams
	Security    ListPoliciesSecurity
}

type ListPoliciesResponse struct {
	ContentType          string
	ListPoliciesResponse *ListPoliciesListPoliciesResponse
	StatusCode           int64
}
