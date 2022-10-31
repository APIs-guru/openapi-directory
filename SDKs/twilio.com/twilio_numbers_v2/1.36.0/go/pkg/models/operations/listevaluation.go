package operations

import (
"openapi/pkg/models/shared")
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
    ServerURL *string 
    PathParams ListEvaluationPathParams 
    QueryParams ListEvaluationQueryParams 
    Security ListEvaluationSecurity 
    
}

type ListEvaluationListEvaluationResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListEvaluationListEvaluationResponse struct {
    Meta *ListEvaluationListEvaluationResponseMeta `json:"meta,omitempty"`
    Results []shared.NumbersV2RegulatoryComplianceBundleEvaluation `json:"results,omitempty"`
    
}

type ListEvaluationResponse struct {
    ContentType string 
    ListEvaluationResponse *ListEvaluationListEvaluationResponse 
    StatusCode int64 
    
}

