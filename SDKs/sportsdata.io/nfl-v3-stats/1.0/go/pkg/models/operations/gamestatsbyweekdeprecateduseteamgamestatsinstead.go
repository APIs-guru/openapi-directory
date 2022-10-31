package operations




type GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum string

const (
    GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnumXML GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum = "XML"
GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnumJSON GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum = "JSON"
)


type GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams struct {
    Format GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest struct {
    PathParams GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams 
    
}

type GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse struct {
    ContentType string 
    Games []interface{} 
    StatusCode int64 
    
}

