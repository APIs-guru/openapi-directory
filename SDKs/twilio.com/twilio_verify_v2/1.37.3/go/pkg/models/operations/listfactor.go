package operations

import (
	"openapi/pkg/models/shared"
)

var ListFactorServerList = []string{
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

type ListFactorListFactorResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFactorListFactorResponse struct {
	Factors []shared.VerifyV2ServiceEntityFactor `json:"factors,omitempty"`
	Meta    *ListFactorListFactorResponseMeta    `json:"meta,omitempty"`
}

type ListFactorRequest struct {
	ServerURL   *string
	PathParams  ListFactorPathParams
	QueryParams ListFactorQueryParams
	Security    ListFactorSecurity
}

type ListFactorResponse struct {
	ContentType        string
	ListFactorResponse *ListFactorListFactorResponse
	StatusCode         int64
}
