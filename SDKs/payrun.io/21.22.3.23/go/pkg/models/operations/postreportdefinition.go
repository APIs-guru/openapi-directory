package operations

import (
"openapi/pkg/models/shared")

type PostReportDefinitionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PostReportDefinitionRequest struct {
    Headers PostReportDefinitionHeaders 
    Request shared.ReportDefinition `request:"mediaType=application/json"`
    
}

type PostReportDefinitionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    Link *shared.Link 
    StatusCode int64 
    
}

