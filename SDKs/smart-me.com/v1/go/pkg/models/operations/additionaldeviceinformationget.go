package operations

import (
"openapi/pkg/models/shared")

type AdditionalDeviceInformationGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type AdditionalDeviceInformationGetRequest struct {
    PathParams AdditionalDeviceInformationGetPathParams 
    
}

type AdditionalDeviceInformationGetResponse struct {
    AdditionalDeviceInformation *shared.AdditionalDeviceInformation 
    ContentType string 
    StatusCode int64 
    
}

