package operations

type ScheduleFormatEnum string

const (
	ScheduleFormatEnumXML  ScheduleFormatEnum = "XML"
	ScheduleFormatEnumJSON ScheduleFormatEnum = "JSON"
)

type SchedulePathParams struct {
	Format ScheduleFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string             `pathParam:"style=simple,explode=false,name=season"`
}

type ScheduleRequest struct {
	PathParams SchedulePathParams
}

type ScheduleResponse struct {
	ContentType string
	Schedules   []interface{}
	StatusCode  int64
}
