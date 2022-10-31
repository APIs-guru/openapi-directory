package operations




type ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum string

const (
    ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnumXML ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = "XML"
ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = "JSON"
)


type ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams struct {
    Format ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest struct {
    PathParams ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams 
    
}

type ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse struct {
    ContentType string 
    PlayerGameProjection *interface{} 
    StatusCode int64 
    
}

