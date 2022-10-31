package operations




type PlayerSeasonHomeStatsFormatEnum string

const (
    PlayerSeasonHomeStatsFormatEnumXML PlayerSeasonHomeStatsFormatEnum = "XML"
PlayerSeasonHomeStatsFormatEnumJSON PlayerSeasonHomeStatsFormatEnum = "JSON"
)


type PlayerSeasonHomeStatsPathParams struct {
    Format PlayerSeasonHomeStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type PlayerSeasonHomeStatsRequest struct {
    PathParams PlayerSeasonHomeStatsPathParams 
    
}

type PlayerSeasonHomeStatsResponse struct {
    ContentType string 
    PlayerSeasons []interface{} 
    StatusCode int64 
    
}

