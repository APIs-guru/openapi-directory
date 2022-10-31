package operations

import (
"openapi/pkg/models/shared")

type UserCtrlGetUserByIDPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}

type UserCtrlGetUserByIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type UserCtrlGetUserByIDRequest struct {
    PathParams UserCtrlGetUserByIDPathParams 
    Security UserCtrlGetUserByIDSecurity 
    
}

type UserCtrlGetUserByIDResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UserHalResponse *shared.UserHalResponse 
    
}

