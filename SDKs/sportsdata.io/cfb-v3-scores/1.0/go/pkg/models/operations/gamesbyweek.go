package operations




type GamesByWeekFormatEnum string

const (
    GamesByWeekFormatEnumXML GamesByWeekFormatEnum = "XML"
GamesByWeekFormatEnumJSON GamesByWeekFormatEnum = "JSON"
)


type GamesByWeekPathParams struct {
    Format GamesByWeekFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type GamesByWeekRequest struct {
    PathParams GamesByWeekPathParams 
    
}

type GamesByWeekResponse struct {
    ContentType string 
    Games []interface{} 
    StatusCode int64 
    
}

