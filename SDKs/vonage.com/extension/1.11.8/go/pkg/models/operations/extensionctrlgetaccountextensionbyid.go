package operations

import (
"openapi/pkg/models/shared")

type ExtensionCtrlGetAccountExtensionByIDPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    ExtensionNumber float64 `pathParam:"style=simple,explode=false,name=extension_number"`
    
}

type ExtensionCtrlGetAccountExtensionByIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExtensionCtrlGetAccountExtensionByIDRequest struct {
    PathParams ExtensionCtrlGetAccountExtensionByIDPathParams 
    Security ExtensionCtrlGetAccountExtensionByIDSecurity 
    
}

type ExtensionCtrlGetAccountExtensionByIDResponse struct {
    ContentType string 
    EndUserRouteHalResponse *shared.EndUserRouteHalResponse 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

