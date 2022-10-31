package operations




type PlayerSeasonStatsByPlayerFormatEnum string

const (
    PlayerSeasonStatsByPlayerFormatEnumXML PlayerSeasonStatsByPlayerFormatEnum = "XML"
PlayerSeasonStatsByPlayerFormatEnumJSON PlayerSeasonStatsByPlayerFormatEnum = "JSON"
)


type PlayerSeasonStatsByPlayerPathParams struct {
    Format PlayerSeasonStatsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type PlayerSeasonStatsByPlayerRequest struct {
    PathParams PlayerSeasonStatsByPlayerPathParams 
    
}

type PlayerSeasonStatsByPlayerResponse struct {
    ContentType string 
    PlayerSeasons []interface{} 
    StatusCode int64 
    
}

