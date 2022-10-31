package operations




type LegacyBoxScoresDeltaCurrentWeekFormatEnum string

const (
    LegacyBoxScoresDeltaCurrentWeekFormatEnumXML LegacyBoxScoresDeltaCurrentWeekFormatEnum = "XML"
LegacyBoxScoresDeltaCurrentWeekFormatEnumJSON LegacyBoxScoresDeltaCurrentWeekFormatEnum = "JSON"
)


type LegacyBoxScoresDeltaCurrentWeekPathParams struct {
    Format LegacyBoxScoresDeltaCurrentWeekFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Minutes string `pathParam:"style=simple,explode=false,name=minutes"`
    
}

type LegacyBoxScoresDeltaCurrentWeekRequest struct {
    PathParams LegacyBoxScoresDeltaCurrentWeekPathParams 
    
}

type LegacyBoxScoresDeltaCurrentWeekResponse struct {
    BoxScores []interface{} 
    ContentType string 
    StatusCode int64 
    
}

