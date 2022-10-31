package operations

import (
"openapi/pkg/models/shared")

type VirtualBillingMeterActivePostRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    VMeterToActivate *shared.VMeterToActivate `request:"mediaType=application/json"`
    VMeterToActivate1 *shared.VMeterToActivate `request:"mediaType=application/x-www-form-urlencoded"`
    VMeterToActivate2 *shared.VMeterToActivate `request:"mediaType=text/json"`
    
}

type VirtualBillingMeterActivePostRequest struct {
    Request VirtualBillingMeterActivePostRequests 
    
}

type VirtualBillingMeterActivePostResponse struct {
    Body []byte 
    ContentType string 
    Device *shared.Device 
    StatusCode int64 
    
}

