package operations

import (
"openapi/pkg/models/shared")

type ListChecksQueryParams struct {
    ReportID *string `queryParam:"style=form,explode=true,name=report_id"`
    StartKey *string `queryParam:"style=form,explode=true,name=start_key"`
    
}

type ListChecksSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ListChecksRequest struct {
    QueryParams ListChecksQueryParams 
    Security ListChecksSecurity 
    
}

type ListChecksResponse struct {
    ChecksOutput *shared.ChecksOutput 
    ContentType string 
    StatusCode int64 
    
}

