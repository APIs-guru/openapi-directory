package operations



type ViewsIDDeletePathParams struct {
    ViewID string `pathParam:"style=simple,explode=false,name=view_id"`
    
}

type ViewsIDDeleteRequest struct {
    PathParams ViewsIDDeletePathParams 
    
}

type ViewsIDDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    ProblemDetail *interface{} 
    
}

