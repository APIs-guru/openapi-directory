package operations




type BoxScoresDeltaVFormatEnum string

const (
    BoxScoresDeltaVFormatEnumXML BoxScoresDeltaVFormatEnum = "XML"
BoxScoresDeltaVFormatEnumJSON BoxScoresDeltaVFormatEnum = "JSON"
)



type BoxScoresDeltaVPlayerstoincludeEnum string

const (
    BoxScoresDeltaVPlayerstoincludeEnumAll BoxScoresDeltaVPlayerstoincludeEnum = "all"
BoxScoresDeltaVPlayerstoincludeEnumFantasy BoxScoresDeltaVPlayerstoincludeEnum = "fantasy"
BoxScoresDeltaVPlayerstoincludeEnumIdp BoxScoresDeltaVPlayerstoincludeEnum = "idp"
)


type BoxScoresDeltaVPathParams struct {
    Format BoxScoresDeltaVFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Minutes string `pathParam:"style=simple,explode=false,name=minutes"`
    Playerstoinclude BoxScoresDeltaVPlayerstoincludeEnum `pathParam:"style=simple,explode=false,name=playerstoinclude"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type BoxScoresDeltaVRequest struct {
    PathParams BoxScoresDeltaVPathParams 
    
}

type BoxScoresDeltaVResponse struct {
    BoxScoreV3s []interface{} 
    ContentType string 
    StatusCode int64 
    
}

