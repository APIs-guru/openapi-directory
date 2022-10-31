package operations




type InjuriesHistoricalFormatEnum string

const (
    InjuriesHistoricalFormatEnumXML InjuriesHistoricalFormatEnum = "XML"
InjuriesHistoricalFormatEnumJSON InjuriesHistoricalFormatEnum = "JSON"
)


type InjuriesHistoricalPathParams struct {
    Format InjuriesHistoricalFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type InjuriesHistoricalRequest struct {
    PathParams InjuriesHistoricalPathParams 
    
}

type InjuriesHistoricalResponse struct {
    ContentType string 
    Injuries []interface{} 
    StatusCode int64 
    
}

