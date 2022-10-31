package operations




type FantasyDefenseSeasonStatsFormatEnum string

const (
    FantasyDefenseSeasonStatsFormatEnumXML FantasyDefenseSeasonStatsFormatEnum = "XML"
FantasyDefenseSeasonStatsFormatEnumJSON FantasyDefenseSeasonStatsFormatEnum = "JSON"
)


type FantasyDefenseSeasonStatsPathParams struct {
    Format FantasyDefenseSeasonStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type FantasyDefenseSeasonStatsRequest struct {
    PathParams FantasyDefenseSeasonStatsPathParams 
    
}

type FantasyDefenseSeasonStatsResponse struct {
    ContentType string 
    FantasyDefenseSeasons []interface{} 
    StatusCode int64 
    
}

