package operations




type BoxScoresByDateByCompetitionFormatEnum string

const (
    BoxScoresByDateByCompetitionFormatEnumXML BoxScoresByDateByCompetitionFormatEnum = "xml"
BoxScoresByDateByCompetitionFormatEnumJSON BoxScoresByDateByCompetitionFormatEnum = "json"
)


type BoxScoresByDateByCompetitionPathParams struct {
    Competition string `pathParam:"style=simple,explode=false,name=competition"`
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format BoxScoresByDateByCompetitionFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type BoxScoresByDateByCompetitionRequest struct {
    PathParams BoxScoresByDateByCompetitionPathParams 
    
}

type BoxScoresByDateByCompetitionResponse struct {
    BoxScores []interface{} 
    ContentType string 
    StatusCode int64 
    
}

