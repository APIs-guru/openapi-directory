package operations

import (
"openapi/pkg/models/shared")

type VirtualMeterCalculateFormulaGetQueryParams struct {
    Formula string `queryParam:"style=form,explode=true,name=formula"`
    
}

type VirtualMeterCalculateFormulaGetRequest struct {
    QueryParams VirtualMeterCalculateFormulaGetQueryParams 
    
}

type VirtualMeterCalculateFormulaGetResponse struct {
    Body []byte 
    ContentType string 
    Device *shared.Device 
    StatusCode int64 
    
}

