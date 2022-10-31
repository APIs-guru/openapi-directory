package operations




type RacesScheduleFormatEnum string

const (
    RacesScheduleFormatEnumXML RacesScheduleFormatEnum = "xml"
RacesScheduleFormatEnumJSON RacesScheduleFormatEnum = "json"
)


type RacesSchedulePathParams struct {
    Format RacesScheduleFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type RacesScheduleRequest struct {
    PathParams RacesSchedulePathParams 
    
}

type RacesScheduleResponse struct {
    ContentType string 
    Races []interface{} 
    StatusCode int64 
    
}

