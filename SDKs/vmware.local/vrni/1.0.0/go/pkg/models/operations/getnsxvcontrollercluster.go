package operations

import (
"openapi/pkg/models/shared")

type GetNsxvControllerClusterPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetNsxvControllerClusterSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNsxvControllerClusterRequest struct {
    PathParams GetNsxvControllerClusterPathParams 
    Security GetNsxvControllerClusterSecurity 
    
}

type GetNsxvControllerClusterResponse struct {
    ContentType string 
    NsxControllerDataCollection *shared.NsxControllerDataCollection 
    StatusCode int64 
    
}

