package operations

type WeekCurrentPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
}

type WeekCurrentRequest struct {
	PathParams WeekCurrentPathParams
}

type WeekCurrentResponse struct {
	ContentType                          string
	StatusCode                           int64
	WeekCurrent200ApplicationJSONInteger *int64
}
