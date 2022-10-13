package operations

type SeasonCurrentPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
}

type SeasonCurrentRequest struct {
	PathParams SeasonCurrentPathParams
}

type SeasonCurrentResponse struct {
	ContentType                            string
	SeasonCurrent200ApplicationJSONInteger *int64
	StatusCode                             int64
}
