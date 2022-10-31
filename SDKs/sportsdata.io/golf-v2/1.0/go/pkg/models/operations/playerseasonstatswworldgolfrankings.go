package operations

type PlayerSeasonStatsWWorldGolfRankingsFormatEnum string

const (
	PlayerSeasonStatsWWorldGolfRankingsFormatEnumXML  PlayerSeasonStatsWWorldGolfRankingsFormatEnum = "XML"
	PlayerSeasonStatsWWorldGolfRankingsFormatEnumJSON PlayerSeasonStatsWWorldGolfRankingsFormatEnum = "JSON"
)

type PlayerSeasonStatsWWorldGolfRankingsPathParams struct {
	Format PlayerSeasonStatsWWorldGolfRankingsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                        `pathParam:"style=simple,explode=false,name=season"`
}

type PlayerSeasonStatsWWorldGolfRankingsRequest struct {
	PathParams PlayerSeasonStatsWWorldGolfRankingsPathParams
}

type PlayerSeasonStatsWWorldGolfRankingsResponse struct {
	ContentType   string
	PlayerSeasons []interface{}
	StatusCode    int64
}
