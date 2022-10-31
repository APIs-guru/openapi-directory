package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1PoolsDefaultQueryParams struct {
    SkuName []string `queryParam:"style=form,explode=true,name=skuName"`
    
}

type GetAPIV1PoolsDefaultRequest struct {
    QueryParams GetAPIV1PoolsDefaultQueryParams 
    
}

type GetAPIV1PoolsDefaultResponse struct {
    Body []byte 
    ContentType string 
    PoolStatusResponseBodies []shared.PoolStatusResponseBody 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

