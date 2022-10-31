package operations

import (
"time"
"openapi/pkg/models/shared")

type GetAPIPartiesStateOfThePartiesHouseForDatePathParams struct {
    ForDate time.Time `pathParam:"style=simple,explode=false,name=forDate"`
    House int32 `pathParam:"style=simple,explode=false,name=house"`
    
}

type GetAPIPartiesStateOfThePartiesHouseForDateRequest struct {
    PathParams GetAPIPartiesStateOfThePartiesHouseForDatePathParams 
    
}

type GetAPIPartiesStateOfThePartiesHouseForDateResponse struct {
    Body []byte 
    ContentType string 
    PartySeatCountMembersServiceSearchResult *shared.PartySeatCountMembersServiceSearchResult 
    StatusCode int64 
    
}

