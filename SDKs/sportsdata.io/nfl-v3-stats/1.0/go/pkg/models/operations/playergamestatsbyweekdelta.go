package operations




type PlayerGameStatsByWeekDeltaFormatEnum string

const (
    PlayerGameStatsByWeekDeltaFormatEnumXML PlayerGameStatsByWeekDeltaFormatEnum = "XML"
PlayerGameStatsByWeekDeltaFormatEnumJSON PlayerGameStatsByWeekDeltaFormatEnum = "JSON"
)


type PlayerGameStatsByWeekDeltaPathParams struct {
    Format PlayerGameStatsByWeekDeltaFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Minutes string `pathParam:"style=simple,explode=false,name=minutes"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type PlayerGameStatsByWeekDeltaRequest struct {
    PathParams PlayerGameStatsByWeekDeltaPathParams 
    
}

type PlayerGameStatsByWeekDeltaResponse struct {
    ContentType string 
    PlayerGames []interface{} 
    StatusCode int64 
    
}

