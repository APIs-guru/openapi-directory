package operations

import (
"openapi/pkg/models/shared")

type ExtensionCtrlGetAccountExtensionsPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    
}

type ExtensionCtrlGetAccountExtensionsQueryParams struct {
    Email *string `queryParam:"style=form,explode=true,name=email"`
    LocationID *float64 `queryParam:"style=form,explode=true,name=location_id"`
    LoginName *string `queryParam:"style=form,explode=true,name=login_name"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *float64 `queryParam:"style=form,explode=true,name=page_size"`
    PhoneNumber *string `queryParam:"style=form,explode=true,name=phone_number"`
    
}

type ExtensionCtrlGetAccountExtensionsSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type ExtensionCtrlGetAccountExtensionsRequest struct {
    PathParams ExtensionCtrlGetAccountExtensionsPathParams 
    QueryParams ExtensionCtrlGetAccountExtensionsQueryParams 
    Security ExtensionCtrlGetAccountExtensionsSecurity 
    
}

type ExtensionCtrlGetAccountExtensionsResponse struct {
    ContentType string 
    EndUserRouteHalResponse *shared.EndUserRouteHalResponse 
    StatusCode int64 
    ValidationErrorsResponse *shared.ValidationErrorsResponse 
    
}

