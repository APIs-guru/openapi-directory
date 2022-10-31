package operations



type ByeWeeksPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type ByeWeeksRequest struct {
    PathParams ByeWeeksPathParams 
    
}

type ByeWeeksResponse struct {
    Byes []interface{} 
    ContentType string 
    StatusCode int64 
    
}

