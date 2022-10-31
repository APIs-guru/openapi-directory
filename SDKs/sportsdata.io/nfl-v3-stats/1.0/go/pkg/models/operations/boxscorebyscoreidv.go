package operations




type BoxScoreByScoreidVFormatEnum string

const (
    BoxScoreByScoreidVFormatEnumXML BoxScoreByScoreidVFormatEnum = "XML"
BoxScoreByScoreidVFormatEnumJSON BoxScoreByScoreidVFormatEnum = "JSON"
)


type BoxScoreByScoreidVPathParams struct {
    Format BoxScoreByScoreidVFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Scoreid string `pathParam:"style=simple,explode=false,name=scoreid"`
    
}

type BoxScoreByScoreidVRequest struct {
    PathParams BoxScoreByScoreidVPathParams 
    
}

type BoxScoreByScoreidVResponse struct {
    BoxScoreV3 *interface{} 
    ContentType string 
    StatusCode int64 
    
}

