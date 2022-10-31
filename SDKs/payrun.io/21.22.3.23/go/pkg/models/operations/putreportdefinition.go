package operations

import (
"openapi/pkg/models/shared")

type PutReportDefinitionPathParams struct {
    ReportDefinitionID string `pathParam:"style=simple,explode=false,name=ReportDefinitionId"`
    
}

type PutReportDefinitionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutReportDefinitionRequest struct {
    PathParams PutReportDefinitionPathParams 
    Headers PutReportDefinitionHeaders 
    Request shared.ReportDefinition `request:"mediaType=application/json"`
    
}

type PutReportDefinitionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    ReportDefinition *shared.ReportDefinition 
    StatusCode int64 
    
}

