package operations

import (
	"openapi/pkg/models/shared"
)

var ListEvaluationServers = []string{
	"https://numbers.twilio.com",
}

type ListEvaluationPathParams struct {
	BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
}

type ListEvaluationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEvaluationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEvaluationRequest struct {
	ServerURL   *string
	PathParams  ListEvaluationPathParams
	QueryParams ListEvaluationQueryParams
	Security    ListEvaluationSecurity
}

type ListEvaluation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListEvaluation200ApplicationJSONListEvaluationResponse struct {
	Meta    *ListEvaluation200ApplicationJSONMeta                  `json:"meta"`
	Results []shared.NumbersV2RegulatoryComplianceBundleEvaluation `json:"results"`
}

type ListEvaluationResponse struct {
	ContentType            string
	ListEvaluationResponse *ListEvaluation200ApplicationJSONListEvaluationResponse
	StatusCode             int64
}
