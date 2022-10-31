package operations




type ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum string

const (
    ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnumXML ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum = "XML"
ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnumJSON ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum = "JSON"
)


type ProjectedPlayerSeasonStatsWByeWeekAdpPathParams struct {
    Format ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type ProjectedPlayerSeasonStatsWByeWeekAdpRequest struct {
    PathParams ProjectedPlayerSeasonStatsWByeWeekAdpPathParams 
    
}

type ProjectedPlayerSeasonStatsWByeWeekAdpResponse struct {
    ContentType string 
    PlayerSeasonProjections []interface{} 
    StatusCode int64 
    
}

