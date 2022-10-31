package operations

import (
"openapi/pkg/models/shared")

type GetReportDefinitionsFromApplicationHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetReportDefinitionsFromApplicationRequest struct {
    Headers GetReportDefinitionsFromApplicationHeaders 
    
}

type GetReportDefinitionsFromApplicationResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

