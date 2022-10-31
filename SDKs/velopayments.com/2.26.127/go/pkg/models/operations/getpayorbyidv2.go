package operations

import (
"openapi/pkg/models/shared")

type GetPayorByIDV2PathParams struct {
    PayorID string `pathParam:"style=simple,explode=false,name=payorId"`
    
}

type GetPayorByIDV2Request struct {
    PathParams GetPayorByIDV2PathParams 
    
}

type GetPayorByIDV2Response struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    PayorV2 *shared.PayorV2 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse403 *interface{} 
    
}

