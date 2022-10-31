package operations




type PlayByPlayDeltaFormatEnum string

const (
    PlayByPlayDeltaFormatEnumXML PlayByPlayDeltaFormatEnum = "XML"
PlayByPlayDeltaFormatEnumJSON PlayByPlayDeltaFormatEnum = "JSON"
)


type PlayByPlayDeltaPathParams struct {
    Format PlayByPlayDeltaFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Minutes string `pathParam:"style=simple,explode=false,name=minutes"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type PlayByPlayDeltaRequest struct {
    PathParams PlayByPlayDeltaPathParams 
    
}

type PlayByPlayDeltaResponse struct {
    ContentType string 
    PlayByPlays []interface{} 
    StatusCode int64 
    
}

