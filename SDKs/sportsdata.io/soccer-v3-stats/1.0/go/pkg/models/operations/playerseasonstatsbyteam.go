package operations




type PlayerSeasonStatsByTeamFormatEnum string

const (
    PlayerSeasonStatsByTeamFormatEnumXML PlayerSeasonStatsByTeamFormatEnum = "xml"
PlayerSeasonStatsByTeamFormatEnumJSON PlayerSeasonStatsByTeamFormatEnum = "json"
)


type PlayerSeasonStatsByTeamPathParams struct {
    Format PlayerSeasonStatsByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Roundid string `pathParam:"style=simple,explode=false,name=roundid"`
    Team string `pathParam:"style=simple,explode=false,name=team"`
    
}

type PlayerSeasonStatsByTeamRequest struct {
    PathParams PlayerSeasonStatsByTeamPathParams 
    
}

type PlayerSeasonStatsByTeamResponse struct {
    ContentType string 
    PlayerSeasons []interface{} 
    StatusCode int64 
    
}

