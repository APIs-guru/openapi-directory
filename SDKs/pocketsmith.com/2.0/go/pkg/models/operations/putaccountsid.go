package operations

import (
"openapi/pkg/models/shared")

type PutAccountsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutAccountsIDRequestBody struct {
    CurrencyCode *string `json:"currency_code,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type PutAccountsIDRequest struct {
    PathParams PutAccountsIDPathParams 
    Request *PutAccountsIDRequestBody `request:"mediaType=application/json"`
    
}

type PutAccountsIDResponse struct {
    Account *shared.Account 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

