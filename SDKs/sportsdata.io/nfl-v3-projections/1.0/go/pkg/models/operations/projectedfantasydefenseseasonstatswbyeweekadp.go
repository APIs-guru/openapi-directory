package operations




type ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum string

const (
    ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnumXML ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum = "XML"
ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnumJSON ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum = "JSON"
)


type ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams struct {
    Format ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest struct {
    PathParams ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams 
    
}

type ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse struct {
    ContentType string 
    FantasyDefenseSeasonProjections []interface{} 
    StatusCode int64 
    
}

