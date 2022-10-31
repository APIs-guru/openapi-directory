package operations




type ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum string

const (
    ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnumXML ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = "XML"
ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = "JSON"
)


type ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    
}

type ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest struct {
    PathParams ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams 
    
}

type ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse struct {
    ContentType string 
    PlayerGameProjections []interface{} 
    StatusCode int64 
    
}

