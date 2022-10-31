package operations




type ProjectedPlayerSeasonStatsFormatEnum string

const (
    ProjectedPlayerSeasonStatsFormatEnumXML ProjectedPlayerSeasonStatsFormatEnum = "XML"
ProjectedPlayerSeasonStatsFormatEnumJSON ProjectedPlayerSeasonStatsFormatEnum = "JSON"
)


type ProjectedPlayerSeasonStatsPathParams struct {
    Format ProjectedPlayerSeasonStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type ProjectedPlayerSeasonStatsRequest struct {
    PathParams ProjectedPlayerSeasonStatsPathParams 
    
}

type ProjectedPlayerSeasonStatsResponse struct {
    ContentType string 
    PlayerSeasonProjections []interface{} 
    StatusCode int64 
    
}

