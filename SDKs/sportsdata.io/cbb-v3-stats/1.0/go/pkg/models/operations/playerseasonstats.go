package operations

type PlayerSeasonStatsFormatEnum string

const (
	PlayerSeasonStatsFormatEnumXML  PlayerSeasonStatsFormatEnum = "XML"
	PlayerSeasonStatsFormatEnumJSON PlayerSeasonStatsFormatEnum = "JSON"
)

type PlayerSeasonStatsPathParams struct {
	Format PlayerSeasonStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                      `pathParam:"style=simple,explode=false,name=season"`
}

type PlayerSeasonStatsRequest struct {
	PathParams PlayerSeasonStatsPathParams
}

type PlayerSeasonStatsResponse struct {
	ContentType   string
	PlayerSeasons []interface{}
	StatusCode    int64
}
