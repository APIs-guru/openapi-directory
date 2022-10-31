package operations

import (
"openapi/pkg/models/shared")

type GetPayoutSummaryV3PathParams struct {
    PayoutID string `pathParam:"style=simple,explode=false,name=payoutId"`
    
}

type GetPayoutSummaryV3Request struct {
    PathParams GetPayoutSummaryV3PathParams 
    
}

type GetPayoutSummaryV3Response struct {
    ContentType string 
    PayoutSummaryResponseV3 *shared.PayoutSummaryResponseV3 
    StatusCode int64 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

