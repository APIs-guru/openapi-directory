package operations

import (
"openapi/pkg/models/shared")

type PicoChargingGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PicoChargingGetRequest struct {
    PathParams PicoChargingGetPathParams 
    
}

type PicoChargingGetResponse struct {
    ContentType string 
    PicoChargingData *shared.PicoChargingData 
    StatusCode int64 
    
}

