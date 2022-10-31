package operations




type LegacyBoxScoresFormatEnum string

const (
    LegacyBoxScoresFormatEnumXML LegacyBoxScoresFormatEnum = "XML"
LegacyBoxScoresFormatEnumJSON LegacyBoxScoresFormatEnum = "JSON"
)


type LegacyBoxScoresPathParams struct {
    Format LegacyBoxScoresFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type LegacyBoxScoresRequest struct {
    PathParams LegacyBoxScoresPathParams 
    
}

type LegacyBoxScoresResponse struct {
    BoxScores []interface{} 
    ContentType string 
    StatusCode int64 
    
}

