package operations

type FantasyDefenseSeasonStatsByTeamFormatEnum string

const (
	FantasyDefenseSeasonStatsByTeamFormatEnumXML  FantasyDefenseSeasonStatsByTeamFormatEnum = "XML"
	FantasyDefenseSeasonStatsByTeamFormatEnumJSON FantasyDefenseSeasonStatsByTeamFormatEnum = "JSON"
)

type FantasyDefenseSeasonStatsByTeamPathParams struct {
	Format FantasyDefenseSeasonStatsByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                    `pathParam:"style=simple,explode=false,name=season"`
	Team   string                                    `pathParam:"style=simple,explode=false,name=team"`
}

type FantasyDefenseSeasonStatsByTeamRequest struct {
	PathParams FantasyDefenseSeasonStatsByTeamPathParams
}

type FantasyDefenseSeasonStatsByTeamResponse struct {
	ContentType          string
	FantasyDefenseSeason *interface{}
	StatusCode           int64
}
