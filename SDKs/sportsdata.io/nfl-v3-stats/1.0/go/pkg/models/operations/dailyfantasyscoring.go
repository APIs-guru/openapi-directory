package operations




type DailyFantasyScoringFormatEnum string

const (
    DailyFantasyScoringFormatEnumXML DailyFantasyScoringFormatEnum = "XML"
DailyFantasyScoringFormatEnumJSON DailyFantasyScoringFormatEnum = "JSON"
)


type DailyFantasyScoringPathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format DailyFantasyScoringFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type DailyFantasyScoringRequest struct {
    PathParams DailyFantasyScoringPathParams 
    
}

type DailyFantasyScoringResponse struct {
    ContentType string 
    DailyFantasyScorings []interface{} 
    StatusCode int64 
    
}

