package operations




type PlayerSeasonAwayStatsFormatEnum string

const (
    PlayerSeasonAwayStatsFormatEnumXML PlayerSeasonAwayStatsFormatEnum = "XML"
PlayerSeasonAwayStatsFormatEnumJSON PlayerSeasonAwayStatsFormatEnum = "JSON"
)


type PlayerSeasonAwayStatsPathParams struct {
    Format PlayerSeasonAwayStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type PlayerSeasonAwayStatsRequest struct {
    PathParams PlayerSeasonAwayStatsPathParams 
    
}

type PlayerSeasonAwayStatsResponse struct {
    ContentType string 
    PlayerSeasons []interface{} 
    StatusCode int64 
    
}

