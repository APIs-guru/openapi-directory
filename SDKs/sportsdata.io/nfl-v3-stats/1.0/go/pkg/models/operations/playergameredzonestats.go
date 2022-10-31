package operations

type PlayerGameRedZoneStatsFormatEnum string

const (
	PlayerGameRedZoneStatsFormatEnumXML  PlayerGameRedZoneStatsFormatEnum = "XML"
	PlayerGameRedZoneStatsFormatEnumJSON PlayerGameRedZoneStatsFormatEnum = "JSON"
)

type PlayerGameRedZoneStatsPathParams struct {
	Format PlayerGameRedZoneStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                           `pathParam:"style=simple,explode=false,name=season"`
	Week   string                           `pathParam:"style=simple,explode=false,name=week"`
}

type PlayerGameRedZoneStatsRequest struct {
	PathParams PlayerGameRedZoneStatsPathParams
}

type PlayerGameRedZoneStatsResponse struct {
	ContentType        string
	PlayerGameRedZones []interface{}
	StatusCode         int64
}
