package operations




type ScoresByWeekFormatEnum string

const (
    ScoresByWeekFormatEnumXML ScoresByWeekFormatEnum = "XML"
ScoresByWeekFormatEnumJSON ScoresByWeekFormatEnum = "JSON"
)


type ScoresByWeekPathParams struct {
    Format ScoresByWeekFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type ScoresByWeekRequest struct {
    PathParams ScoresByWeekPathParams 
    
}

type ScoresByWeekResponse struct {
    ContentType string 
    Scores []interface{} 
    StatusCode int64 
    
}

