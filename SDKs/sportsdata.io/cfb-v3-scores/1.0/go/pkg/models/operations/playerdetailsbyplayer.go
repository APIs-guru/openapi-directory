package operations




type PlayerDetailsByPlayerFormatEnum string

const (
    PlayerDetailsByPlayerFormatEnumXML PlayerDetailsByPlayerFormatEnum = "XML"
PlayerDetailsByPlayerFormatEnumJSON PlayerDetailsByPlayerFormatEnum = "JSON"
)


type PlayerDetailsByPlayerPathParams struct {
    Format PlayerDetailsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    
}

type PlayerDetailsByPlayerRequest struct {
    PathParams PlayerDetailsByPlayerPathParams 
    
}

type PlayerDetailsByPlayerResponse struct {
    ContentType string 
    Players []interface{} 
    StatusCode int64 
    
}

