package operations




type ProjectedPlayerGameStatsByPlayerFormatEnum string

const (
    ProjectedPlayerGameStatsByPlayerFormatEnumXML ProjectedPlayerGameStatsByPlayerFormatEnum = "xml"
ProjectedPlayerGameStatsByPlayerFormatEnumJSON ProjectedPlayerGameStatsByPlayerFormatEnum = "json"
)


type ProjectedPlayerGameStatsByPlayerPathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format ProjectedPlayerGameStatsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    
}

type ProjectedPlayerGameStatsByPlayerRequest struct {
    PathParams ProjectedPlayerGameStatsByPlayerPathParams 
    
}

type ProjectedPlayerGameStatsByPlayerResponse struct {
    ContentType string 
    PlayerGameProjections []interface{} 
    StatusCode int64 
    
}

