package operations

import (
"openapi/pkg/models/shared")

type GetDevicesQueryParams struct {
    All *bool `queryParam:"style=form,explode=true,name=all"`
    ID *int64 `queryParam:"style=form,explode=true,name=id"`
    UniqueID *string `queryParam:"style=form,explode=true,name=uniqueId"`
    UserID *int64 `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetDevicesRequest struct {
    QueryParams GetDevicesQueryParams 
    
}

type GetDevicesResponse struct {
    ContentType string 
    Devices []shared.Device 
    StatusCode int64 
    
}

