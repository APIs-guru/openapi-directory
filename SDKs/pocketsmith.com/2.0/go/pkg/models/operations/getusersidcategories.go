package operations

import (
"openapi/pkg/models/shared")

type GetUsersIDCategoriesPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetUsersIDCategoriesRequest struct {
    PathParams GetUsersIDCategoriesPathParams 
    
}

type GetUsersIDCategoriesResponse struct {
    Categories []shared.Category 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

