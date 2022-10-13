package operations

type SeasonLastCompletedPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
}

type SeasonLastCompletedRequest struct {
	PathParams SeasonLastCompletedPathParams
}

type SeasonLastCompletedResponse struct {
	ContentType                                  string
	SeasonLastCompleted200ApplicationJSONInteger *int64
	StatusCode                                   int64
}
