package operations

import (
"openapi/pkg/models/shared")

type GetPayoutStatsV4QueryParams struct {
    PayorID *string `queryParam:"style=form,explode=true,name=payorId"`
    
}

type GetPayoutStatsV4Request struct {
    QueryParams GetPayoutStatsV4QueryParams 
    
}

type GetPayoutStatsV4Response struct {
    ContentType string 
    GetPayoutStatistics *shared.GetPayoutStatistics 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

