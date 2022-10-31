package operations




type SchedulesFormatEnum string

const (
    SchedulesFormatEnumXML SchedulesFormatEnum = "XML"
SchedulesFormatEnumJSON SchedulesFormatEnum = "JSON"
)


type SchedulesPathParams struct {
    Format SchedulesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type SchedulesRequest struct {
    PathParams SchedulesPathParams 
    
}

type SchedulesResponse struct {
    ContentType string 
    Games []interface{} 
    StatusCode int64 
    
}

