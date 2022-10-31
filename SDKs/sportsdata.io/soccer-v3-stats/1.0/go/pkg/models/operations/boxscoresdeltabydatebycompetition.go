package operations




type BoxScoresDeltaByDateByCompetitionFormatEnum string

const (
    BoxScoresDeltaByDateByCompetitionFormatEnumXML BoxScoresDeltaByDateByCompetitionFormatEnum = "xml"
BoxScoresDeltaByDateByCompetitionFormatEnumJSON BoxScoresDeltaByDateByCompetitionFormatEnum = "json"
)


type BoxScoresDeltaByDateByCompetitionPathParams struct {
    Competition string `pathParam:"style=simple,explode=false,name=competition"`
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format BoxScoresDeltaByDateByCompetitionFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Minutes string `pathParam:"style=simple,explode=false,name=minutes"`
    
}

type BoxScoresDeltaByDateByCompetitionRequest struct {
    PathParams BoxScoresDeltaByDateByCompetitionPathParams 
    
}

type BoxScoresDeltaByDateByCompetitionResponse struct {
    BoxScores []interface{} 
    ContentType string 
    StatusCode int64 
    
}

