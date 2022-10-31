package operations

type TimeframesPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
	Type   string `pathParam:"style=simple,explode=false,name=type"`
}

type TimeframesRequest struct {
	PathParams TimeframesPathParams
}

type TimeframesResponse struct {
	ContentType string
	StatusCode  int64
	Timeframes  []interface{}
}
