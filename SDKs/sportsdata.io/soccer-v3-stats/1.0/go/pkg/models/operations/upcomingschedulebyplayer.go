package operations




type UpcomingScheduleByPlayerFormatEnum string

const (
    UpcomingScheduleByPlayerFormatEnumXML UpcomingScheduleByPlayerFormatEnum = "xml"
UpcomingScheduleByPlayerFormatEnumJSON UpcomingScheduleByPlayerFormatEnum = "json"
)


type UpcomingScheduleByPlayerPathParams struct {
    Format UpcomingScheduleByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    
}

type UpcomingScheduleByPlayerRequest struct {
    PathParams UpcomingScheduleByPlayerPathParams 
    
}

type UpcomingScheduleByPlayerResponse struct {
    ContentType string 
    Games []interface{} 
    StatusCode int64 
    
}

