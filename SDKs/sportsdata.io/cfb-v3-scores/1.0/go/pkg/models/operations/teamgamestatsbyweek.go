package operations




type TeamGameStatsByWeekFormatEnum string

const (
    TeamGameStatsByWeekFormatEnumXML TeamGameStatsByWeekFormatEnum = "XML"
TeamGameStatsByWeekFormatEnumJSON TeamGameStatsByWeekFormatEnum = "JSON"
)


type TeamGameStatsByWeekPathParams struct {
    Format TeamGameStatsByWeekFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type TeamGameStatsByWeekRequest struct {
    PathParams TeamGameStatsByWeekPathParams 
    
}

type TeamGameStatsByWeekResponse struct {
    ContentType string 
    StatusCode int64 
    TeamGames []interface{} 
    
}

