package operations




type LegacyBoxScoresFinalFormatEnum string

const (
    LegacyBoxScoresFinalFormatEnumXML LegacyBoxScoresFinalFormatEnum = "XML"
LegacyBoxScoresFinalFormatEnumJSON LegacyBoxScoresFinalFormatEnum = "JSON"
)


type LegacyBoxScoresFinalPathParams struct {
    Format LegacyBoxScoresFinalFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type LegacyBoxScoresFinalRequest struct {
    PathParams LegacyBoxScoresFinalPathParams 
    
}

type LegacyBoxScoresFinalResponse struct {
    BoxScores []interface{} 
    ContentType string 
    StatusCode int64 
    
}

