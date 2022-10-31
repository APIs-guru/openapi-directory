package operations

type WeekCurrentFormatEnum string

const (
	WeekCurrentFormatEnumXML  WeekCurrentFormatEnum = "XML"
	WeekCurrentFormatEnumJSON WeekCurrentFormatEnum = "JSON"
)

type WeekCurrentPathParams struct {
	Format WeekCurrentFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type WeekCurrentRequest struct {
	PathParams WeekCurrentPathParams
}

type WeekCurrentResponse struct {
	ContentType                          string
	StatusCode                           int64
	WeekCurrent200ApplicationJSONInteger *int64
}
