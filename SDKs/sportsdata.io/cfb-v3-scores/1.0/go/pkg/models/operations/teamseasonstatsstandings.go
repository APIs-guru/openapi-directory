package operations

type TeamSeasonStatsStandingsFormatEnum string

const (
	TeamSeasonStatsStandingsFormatEnumXML  TeamSeasonStatsStandingsFormatEnum = "XML"
	TeamSeasonStatsStandingsFormatEnumJSON TeamSeasonStatsStandingsFormatEnum = "JSON"
)

type TeamSeasonStatsStandingsPathParams struct {
	Format TeamSeasonStatsStandingsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                             `pathParam:"style=simple,explode=false,name=season"`
}

type TeamSeasonStatsStandingsRequest struct {
	PathParams TeamSeasonStatsStandingsPathParams
}

type TeamSeasonStatsStandingsResponse struct {
	ContentType string
	StatusCode  int64
	TeamSeasons []interface{}
}
