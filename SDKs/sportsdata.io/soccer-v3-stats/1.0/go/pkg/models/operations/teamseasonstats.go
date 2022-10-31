package operations




type TeamSeasonStatsFormatEnum string

const (
    TeamSeasonStatsFormatEnumXML TeamSeasonStatsFormatEnum = "xml"
TeamSeasonStatsFormatEnumJSON TeamSeasonStatsFormatEnum = "json"
)


type TeamSeasonStatsPathParams struct {
    Format TeamSeasonStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Roundid string `pathParam:"style=simple,explode=false,name=roundid"`
    
}

type TeamSeasonStatsRequest struct {
    PathParams TeamSeasonStatsPathParams 
    
}

type TeamSeasonStatsResponse struct {
    ContentType string 
    StatusCode int64 
    TeamSeasons []interface{} 
    
}

