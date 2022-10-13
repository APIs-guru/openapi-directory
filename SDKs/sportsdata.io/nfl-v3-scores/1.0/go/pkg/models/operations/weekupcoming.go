package operations

type WeekUpcomingFormatEnum string

const (
	WeekUpcomingFormatEnumXML  WeekUpcomingFormatEnum = "XML"
	WeekUpcomingFormatEnumJSON WeekUpcomingFormatEnum = "JSON"
)

type WeekUpcomingPathParams struct {
	Format WeekUpcomingFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type WeekUpcomingRequest struct {
	PathParams WeekUpcomingPathParams
}

type WeekUpcomingResponse struct {
	ContentType                           string
	StatusCode                            int64
	WeekUpcoming200ApplicationJSONInteger *int64
}
