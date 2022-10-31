package operations




type PlayerDetailsByAvailableFormatEnum string

const (
    PlayerDetailsByAvailableFormatEnumXML PlayerDetailsByAvailableFormatEnum = "XML"
PlayerDetailsByAvailableFormatEnumJSON PlayerDetailsByAvailableFormatEnum = "JSON"
)


type PlayerDetailsByAvailablePathParams struct {
    Format PlayerDetailsByAvailableFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type PlayerDetailsByAvailableRequest struct {
    PathParams PlayerDetailsByAvailablePathParams 
    
}

type PlayerDetailsByAvailableResponse struct {
    ContentType string 
    Players []interface{} 
    StatusCode int64 
    
}

