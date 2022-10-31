package operations




type PlayerGameStatsDeltaFormatEnum string

const (
    PlayerGameStatsDeltaFormatEnumXML PlayerGameStatsDeltaFormatEnum = "XML"
PlayerGameStatsDeltaFormatEnumJSON PlayerGameStatsDeltaFormatEnum = "JSON"
)


type PlayerGameStatsDeltaPathParams struct {
    Format PlayerGameStatsDeltaFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Minutes string `pathParam:"style=simple,explode=false,name=minutes"`
    
}

type PlayerGameStatsDeltaRequest struct {
    PathParams PlayerGameStatsDeltaPathParams 
    
}

type PlayerGameStatsDeltaResponse struct {
    ContentType string 
    PlayerGames []interface{} 
    StatusCode int64 
    
}

