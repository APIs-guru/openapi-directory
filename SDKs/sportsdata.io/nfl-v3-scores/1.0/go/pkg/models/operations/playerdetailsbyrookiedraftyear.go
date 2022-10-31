package operations

type PlayerDetailsByRookieDraftYearFormatEnum string

const (
	PlayerDetailsByRookieDraftYearFormatEnumXML  PlayerDetailsByRookieDraftYearFormatEnum = "XML"
	PlayerDetailsByRookieDraftYearFormatEnumJSON PlayerDetailsByRookieDraftYearFormatEnum = "JSON"
)

type PlayerDetailsByRookieDraftYearPathParams struct {
	Format PlayerDetailsByRookieDraftYearFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                   `pathParam:"style=simple,explode=false,name=season"`
}

type PlayerDetailsByRookieDraftYearRequest struct {
	PathParams PlayerDetailsByRookieDraftYearPathParams
}

type PlayerDetailsByRookieDraftYearResponse struct {
	ContentType string
	Players     []interface{}
	StatusCode  int64
}
