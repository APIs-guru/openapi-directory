package operations

import (
	"openapi/pkg/models/shared"
)

var ListCustomerProfileEvaluationServers = []string{
	"https://trusthub.twilio.com",
}

type ListCustomerProfileEvaluationPathParams struct {
	CustomerProfileSid string `pathParam:"style=simple,explode=false,name=CustomerProfileSid"`
}

type ListCustomerProfileEvaluationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCustomerProfileEvaluationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCustomerProfileEvaluationRequest struct {
	ServerURL   *string
	PathParams  ListCustomerProfileEvaluationPathParams
	QueryParams ListCustomerProfileEvaluationQueryParams
	Security    ListCustomerProfileEvaluationSecurity
}

type ListCustomerProfileEvaluation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListCustomerProfileEvaluation200ApplicationJSONListCustomerProfileEvaluationResponse struct {
	Meta    *ListCustomerProfileEvaluation200ApplicationJSONMeta        `json:"meta"`
	Results []shared.TrusthubV1CustomerProfileCustomerProfileEvaluation `json:"results"`
}

type ListCustomerProfileEvaluationResponse struct {
	ContentType                           string
	ListCustomerProfileEvaluationResponse *ListCustomerProfileEvaluation200ApplicationJSONListCustomerProfileEvaluationResponse
	StatusCode                            int64
}
