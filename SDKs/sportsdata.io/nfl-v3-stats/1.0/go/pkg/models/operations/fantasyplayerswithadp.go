package operations




type FantasyPlayersWithAdpFormatEnum string

const (
    FantasyPlayersWithAdpFormatEnumXML FantasyPlayersWithAdpFormatEnum = "XML"
FantasyPlayersWithAdpFormatEnumJSON FantasyPlayersWithAdpFormatEnum = "JSON"
)


type FantasyPlayersWithAdpPathParams struct {
    Format FantasyPlayersWithAdpFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type FantasyPlayersWithAdpRequest struct {
    PathParams FantasyPlayersWithAdpPathParams 
    
}

type FantasyPlayersWithAdpResponse struct {
    ContentType string 
    FantasyPlayers []interface{} 
    StatusCode int64 
    
}

