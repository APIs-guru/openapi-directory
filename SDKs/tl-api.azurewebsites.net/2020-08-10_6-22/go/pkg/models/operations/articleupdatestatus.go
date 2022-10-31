package operations

import (
"openapi/pkg/models/shared")

type ArticleUpdateStatusQueryParams struct {
    ArticleID *int32 `queryParam:"style=form,explode=true,name=ArticleId"`
    Status *int32 `queryParam:"style=form,explode=true,name=status"`
    UserName *string `queryParam:"style=form,explode=true,name=userName"`
    
}

type ArticleUpdateStatusRequest struct {
    QueryParams ArticleUpdateStatusQueryParams 
    
}

type ArticleUpdateStatusResponse struct {
    APIException *shared.APIException 
    ContentType string 
    DefaultResponseDtoOfInteger *shared.DefaultResponseDtoOfInteger 
    StatusCode int64 
    
}

