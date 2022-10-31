package operations



type DeleteSourceAccountV3PathParams struct {
    SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
    
}

type DeleteSourceAccountV3Request struct {
    PathParams DeleteSourceAccountV3PathParams 
    
}

type DeleteSourceAccountV3Response struct {
    ContentType string 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    InlineResponse409 *interface{} 
    
}

