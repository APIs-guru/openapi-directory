package operations




type PlayerDetailsByActiveFormatEnum string

const (
    PlayerDetailsByActiveFormatEnumXML PlayerDetailsByActiveFormatEnum = "XML"
PlayerDetailsByActiveFormatEnumJSON PlayerDetailsByActiveFormatEnum = "JSON"
)


type PlayerDetailsByActivePathParams struct {
    Format PlayerDetailsByActiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type PlayerDetailsByActiveRequest struct {
    PathParams PlayerDetailsByActivePathParams 
    
}

type PlayerDetailsByActiveResponse struct {
    ContentType string 
    Players []interface{} 
    StatusCode int64 
    
}

