package operations

import (
"openapi/pkg/models/shared")

type GetPayoutStatsV1QueryParams struct {
    PayorID *string `queryParam:"style=form,explode=true,name=payorId"`
    
}

type GetPayoutStatsV1Request struct {
    QueryParams GetPayoutStatsV1QueryParams 
    
}

type GetPayoutStatsV1Response struct {
    ContentType string 
    GetPayoutStatistics *shared.GetPayoutStatistics 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

