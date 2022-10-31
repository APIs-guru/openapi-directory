package operations




type PlayerFormatEnum string

const (
    PlayerFormatEnumXML PlayerFormatEnum = "xml"
PlayerFormatEnumJSON PlayerFormatEnum = "json"
)


type PlayerPathParams struct {
    Format PlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    
}

type PlayerRequest struct {
    PathParams PlayerPathParams 
    
}

type PlayerResponse struct {
    ContentType string 
    Player *interface{} 
    StatusCode int64 
    
}

