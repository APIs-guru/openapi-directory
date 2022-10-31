package operations

type TeamScheduleFormatEnum string

const (
	TeamScheduleFormatEnumXML  TeamScheduleFormatEnum = "XML"
	TeamScheduleFormatEnumJSON TeamScheduleFormatEnum = "JSON"
)

type TeamSchedulePathParams struct {
	Format TeamScheduleFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                 `pathParam:"style=simple,explode=false,name=season"`
	Team   string                 `pathParam:"style=simple,explode=false,name=team"`
}

type TeamScheduleRequest struct {
	PathParams TeamSchedulePathParams
}

type TeamScheduleResponse struct {
	ContentType string
	Games       []interface{}
	StatusCode  int64
}
