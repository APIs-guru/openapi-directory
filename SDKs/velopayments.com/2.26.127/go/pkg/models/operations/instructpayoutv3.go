package operations



type InstructPayoutV3PathParams struct {
    PayoutID string `pathParam:"style=simple,explode=false,name=payoutId"`
    
}

type InstructPayoutV3Request struct {
    PathParams InstructPayoutV3PathParams 
    
}

type InstructPayoutV3Response struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    InlineResponse409 *interface{} 
    
}

