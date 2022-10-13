package operations

import (
	"openapi/pkg/models/shared"
)

var ListFactorServers = []string{
	"https://verify.twilio.com",
}

type ListFactorPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListFactorQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFactorSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFactorRequest struct {
	ServerURL   *string
	PathParams  ListFactorPathParams
	QueryParams ListFactorQueryParams
	Security    ListFactorSecurity
}

type ListFactor200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFactor200ApplicationJSONListFactorResponse struct {
	Factors []shared.VerifyV2ServiceEntityFactor `json:"factors"`
	Meta    *ListFactor200ApplicationJSONMeta    `json:"meta"`
}

type ListFactorResponse struct {
	ContentType        string
	ListFactorResponse *ListFactor200ApplicationJSONListFactorResponse
	StatusCode         int64
}
