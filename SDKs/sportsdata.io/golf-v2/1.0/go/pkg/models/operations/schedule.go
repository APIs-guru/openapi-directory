package operations

type ScheduleFormatEnum string

const (
	ScheduleFormatEnumXML  ScheduleFormatEnum = "XML"
	ScheduleFormatEnumJSON ScheduleFormatEnum = "JSON"
)

type SchedulePathParams struct {
	Format ScheduleFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type ScheduleRequest struct {
	PathParams SchedulePathParams
}

type ScheduleResponse struct {
	ContentType string
	StatusCode  int64
	Tournaments []interface{}
}
