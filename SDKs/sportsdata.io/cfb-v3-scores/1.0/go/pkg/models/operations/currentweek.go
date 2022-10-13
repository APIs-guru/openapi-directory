package operations

type CurrentWeekFormatEnum string

const (
	CurrentWeekFormatEnumXML  CurrentWeekFormatEnum = "XML"
	CurrentWeekFormatEnumJSON CurrentWeekFormatEnum = "JSON"
)

type CurrentWeekPathParams struct {
	Format CurrentWeekFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type CurrentWeekRequest struct {
	PathParams CurrentWeekPathParams
}

type CurrentWeekResponse struct {
	ContentType                          string
	CurrentWeek200ApplicationJSONInteger *int64
	StatusCode                           int64
}
