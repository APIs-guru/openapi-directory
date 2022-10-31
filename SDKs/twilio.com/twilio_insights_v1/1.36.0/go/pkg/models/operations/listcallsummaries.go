package operations

import (
"openapi/pkg/models/shared")
var ListCallSummariesServers = []string{
	"https://insights.twilio.com",
}

type ListCallSummariesQueryParams struct {
    AbnormalSession *bool `queryParam:"style=form,explode=true,name=AbnormalSession"`
    Branded *bool `queryParam:"style=form,explode=true,name=Branded"`
    CallState *string `queryParam:"style=form,explode=true,name=CallState"`
    CallType *string `queryParam:"style=form,explode=true,name=CallType"`
    Direction *string `queryParam:"style=form,explode=true,name=Direction"`
    EndTime *string `queryParam:"style=form,explode=true,name=EndTime"`
    From *string `queryParam:"style=form,explode=true,name=From"`
    FromCarrier *string `queryParam:"style=form,explode=true,name=FromCarrier"`
    FromCountryCode *string `queryParam:"style=form,explode=true,name=FromCountryCode"`
    HasTag *bool `queryParam:"style=form,explode=true,name=HasTag"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    ProcessingState *shared.CallSummariesEnumProcessingStateRequestEnum `queryParam:"style=form,explode=true,name=ProcessingState"`
    SortBy *shared.CallSummariesEnumSortByEnum `queryParam:"style=form,explode=true,name=SortBy"`
    StartTime *string `queryParam:"style=form,explode=true,name=StartTime"`
    Subaccount *string `queryParam:"style=form,explode=true,name=Subaccount"`
    To *string `queryParam:"style=form,explode=true,name=To"`
    ToCarrier *string `queryParam:"style=form,explode=true,name=ToCarrier"`
    ToCountryCode *string `queryParam:"style=form,explode=true,name=ToCountryCode"`
    VerifiedCaller *bool `queryParam:"style=form,explode=true,name=VerifiedCaller"`
    
}

type ListCallSummariesSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListCallSummariesRequest struct {
    ServerURL *string 
    QueryParams ListCallSummariesQueryParams 
    Security ListCallSummariesSecurity 
    
}

type ListCallSummariesListCallSummariesResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListCallSummariesListCallSummariesResponse struct {
    CallSummaries []shared.InsightsV1CallSummaries `json:"call_summaries,omitempty"`
    Meta *ListCallSummariesListCallSummariesResponseMeta `json:"meta,omitempty"`
    
}

type ListCallSummariesResponse struct {
    ContentType string 
    ListCallSummariesResponse *ListCallSummariesListCallSummariesResponse 
    StatusCode int64 
    
}

