package operations

type SeasonUpcomingFormatEnum string

const (
	SeasonUpcomingFormatEnumXML  SeasonUpcomingFormatEnum = "XML"
	SeasonUpcomingFormatEnumJSON SeasonUpcomingFormatEnum = "JSON"
)

type SeasonUpcomingPathParams struct {
	Format SeasonUpcomingFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type SeasonUpcomingRequest struct {
	PathParams SeasonUpcomingPathParams
}

type SeasonUpcomingResponse struct {
	ContentType                             string
	SeasonUpcoming200ApplicationJSONInteger *int64
	StatusCode                              int64
}
