package operations

type LeagueLeadersByWeekColumnEnum string

const (
	LeagueLeadersByWeekColumnEnumFantasyPoints LeagueLeadersByWeekColumnEnum = "FantasyPoints"
	LeagueLeadersByWeekColumnEnumPassingYards  LeagueLeadersByWeekColumnEnum = "PassingYards"
	LeagueLeadersByWeekColumnEnumRushingYards  LeagueLeadersByWeekColumnEnum = "RushingYards"
	LeagueLeadersByWeekColumnEnumReceptions    LeagueLeadersByWeekColumnEnum = "Receptions"
	LeagueLeadersByWeekColumnEnumSacks         LeagueLeadersByWeekColumnEnum = "Sacks"
	LeagueLeadersByWeekColumnEnumInterceptions LeagueLeadersByWeekColumnEnum = "Interceptions"
	LeagueLeadersByWeekColumnEnumTouchdowns    LeagueLeadersByWeekColumnEnum = "Touchdowns"
)

type LeagueLeadersByWeekFormatEnum string

const (
	LeagueLeadersByWeekFormatEnumXML  LeagueLeadersByWeekFormatEnum = "XML"
	LeagueLeadersByWeekFormatEnumJSON LeagueLeadersByWeekFormatEnum = "JSON"
)

type LeagueLeadersByWeekPositionEnum string

const (
	LeagueLeadersByWeekPositionEnumAll     LeagueLeadersByWeekPositionEnum = "ALL"
	LeagueLeadersByWeekPositionEnumOffense LeagueLeadersByWeekPositionEnum = "OFFENSE"
	LeagueLeadersByWeekPositionEnumQb      LeagueLeadersByWeekPositionEnum = "QB"
	LeagueLeadersByWeekPositionEnumRb      LeagueLeadersByWeekPositionEnum = "RB"
	LeagueLeadersByWeekPositionEnumWr      LeagueLeadersByWeekPositionEnum = "WR"
	LeagueLeadersByWeekPositionEnumTe      LeagueLeadersByWeekPositionEnum = "TE"
	LeagueLeadersByWeekPositionEnumDefense LeagueLeadersByWeekPositionEnum = "DEFENSE"
	LeagueLeadersByWeekPositionEnumDl      LeagueLeadersByWeekPositionEnum = "DL"
	LeagueLeadersByWeekPositionEnumLb      LeagueLeadersByWeekPositionEnum = "LB"
	LeagueLeadersByWeekPositionEnumDb      LeagueLeadersByWeekPositionEnum = "DB"
	LeagueLeadersByWeekPositionEnumK       LeagueLeadersByWeekPositionEnum = "K"
)

type LeagueLeadersByWeekPathParams struct {
	Column   LeagueLeadersByWeekColumnEnum   `pathParam:"style=simple,explode=false,name=column"`
	Format   LeagueLeadersByWeekFormatEnum   `pathParam:"style=simple,explode=false,name=format"`
	Position LeagueLeadersByWeekPositionEnum `pathParam:"style=simple,explode=false,name=position"`
	Season   string                          `pathParam:"style=simple,explode=false,name=season"`
	Week     string                          `pathParam:"style=simple,explode=false,name=week"`
}

type LeagueLeadersByWeekRequest struct {
	PathParams LeagueLeadersByWeekPathParams
}

type LeagueLeadersByWeekResponse struct {
	ContentType string
	PlayerGames []interface{}
	StatusCode  int64
}
