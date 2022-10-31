package operations




type PlayersByTeamFormatEnum string

const (
    PlayersByTeamFormatEnumXML PlayersByTeamFormatEnum = "XML"
PlayersByTeamFormatEnumJSON PlayersByTeamFormatEnum = "JSON"
)


type PlayersByTeamPathParams struct {
    Format PlayersByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Team string `pathParam:"style=simple,explode=false,name=team"`
    
}

type PlayersByTeamRequest struct {
    PathParams PlayersByTeamPathParams 
    
}

type PlayersByTeamResponse struct {
    ContentType string 
    Players []interface{} 
    StatusCode int64 
    
}

