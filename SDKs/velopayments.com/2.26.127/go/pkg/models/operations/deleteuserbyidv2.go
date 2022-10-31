package operations



type DeleteUserByIDV2PathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type DeleteUserByIDV2Request struct {
    PathParams DeleteUserByIDV2PathParams 
    
}

type DeleteUserByIDV2Response struct {
    ContentType string 
    StatusCode int64 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

