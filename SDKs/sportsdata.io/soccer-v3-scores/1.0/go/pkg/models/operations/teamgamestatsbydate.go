package operations




type TeamGameStatsByDateFormatEnum string

const (
    TeamGameStatsByDateFormatEnumXML TeamGameStatsByDateFormatEnum = "xml"
TeamGameStatsByDateFormatEnumJSON TeamGameStatsByDateFormatEnum = "json"
)


type TeamGameStatsByDatePathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format TeamGameStatsByDateFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type TeamGameStatsByDateRequest struct {
    PathParams TeamGameStatsByDatePathParams 
    
}

type TeamGameStatsByDateResponse struct {
    ContentType string 
    StatusCode int64 
    TeamGames []interface{} 
    
}

