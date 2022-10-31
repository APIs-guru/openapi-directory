package operations




type IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum string

const (
    IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnumXML IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum = "XML"
IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnumJSON IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum = "JSON"
)


type IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams struct {
    Format IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Team string `pathParam:"style=simple,explode=false,name=team"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest struct {
    PathParams IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams 
    
}

type IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse struct {
    ContentType string 
    PlayerGameProjections []interface{} 
    StatusCode int64 
    
}

