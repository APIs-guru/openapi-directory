package operations




type PlayerSeasonRedZoneStatsFormatEnum string

const (
    PlayerSeasonRedZoneStatsFormatEnumXML PlayerSeasonRedZoneStatsFormatEnum = "XML"
PlayerSeasonRedZoneStatsFormatEnumJSON PlayerSeasonRedZoneStatsFormatEnum = "JSON"
)


type PlayerSeasonRedZoneStatsPathParams struct {
    Format PlayerSeasonRedZoneStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type PlayerSeasonRedZoneStatsRequest struct {
    PathParams PlayerSeasonRedZoneStatsPathParams 
    
}

type PlayerSeasonRedZoneStatsResponse struct {
    ContentType string 
    PlayerSeasonRedZones []interface{} 
    StatusCode int64 
    
}

