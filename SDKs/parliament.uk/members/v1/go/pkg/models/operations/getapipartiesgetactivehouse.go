package operations

import (
"openapi/pkg/models/shared")

type GetAPIPartiesGetActiveHousePathParams struct {
    House int32 `pathParam:"style=simple,explode=false,name=house"`
    
}

type GetAPIPartiesGetActiveHouseRequest struct {
    PathParams GetAPIPartiesGetActiveHousePathParams 
    
}

type GetAPIPartiesGetActiveHouseResponse struct {
    Body []byte 
    ContentType string 
    PartyMembersServiceSearchResult *shared.PartyMembersServiceSearchResult 
    StatusCode int64 
    
}

