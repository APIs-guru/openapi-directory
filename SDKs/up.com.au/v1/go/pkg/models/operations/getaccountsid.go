package operations

import (
"openapi/pkg/models/shared")

type GetAccountsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAccountsIDRequest struct {
    PathParams GetAccountsIDPathParams 
    
}

type GetAccountsIDResponse struct {
    ContentType string 
    GetAccountResponse *shared.GetAccountResponse 
    StatusCode int64 
    
}

