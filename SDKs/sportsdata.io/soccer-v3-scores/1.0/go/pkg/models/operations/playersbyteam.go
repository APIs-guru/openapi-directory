package operations




type PlayersByTeamFormatEnum string

const (
    PlayersByTeamFormatEnumXML PlayersByTeamFormatEnum = "xml"
PlayersByTeamFormatEnumJSON PlayersByTeamFormatEnum = "json"
)


type PlayersByTeamPathParams struct {
    Format PlayersByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Teamid string `pathParam:"style=simple,explode=false,name=teamid"`
    
}

type PlayersByTeamRequest struct {
    PathParams PlayersByTeamPathParams 
    
}

type PlayersByTeamResponse struct {
    ContentType string 
    Players []interface{} 
    StatusCode int64 
    
}

