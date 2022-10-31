package operations

import (
"openapi/pkg/models/shared")

type GetReportDefinitionFromApplicationPathParams struct {
    ReportDefinitionID string `pathParam:"style=simple,explode=false,name=ReportDefinitionId"`
    
}

type GetReportDefinitionFromApplicationHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetReportDefinitionFromApplicationRequest struct {
    PathParams GetReportDefinitionFromApplicationPathParams 
    Headers GetReportDefinitionFromApplicationHeaders 
    
}

type GetReportDefinitionFromApplicationResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    ReportDefinition *shared.ReportDefinition 
    StatusCode int64 
    
}

