package operations

import (
"openapi/pkg/models/shared")

type GetUsersIDAccountsPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetUsersIDAccountsRequest struct {
    PathParams GetUsersIDAccountsPathParams 
    
}

type GetUsersIDAccountsResponse struct {
    Accounts []shared.Account 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

