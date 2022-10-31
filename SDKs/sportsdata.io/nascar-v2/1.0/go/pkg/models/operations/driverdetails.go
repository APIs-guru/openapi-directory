package operations




type DriverDetailsFormatEnum string

const (
    DriverDetailsFormatEnumXML DriverDetailsFormatEnum = "xml"
DriverDetailsFormatEnumJSON DriverDetailsFormatEnum = "json"
)


type DriverDetailsPathParams struct {
    Driverid string `pathParam:"style=simple,explode=false,name=driverid"`
    Format DriverDetailsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type DriverDetailsRequest struct {
    PathParams DriverDetailsPathParams 
    
}

type DriverDetailsResponse struct {
    ContentType string 
    Driver *interface{} 
    StatusCode int64 
    
}

