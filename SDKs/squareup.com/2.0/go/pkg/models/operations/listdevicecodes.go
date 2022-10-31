package operations

import (
"openapi/pkg/models/shared")

type ListDeviceCodesQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
    ProductType *string `queryParam:"style=form,explode=true,name=product_type"`
    Status *string `queryParam:"style=form,explode=true,name=status"`
    
}

type ListDeviceCodesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListDeviceCodesRequest struct {
    QueryParams ListDeviceCodesQueryParams 
    Security ListDeviceCodesSecurity 
    
}

type ListDeviceCodesResponse struct {
    ContentType string 
    ListDeviceCodesResponse *shared.ListDeviceCodesResponse 
    StatusCode int64 
    
}

