package operations




type PlayerGameStatsByDateFormatEnum string

const (
    PlayerGameStatsByDateFormatEnumXML PlayerGameStatsByDateFormatEnum = "XML"
PlayerGameStatsByDateFormatEnumJSON PlayerGameStatsByDateFormatEnum = "JSON"
)


type PlayerGameStatsByDatePathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format PlayerGameStatsByDateFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type PlayerGameStatsByDateRequest struct {
    PathParams PlayerGameStatsByDatePathParams 
    
}

type PlayerGameStatsByDateResponse struct {
    ContentType string 
    PlayerGames []interface{} 
    StatusCode int64 
    
}

