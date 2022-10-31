package operations



type NewsPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    
}

type NewsRequest struct {
    PathParams NewsPathParams 
    
}

type NewsResponse struct {
    ContentType string 
    News []interface{} 
    StatusCode int64 
    
}

