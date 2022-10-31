package operations



type TeamsAllPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    
}

type TeamsAllRequest struct {
    PathParams TeamsAllPathParams 
    
}

type TeamsAllResponse struct {
    ContentType string 
    StatusCode int64 
    Teams []interface{} 
    
}

