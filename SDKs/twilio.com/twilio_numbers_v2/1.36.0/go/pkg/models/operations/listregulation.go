package operations

import (
"openapi/pkg/models/shared")
var ListRegulationServers = []string{
	"https://numbers.twilio.com",
}

type ListRegulationQueryParams struct {
    EndUserType *shared.RegulationEnumEndUserTypeEnum `queryParam:"style=form,explode=true,name=EndUserType"`
    IsoCountry *string `queryParam:"style=form,explode=true,name=IsoCountry"`
    NumberType *string `queryParam:"style=form,explode=true,name=NumberType"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListRegulationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListRegulationRequest struct {
    ServerURL *string 
    QueryParams ListRegulationQueryParams 
    Security ListRegulationSecurity 
    
}

type ListRegulationListRegulationResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListRegulationListRegulationResponse struct {
    Meta *ListRegulationListRegulationResponseMeta `json:"meta,omitempty"`
    Results []shared.NumbersV2RegulatoryComplianceRegulation `json:"results,omitempty"`
    
}

type ListRegulationResponse struct {
    ContentType string 
    ListRegulationResponse *ListRegulationListRegulationResponse 
    StatusCode int64 
    
}

