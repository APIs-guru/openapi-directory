package operations

import (
"openapi/pkg/models/shared")

type DeleteThirdPartyJobPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=JobId"`
    
}

type DeleteThirdPartyJobHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type DeleteThirdPartyJobRequest struct {
    PathParams DeleteThirdPartyJobPathParams 
    Headers DeleteThirdPartyJobHeaders 
    
}

type DeleteThirdPartyJobResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

