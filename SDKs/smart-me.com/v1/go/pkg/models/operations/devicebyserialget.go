package operations

import (
"openapi/pkg/models/shared")

type DeviceBySerialGetQueryParams struct {
    Serial int64 `queryParam:"style=form,explode=true,name=serial"`
    
}

type DeviceBySerialGetRequest struct {
    QueryParams DeviceBySerialGetQueryParams 
    
}

type DeviceBySerialGetResponse struct {
    Body []byte 
    ContentType string 
    Device *shared.Device 
    StatusCode int64 
    
}

