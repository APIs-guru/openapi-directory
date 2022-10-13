package operations

type TimeframesFormatEnum string

const (
	TimeframesFormatEnumXML  TimeframesFormatEnum = "XML"
	TimeframesFormatEnumJSON TimeframesFormatEnum = "JSON"
)

type TimeframesTypeEnum string

const (
	TimeframesTypeEnumCurrent   TimeframesTypeEnum = "current"
	TimeframesTypeEnumUpcoming  TimeframesTypeEnum = "upcoming"
	TimeframesTypeEnumCompleted TimeframesTypeEnum = "completed"
	TimeframesTypeEnumRecent    TimeframesTypeEnum = "recent"
	TimeframesTypeEnumAll       TimeframesTypeEnum = "all"
)

type TimeframesPathParams struct {
	Format TimeframesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Type   TimeframesTypeEnum   `pathParam:"style=simple,explode=false,name=type"`
}

type TimeframesRequest struct {
	PathParams TimeframesPathParams
}

type TimeframesResponse struct {
	ContentType string
	StatusCode  int64
	Timeframes  []interface{}
}
