package operations




type PlayByPlayFormatEnum string

const (
    PlayByPlayFormatEnumXML PlayByPlayFormatEnum = "XML"
PlayByPlayFormatEnumJSON PlayByPlayFormatEnum = "JSON"
)


type PlayByPlayPathParams struct {
    Format PlayByPlayFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Gameid string `pathParam:"style=simple,explode=false,name=gameid"`
    
}

type PlayByPlayRequest struct {
    PathParams PlayByPlayPathParams 
    
}

type PlayByPlayResponse struct {
    ContentType string 
    PlayByPlay *interface{} 
    StatusCode int64 
    
}

