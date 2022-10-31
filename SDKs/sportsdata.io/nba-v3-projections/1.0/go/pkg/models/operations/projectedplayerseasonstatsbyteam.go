package operations




type ProjectedPlayerSeasonStatsByTeamFormatEnum string

const (
    ProjectedPlayerSeasonStatsByTeamFormatEnumXML ProjectedPlayerSeasonStatsByTeamFormatEnum = "XML"
ProjectedPlayerSeasonStatsByTeamFormatEnumJSON ProjectedPlayerSeasonStatsByTeamFormatEnum = "JSON"
)


type ProjectedPlayerSeasonStatsByTeamPathParams struct {
    Format ProjectedPlayerSeasonStatsByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Team string `pathParam:"style=simple,explode=false,name=team"`
    
}

type ProjectedPlayerSeasonStatsByTeamRequest struct {
    PathParams ProjectedPlayerSeasonStatsByTeamPathParams 
    
}

type ProjectedPlayerSeasonStatsByTeamResponse struct {
    ContentType string 
    PlayerSeasonProjections []interface{} 
    StatusCode int64 
    
}

