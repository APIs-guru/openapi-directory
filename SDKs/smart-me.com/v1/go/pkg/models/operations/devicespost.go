package operations

import (
"openapi/pkg/models/shared")

type DevicesPostRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    DeviceToPost *shared.DeviceToPost `request:"mediaType=application/json"`
    DeviceToPost1 *shared.DeviceToPost `request:"mediaType=application/x-www-form-urlencoded"`
    DeviceToPost2 *shared.DeviceToPost `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type DevicesPostRequest struct {
    Request DevicesPostRequests 
    
}

type DevicesPostResponse struct {
    Body []byte 
    ContentType string 
    DeviceToPost *shared.DeviceToPost 
    StatusCode int64 
    
}

