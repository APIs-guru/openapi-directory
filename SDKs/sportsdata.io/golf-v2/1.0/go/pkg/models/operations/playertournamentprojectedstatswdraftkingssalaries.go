package operations

type PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum string

const (
	PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnumXML  PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum = "XML"
	PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnumJSON PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum = "JSON"
)

type PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams struct {
	Format       PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Tournamentid string                                                      `pathParam:"style=simple,explode=false,name=tournamentid"`
}

type PlayerTournamentProjectedStatsWDraftkingsSalariesRequest struct {
	PathParams PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams
}

type PlayerTournamentProjectedStatsWDraftkingsSalariesResponse struct {
	ContentType                 string
	PlayerTournamentProjections []interface{}
	StatusCode                  int64
}
