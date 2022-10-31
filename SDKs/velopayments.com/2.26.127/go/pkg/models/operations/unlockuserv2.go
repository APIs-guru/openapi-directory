package operations



type UnlockUserV2PathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UnlockUserV2Request struct {
    PathParams UnlockUserV2PathParams 
    
}

type UnlockUserV2Response struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

