package operations




type SeasonCurrentFormatEnum string

const (
    SeasonCurrentFormatEnumXML SeasonCurrentFormatEnum = "XML"
SeasonCurrentFormatEnumJSON SeasonCurrentFormatEnum = "JSON"
)


type SeasonCurrentPathParams struct {
    Format SeasonCurrentFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type SeasonCurrentRequest struct {
    PathParams SeasonCurrentPathParams 
    
}

type SeasonCurrentResponse struct {
    ContentType string 
    SeasonCurrent200ApplicationJSONInteger *int64 
    StatusCode int64 
    
}

