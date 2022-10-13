package operations

type SeasonLastCompletedFormatEnum string

const (
	SeasonLastCompletedFormatEnumXML  SeasonLastCompletedFormatEnum = "XML"
	SeasonLastCompletedFormatEnumJSON SeasonLastCompletedFormatEnum = "JSON"
)

type SeasonLastCompletedPathParams struct {
	Format SeasonLastCompletedFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type SeasonLastCompletedRequest struct {
	PathParams SeasonLastCompletedPathParams
}

type SeasonLastCompletedResponse struct {
	ContentType                                  string
	SeasonLastCompleted200ApplicationJSONInteger *int64
	StatusCode                                   int64
}
