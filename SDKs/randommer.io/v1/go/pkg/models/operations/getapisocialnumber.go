package operations



type GetAPISocialNumberHeaders struct {
    XAPIKey *string `header:"style=simple,explode=false,name=X-Api-Key"`
    
}

type GetAPISocialNumberRequest struct {
    Headers GetAPISocialNumberHeaders 
    
}

type GetAPISocialNumberResponse struct {
    ContentType string 
    StatusCode int64 
    
}

