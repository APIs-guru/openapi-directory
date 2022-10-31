package operations

type GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum string

const (
	GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnumXML  GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum = "XML"
	GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnumJSON GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum = "JSON"
)

type GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams struct {
	Format GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                                       `pathParam:"style=simple,explode=false,name=season"`
}

type GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest struct {
	PathParams GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams
}

type GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse struct {
	ContentType string
	Games       []interface{}
	StatusCode  int64
}
