package operations




type ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum string

const (
    ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnumXML ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum = "xml"
ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum = "json"
)


type ProjectedPlayerGameStatsByDateWDfsSalariesPathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type ProjectedPlayerGameStatsByDateWDfsSalariesRequest struct {
    PathParams ProjectedPlayerGameStatsByDateWDfsSalariesPathParams 
    
}

type ProjectedPlayerGameStatsByDateWDfsSalariesResponse struct {
    ContentType string 
    PlayerGameProjections []interface{} 
    StatusCode int64 
    
}

