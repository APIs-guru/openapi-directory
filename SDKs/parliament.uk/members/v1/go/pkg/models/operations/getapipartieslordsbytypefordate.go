package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAPIPartiesLordsByTypeForDatePathParams struct {
    ForDate time.Time `pathParam:"style=simple,explode=false,name=forDate"`
    
}

type GetAPIPartiesLordsByTypeForDateRequest struct {
    PathParams GetAPIPartiesLordsByTypeForDatePathParams 
    
}

type GetAPIPartiesLordsByTypeForDateResponse struct {
    Body []byte 
    ContentType string 
    LordsByTypeMembersServiceSearchResult *shared.LordsByTypeMembersServiceSearchResult 
    StatusCode int64 
    
}

