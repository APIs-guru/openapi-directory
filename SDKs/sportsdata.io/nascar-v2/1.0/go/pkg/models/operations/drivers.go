package operations




type DriversFormatEnum string

const (
    DriversFormatEnumXML DriversFormatEnum = "xml"
DriversFormatEnumJSON DriversFormatEnum = "json"
)


type DriversPathParams struct {
    Format DriversFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type DriversRequest struct {
    PathParams DriversPathParams 
    
}

type DriversResponse struct {
    ContentType string 
    Drivers []interface{} 
    StatusCode int64 
    
}

