package operations

type ProjectedPlayerSeasonStatsWithAdpFormatEnum string

const (
	ProjectedPlayerSeasonStatsWithAdpFormatEnumXML  ProjectedPlayerSeasonStatsWithAdpFormatEnum = "XML"
	ProjectedPlayerSeasonStatsWithAdpFormatEnumJSON ProjectedPlayerSeasonStatsWithAdpFormatEnum = "JSON"
)

type ProjectedPlayerSeasonStatsWithAdpPathParams struct {
	Format ProjectedPlayerSeasonStatsWithAdpFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                      `pathParam:"style=simple,explode=false,name=season"`
}

type ProjectedPlayerSeasonStatsWithAdpRequest struct {
	PathParams ProjectedPlayerSeasonStatsWithAdpPathParams
}

type ProjectedPlayerSeasonStatsWithAdpResponse struct {
	ContentType             string
	PlayerSeasonProjections []interface{}
	StatusCode              int64
}
