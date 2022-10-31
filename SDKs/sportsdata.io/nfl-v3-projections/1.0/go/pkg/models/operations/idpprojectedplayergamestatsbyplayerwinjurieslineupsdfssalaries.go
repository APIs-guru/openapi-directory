package operations




type IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum string

const (
    IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnumXML IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = "XML"
IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnumJSON IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = "JSON"
)


type IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams struct {
    Format IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest struct {
    PathParams IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams 
    
}

type IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse struct {
    ContentType string 
    PlayerGameProjection *interface{} 
    StatusCode int64 
    
}

