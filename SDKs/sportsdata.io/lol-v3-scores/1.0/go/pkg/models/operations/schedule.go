package operations




type ScheduleFormatEnum string

const (
    ScheduleFormatEnumXML ScheduleFormatEnum = "xml"
ScheduleFormatEnumJSON ScheduleFormatEnum = "json"
)


type SchedulePathParams struct {
    Format ScheduleFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Roundid string `pathParam:"style=simple,explode=false,name=roundid"`
    
}

type ScheduleRequest struct {
    PathParams SchedulePathParams 
    
}

type ScheduleResponse struct {
    ContentType string 
    Games []interface{} 
    StatusCode int64 
    
}

