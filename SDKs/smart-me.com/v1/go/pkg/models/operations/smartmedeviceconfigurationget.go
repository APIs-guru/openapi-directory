package operations

import (
"openapi/pkg/models/shared")

type SmartMeDeviceConfigurationGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type SmartMeDeviceConfigurationGetRequest struct {
    PathParams SmartMeDeviceConfigurationGetPathParams 
    
}

type SmartMeDeviceConfigurationGetResponse struct {
    Body []byte 
    ContentType string 
    SmartMeDeviceConfigurationContainer *shared.SmartMeDeviceConfigurationContainer 
    StatusCode int64 
    
}

