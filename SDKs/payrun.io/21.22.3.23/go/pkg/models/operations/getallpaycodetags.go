package operations

import (
"openapi/pkg/models/shared")

type GetAllPayCodeTagsPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type GetAllPayCodeTagsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetAllPayCodeTagsRequest struct {
    PathParams GetAllPayCodeTagsPathParams 
    Headers GetAllPayCodeTagsHeaders 
    
}

type GetAllPayCodeTagsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

