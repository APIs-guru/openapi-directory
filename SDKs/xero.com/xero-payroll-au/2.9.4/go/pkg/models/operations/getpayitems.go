package operations

import (
"openapi/pkg/models/shared")

type GetPayItemsQueryParams struct {
    Order *string `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Where *string `queryParam:"style=form,explode=true,name=where"`
    
}

type GetPayItemsHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
    
}

type GetPayItemsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetPayItemsRequest struct {
    QueryParams GetPayItemsQueryParams 
    Headers GetPayItemsHeaders 
    Security GetPayItemsSecurity 
    
}

type GetPayItemsResponse struct {
    APIException *shared.APIException 
    ContentType string 
    PayItems *shared.PayItems 
    StatusCode int64 
    
}

