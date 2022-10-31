package operations

import (
"openapi/pkg/models/shared")

type GetAPIMembersIDEdmsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIMembersIDEdmsQueryParams struct {
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetAPIMembersIDEdmsRequest struct {
    PathParams GetAPIMembersIDEdmsPathParams 
    QueryParams GetAPIMembersIDEdmsQueryParams 
    
}

type GetAPIMembersIDEdmsResponse struct {
    Body []byte 
    ContentType string 
    EarlyDayMotionMembersServiceSearchResult *shared.EarlyDayMotionMembersServiceSearchResult 
    StatusCode int64 
    
}

