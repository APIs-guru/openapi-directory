package operations

type LeagueLeadersBySeasonColumnEnum string

const (
	LeagueLeadersBySeasonColumnEnumFantasyPoints LeagueLeadersBySeasonColumnEnum = "FantasyPoints"
	LeagueLeadersBySeasonColumnEnumPassingYards  LeagueLeadersBySeasonColumnEnum = "PassingYards"
	LeagueLeadersBySeasonColumnEnumRushingYards  LeagueLeadersBySeasonColumnEnum = "RushingYards"
	LeagueLeadersBySeasonColumnEnumReceptions    LeagueLeadersBySeasonColumnEnum = "Receptions"
	LeagueLeadersBySeasonColumnEnumSacks         LeagueLeadersBySeasonColumnEnum = "Sacks"
	LeagueLeadersBySeasonColumnEnumInterceptions LeagueLeadersBySeasonColumnEnum = "Interceptions"
	LeagueLeadersBySeasonColumnEnumTouchdowns    LeagueLeadersBySeasonColumnEnum = "Touchdowns"
)

type LeagueLeadersBySeasonFormatEnum string

const (
	LeagueLeadersBySeasonFormatEnumXML  LeagueLeadersBySeasonFormatEnum = "XML"
	LeagueLeadersBySeasonFormatEnumJSON LeagueLeadersBySeasonFormatEnum = "JSON"
)

type LeagueLeadersBySeasonPositionEnum string

const (
	LeagueLeadersBySeasonPositionEnumAll     LeagueLeadersBySeasonPositionEnum = "ALL"
	LeagueLeadersBySeasonPositionEnumOffense LeagueLeadersBySeasonPositionEnum = "OFFENSE"
	LeagueLeadersBySeasonPositionEnumQb      LeagueLeadersBySeasonPositionEnum = "QB"
	LeagueLeadersBySeasonPositionEnumRb      LeagueLeadersBySeasonPositionEnum = "RB"
	LeagueLeadersBySeasonPositionEnumWr      LeagueLeadersBySeasonPositionEnum = "WR"
	LeagueLeadersBySeasonPositionEnumTe      LeagueLeadersBySeasonPositionEnum = "TE"
	LeagueLeadersBySeasonPositionEnumDefense LeagueLeadersBySeasonPositionEnum = "DEFENSE"
	LeagueLeadersBySeasonPositionEnumDl      LeagueLeadersBySeasonPositionEnum = "DL"
	LeagueLeadersBySeasonPositionEnumLb      LeagueLeadersBySeasonPositionEnum = "LB"
	LeagueLeadersBySeasonPositionEnumDb      LeagueLeadersBySeasonPositionEnum = "DB"
	LeagueLeadersBySeasonPositionEnumK       LeagueLeadersBySeasonPositionEnum = "K"
)

type LeagueLeadersBySeasonPathParams struct {
	Column   LeagueLeadersBySeasonColumnEnum   `pathParam:"style=simple,explode=false,name=column"`
	Format   LeagueLeadersBySeasonFormatEnum   `pathParam:"style=simple,explode=false,name=format"`
	Position LeagueLeadersBySeasonPositionEnum `pathParam:"style=simple,explode=false,name=position"`
	Season   string                            `pathParam:"style=simple,explode=false,name=season"`
}

type LeagueLeadersBySeasonRequest struct {
	PathParams LeagueLeadersBySeasonPathParams
}

type LeagueLeadersBySeasonResponse struct {
	ContentType   string
	PlayerSeasons []interface{}
	StatusCode    int64
}
