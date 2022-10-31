package operations

import (
"openapi/pkg/models/shared")

type GetTagsFromUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=UserId"`
    
}

type GetTagsFromUserHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetTagsFromUserRequest struct {
    PathParams GetTagsFromUserPathParams 
    Headers GetTagsFromUserHeaders 
    
}

type GetTagsFromUserResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    LinkCollection *shared.LinkCollection 
    StatusCode int64 
    
}

