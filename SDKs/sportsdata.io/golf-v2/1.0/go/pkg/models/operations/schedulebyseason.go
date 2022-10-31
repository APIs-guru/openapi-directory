package operations




type ScheduleBySeasonFormatEnum string

const (
    ScheduleBySeasonFormatEnumXML ScheduleBySeasonFormatEnum = "XML"
ScheduleBySeasonFormatEnumJSON ScheduleBySeasonFormatEnum = "JSON"
)


type ScheduleBySeasonPathParams struct {
    Format ScheduleBySeasonFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type ScheduleBySeasonRequest struct {
    PathParams ScheduleBySeasonPathParams 
    
}

type ScheduleBySeasonResponse struct {
    ContentType string 
    StatusCode int64 
    Tournaments []interface{} 
    
}

