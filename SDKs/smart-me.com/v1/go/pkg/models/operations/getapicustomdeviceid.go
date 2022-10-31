package operations

import (
"openapi/pkg/models/shared")

type GetAPICustomDeviceIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPICustomDeviceIDRequest struct {
    PathParams GetAPICustomDeviceIDPathParams 
    
}

type GetAPICustomDeviceIDResponse struct {
    Body []byte 
    ContentType string 
    CustomDeviceToPost *shared.CustomDeviceToPost 
    StatusCode int64 
    
}

