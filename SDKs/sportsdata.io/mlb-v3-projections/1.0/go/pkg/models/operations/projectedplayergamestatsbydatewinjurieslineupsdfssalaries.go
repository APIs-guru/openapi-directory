package operations




type ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum string

const (
    ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnumXML ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum = "XML"
ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum = "JSON"
)


type ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest struct {
    PathParams ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesPathParams 
    
}

type ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse struct {
    ContentType string 
    PlayerGameProjections []interface{} 
    StatusCode int64 
    
}

