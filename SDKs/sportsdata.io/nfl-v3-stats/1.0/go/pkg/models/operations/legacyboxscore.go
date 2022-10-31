package operations




type LegacyBoxScoreFormatEnum string

const (
    LegacyBoxScoreFormatEnumXML LegacyBoxScoreFormatEnum = "XML"
LegacyBoxScoreFormatEnumJSON LegacyBoxScoreFormatEnum = "JSON"
)


type LegacyBoxScorePathParams struct {
    Format LegacyBoxScoreFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Hometeam string `pathParam:"style=simple,explode=false,name=hometeam"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type LegacyBoxScoreRequest struct {
    PathParams LegacyBoxScorePathParams 
    
}

type LegacyBoxScoreResponse struct {
    BoxScore *interface{} 
    ContentType string 
    StatusCode int64 
    
}

