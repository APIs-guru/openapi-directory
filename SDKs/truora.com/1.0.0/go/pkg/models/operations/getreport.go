package operations

import (
"openapi/pkg/models/shared")

type GetReportPathParams struct {
    ReportID string `pathParam:"style=simple,explode=false,name=report_id"`
    
}

type GetReportSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetReportRequest struct {
    PathParams GetReportPathParams 
    Security GetReportSecurity 
    
}

type GetReportResponse struct {
    ContentType string 
    ReportOutput *shared.ReportOutput 
    StatusCode int64 
    
}

