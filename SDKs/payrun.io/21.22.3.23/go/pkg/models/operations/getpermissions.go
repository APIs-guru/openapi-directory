package operations

import (
"openapi/pkg/models/shared")

type GetPermissionsHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetPermissionsRequest struct {
    Headers GetPermissionsHeaders 
    
}

type GetPermissionsResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

