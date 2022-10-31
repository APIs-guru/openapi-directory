package operations

import (
"openapi/pkg/models/shared")

type GetVodPostersPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    
}

type GetVodPostersQueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetVodPostersRequest struct {
    PathParams GetVodPostersPathParams 
    QueryParams GetVodPostersQueryParams 
    
}

type GetVodPostersResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Pictures []shared.Picture 
    
}

