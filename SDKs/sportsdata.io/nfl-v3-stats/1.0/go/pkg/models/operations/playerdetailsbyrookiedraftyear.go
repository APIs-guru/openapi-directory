package operations



type PlayerDetailsByRookieDraftYearPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type PlayerDetailsByRookieDraftYearRequest struct {
    PathParams PlayerDetailsByRookieDraftYearPathParams 
    
}

type PlayerDetailsByRookieDraftYearResponse struct {
    ContentType string 
    Players []interface{} 
    StatusCode int64 
    
}

