package operations



type StadiumsPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    
}

type StadiumsRequest struct {
    PathParams StadiumsPathParams 
    
}

type StadiumsResponse struct {
    ContentType string 
    Stadiums []interface{} 
    StatusCode int64 
    
}

