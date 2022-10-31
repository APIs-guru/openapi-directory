package operations




type PlayerSeasonStatsByPlayerFormatEnum string

const (
    PlayerSeasonStatsByPlayerFormatEnumXML PlayerSeasonStatsByPlayerFormatEnum = "xml"
PlayerSeasonStatsByPlayerFormatEnumJSON PlayerSeasonStatsByPlayerFormatEnum = "json"
)


type PlayerSeasonStatsByPlayerPathParams struct {
    Format PlayerSeasonStatsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    Roundid string `pathParam:"style=simple,explode=false,name=roundid"`
    
}

type PlayerSeasonStatsByPlayerRequest struct {
    PathParams PlayerSeasonStatsByPlayerPathParams 
    
}

type PlayerSeasonStatsByPlayerResponse struct {
    ContentType string 
    PlayerSeasons []interface{} 
    StatusCode int64 
    
}

