package operations




type WeekLastCompletedFormatEnum string

const (
    WeekLastCompletedFormatEnumXML WeekLastCompletedFormatEnum = "XML"
WeekLastCompletedFormatEnumJSON WeekLastCompletedFormatEnum = "JSON"
)


type WeekLastCompletedPathParams struct {
    Format WeekLastCompletedFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type WeekLastCompletedRequest struct {
    PathParams WeekLastCompletedPathParams 
    
}

type WeekLastCompletedResponse struct {
    ContentType string 
    StatusCode int64 
    WeekLastCompleted200ApplicationJSONInteger *int64 
    
}

