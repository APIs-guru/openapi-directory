package operations



type EnableUserV2PathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type EnableUserV2Request struct {
    PathParams EnableUserV2PathParams 
    
}

type EnableUserV2Response struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

