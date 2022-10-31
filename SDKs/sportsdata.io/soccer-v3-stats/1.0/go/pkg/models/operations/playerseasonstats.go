package operations

type PlayerSeasonStatsFormatEnum string

const (
	PlayerSeasonStatsFormatEnumXML  PlayerSeasonStatsFormatEnum = "xml"
	PlayerSeasonStatsFormatEnumJSON PlayerSeasonStatsFormatEnum = "json"
)

type PlayerSeasonStatsPathParams struct {
	Format  PlayerSeasonStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Roundid string                      `pathParam:"style=simple,explode=false,name=roundid"`
}

type PlayerSeasonStatsRequest struct {
	PathParams PlayerSeasonStatsPathParams
}

type PlayerSeasonStatsResponse struct {
	ContentType   string
	PlayerSeasons []interface{}
	StatusCode    int64
}
