package operations




type IdpFantasyPlayersWithAdpFormatEnum string

const (
    IdpFantasyPlayersWithAdpFormatEnumXML IdpFantasyPlayersWithAdpFormatEnum = "XML"
IdpFantasyPlayersWithAdpFormatEnumJSON IdpFantasyPlayersWithAdpFormatEnum = "JSON"
)


type IdpFantasyPlayersWithAdpPathParams struct {
    Format IdpFantasyPlayersWithAdpFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type IdpFantasyPlayersWithAdpRequest struct {
    PathParams IdpFantasyPlayersWithAdpPathParams 
    
}

type IdpFantasyPlayersWithAdpResponse struct {
    ContentType string 
    FantasyPlayers []interface{} 
    StatusCode int64 
    
}

