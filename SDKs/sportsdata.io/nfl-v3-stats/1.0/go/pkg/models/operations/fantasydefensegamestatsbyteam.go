package operations




type FantasyDefenseGameStatsByTeamFormatEnum string

const (
    FantasyDefenseGameStatsByTeamFormatEnumXML FantasyDefenseGameStatsByTeamFormatEnum = "XML"
FantasyDefenseGameStatsByTeamFormatEnumJSON FantasyDefenseGameStatsByTeamFormatEnum = "JSON"
)


type FantasyDefenseGameStatsByTeamPathParams struct {
    Format FantasyDefenseGameStatsByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Team string `pathParam:"style=simple,explode=false,name=team"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type FantasyDefenseGameStatsByTeamRequest struct {
    PathParams FantasyDefenseGameStatsByTeamPathParams 
    
}

type FantasyDefenseGameStatsByTeamResponse struct {
    ContentType string 
    FantasyDefenseGame *interface{} 
    StatusCode int64 
    
}

