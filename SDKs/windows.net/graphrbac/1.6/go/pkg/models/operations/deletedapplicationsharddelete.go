package operations

import (
"openapi/pkg/models/shared")

type DeletedApplicationsHardDeletePathParams struct {
    ApplicationObjectID string `pathParam:"style=simple,explode=false,name=applicationObjectId"`
    TenantID string `pathParam:"style=simple,explode=false,name=tenantID"`
    
}

type DeletedApplicationsHardDeleteQueryParams struct {
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    
}

type DeletedApplicationsHardDeleteRequest struct {
    PathParams DeletedApplicationsHardDeletePathParams 
    QueryParams DeletedApplicationsHardDeleteQueryParams 
    
}

type DeletedApplicationsHardDeleteResponse struct {
    ContentType string 
    GraphError *shared.GraphError 
    StatusCode int64 
    
}

