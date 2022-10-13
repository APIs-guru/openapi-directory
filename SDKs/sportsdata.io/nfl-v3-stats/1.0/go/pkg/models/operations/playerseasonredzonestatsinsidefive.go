package operations

type PlayerSeasonRedZoneStatsInsideFiveFormatEnum string

const (
	PlayerSeasonRedZoneStatsInsideFiveFormatEnumXML  PlayerSeasonRedZoneStatsInsideFiveFormatEnum = "XML"
	PlayerSeasonRedZoneStatsInsideFiveFormatEnumJSON PlayerSeasonRedZoneStatsInsideFiveFormatEnum = "JSON"
)

type PlayerSeasonRedZoneStatsInsideFivePathParams struct {
	Format PlayerSeasonRedZoneStatsInsideFiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                       `pathParam:"style=simple,explode=false,name=season"`
}

type PlayerSeasonRedZoneStatsInsideFiveRequest struct {
	PathParams PlayerSeasonRedZoneStatsInsideFivePathParams
}

type PlayerSeasonRedZoneStatsInsideFiveResponse struct {
	ContentType          string
	PlayerSeasonRedZones []interface{}
	StatusCode           int64
}
