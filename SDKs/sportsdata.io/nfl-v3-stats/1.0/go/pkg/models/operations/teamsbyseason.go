package operations



type TeamsBySeasonPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type TeamsBySeasonRequest struct {
    PathParams TeamsBySeasonPathParams 
    
}

type TeamsBySeasonResponse struct {
    ContentType string 
    StatusCode int64 
    Teams []interface{} 
    
}

