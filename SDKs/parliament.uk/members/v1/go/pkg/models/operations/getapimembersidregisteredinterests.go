package operations

import (
"openapi/pkg/models/shared")

type GetAPIMembersIDRegisteredInterestsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIMembersIDRegisteredInterestsRequest struct {
    PathParams GetAPIMembersIDRegisteredInterestsPathParams 
    
}

type GetAPIMembersIDRegisteredInterestsResponse struct {
    Body []byte 
    ContentType string 
    RegisteredInterestCategoryListItem *shared.RegisteredInterestCategoryListItem 
    StatusCode int64 
    
}

