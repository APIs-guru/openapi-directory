package operations

type WeekUpcomingPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
}

type WeekUpcomingRequest struct {
	PathParams WeekUpcomingPathParams
}

type WeekUpcomingResponse struct {
	ContentType                           string
	StatusCode                            int64
	WeekUpcoming200ApplicationJSONInteger *int64
}
