package operations

type TeamStatsAllowedByPositionFormatEnum string

const (
	TeamStatsAllowedByPositionFormatEnumXML  TeamStatsAllowedByPositionFormatEnum = "XML"
	TeamStatsAllowedByPositionFormatEnumJSON TeamStatsAllowedByPositionFormatEnum = "JSON"
)

type TeamStatsAllowedByPositionPathParams struct {
	Format TeamStatsAllowedByPositionFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                               `pathParam:"style=simple,explode=false,name=season"`
}

type TeamStatsAllowedByPositionRequest struct {
	PathParams TeamStatsAllowedByPositionPathParams
}

type TeamStatsAllowedByPositionResponse struct {
	ContentType string
	StatusCode  int64
	TeamSeasons []interface{}
}
