package operations




type LegacyBoxScoresDeltaFormatEnum string

const (
    LegacyBoxScoresDeltaFormatEnumXML LegacyBoxScoresDeltaFormatEnum = "XML"
LegacyBoxScoresDeltaFormatEnumJSON LegacyBoxScoresDeltaFormatEnum = "JSON"
)


type LegacyBoxScoresDeltaPathParams struct {
    Format LegacyBoxScoresDeltaFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Minutes string `pathParam:"style=simple,explode=false,name=minutes"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type LegacyBoxScoresDeltaRequest struct {
    PathParams LegacyBoxScoresDeltaPathParams 
    
}

type LegacyBoxScoresDeltaResponse struct {
    BoxScores []interface{} 
    ContentType string 
    StatusCode int64 
    
}

