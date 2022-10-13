package operations

import (
	"openapi/pkg/models/shared"
)

var ListRegulationServers = []string{
	"https://numbers.twilio.com",
}

type ListRegulationQueryParams struct {
	EndUserType *shared.RegulationEnumEndUserTypeEnum `queryParam:"style=form,explode=true,name=EndUserType"`
	IsoCountry  *string                               `queryParam:"style=form,explode=true,name=IsoCountry"`
	NumberType  *string                               `queryParam:"style=form,explode=true,name=NumberType"`
	PageSize    *int64                                `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRegulationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRegulationRequest struct {
	ServerURL   *string
	QueryParams ListRegulationQueryParams
	Security    ListRegulationSecurity
}

type ListRegulation200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListRegulation200ApplicationJSONListRegulationResponse struct {
	Meta    *ListRegulation200ApplicationJSONMeta            `json:"meta"`
	Results []shared.NumbersV2RegulatoryComplianceRegulation `json:"results"`
}

type ListRegulationResponse struct {
	ContentType            string
	ListRegulationResponse *ListRegulation200ApplicationJSONListRegulationResponse
	StatusCode             int64
}
