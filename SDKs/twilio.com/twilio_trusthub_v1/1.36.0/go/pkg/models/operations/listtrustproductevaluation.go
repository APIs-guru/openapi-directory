package operations

import (
	"openapi/pkg/models/shared"
)

var ListTrustProductEvaluationServers = []string{
	"https://trusthub.twilio.com",
}

type ListTrustProductEvaluationPathParams struct {
	TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
}

type ListTrustProductEvaluationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListTrustProductEvaluationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTrustProductEvaluationRequest struct {
	ServerURL   *string
	PathParams  ListTrustProductEvaluationPathParams
	QueryParams ListTrustProductEvaluationQueryParams
	Security    ListTrustProductEvaluationSecurity
}

type ListTrustProductEvaluation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTrustProductEvaluation200ApplicationJSONListTrustProductEvaluationResponse struct {
	Meta    *ListTrustProductEvaluation200ApplicationJSONMeta     `json:"meta"`
	Results []shared.TrusthubV1TrustProductTrustProductEvaluation `json:"results"`
}

type ListTrustProductEvaluationResponse struct {
	ContentType                        string
	ListTrustProductEvaluationResponse *ListTrustProductEvaluation200ApplicationJSONListTrustProductEvaluationResponse
	StatusCode                         int64
}
