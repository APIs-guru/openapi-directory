package operations

type TeamSeasonStatsFormatEnum string

const (
	TeamSeasonStatsFormatEnumXML  TeamSeasonStatsFormatEnum = "XML"
	TeamSeasonStatsFormatEnumJSON TeamSeasonStatsFormatEnum = "JSON"
)

type TeamSeasonStatsPathParams struct {
	Format TeamSeasonStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                    `pathParam:"style=simple,explode=false,name=season"`
}

type TeamSeasonStatsRequest struct {
	PathParams TeamSeasonStatsPathParams
}

type TeamSeasonStatsResponse struct {
	ContentType string
	StatusCode  int64
	TeamSeasons []interface{}
}
