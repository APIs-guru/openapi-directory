package operations

import (
"openapi/pkg/models/shared")

type ReinitializePathParams struct {
    DeviceID int32 `pathParam:"style=simple,explode=false,name=deviceId"`
    
}

type ReinitializeRequest struct {
    PathParams ReinitializePathParams 
    Request shared.ReinitializeActionConfiguration `request:"mediaType=application/json"`
    
}

type ReinitializeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

