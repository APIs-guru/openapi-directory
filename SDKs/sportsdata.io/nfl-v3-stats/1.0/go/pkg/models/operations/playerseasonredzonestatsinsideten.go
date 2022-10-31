package operations

type PlayerSeasonRedZoneStatsInsideTenFormatEnum string

const (
	PlayerSeasonRedZoneStatsInsideTenFormatEnumXML  PlayerSeasonRedZoneStatsInsideTenFormatEnum = "XML"
	PlayerSeasonRedZoneStatsInsideTenFormatEnumJSON PlayerSeasonRedZoneStatsInsideTenFormatEnum = "JSON"
)

type PlayerSeasonRedZoneStatsInsideTenPathParams struct {
	Format PlayerSeasonRedZoneStatsInsideTenFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                      `pathParam:"style=simple,explode=false,name=season"`
}

type PlayerSeasonRedZoneStatsInsideTenRequest struct {
	PathParams PlayerSeasonRedZoneStatsInsideTenPathParams
}

type PlayerSeasonRedZoneStatsInsideTenResponse struct {
	ContentType          string
	PlayerSeasonRedZones []interface{}
	StatusCode           int64
}
