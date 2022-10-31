package operations




type PlayersFormatEnum string

const (
    PlayersFormatEnumXML PlayersFormatEnum = "xml"
PlayersFormatEnumJSON PlayersFormatEnum = "json"
)


type PlayersPathParams struct {
    Format PlayersFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type PlayersRequest struct {
    PathParams PlayersPathParams 
    
}

type PlayersResponse struct {
    ContentType string 
    Players []interface{} 
    StatusCode int64 
    
}

