package operations




type StadiumsFormatEnum string

const (
    StadiumsFormatEnumXML StadiumsFormatEnum = "xml"
StadiumsFormatEnumJSON StadiumsFormatEnum = "json"
)


type StadiumsPathParams struct {
    Format StadiumsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type StadiumsRequest struct {
    PathParams StadiumsPathParams 
    
}

type StadiumsResponse struct {
    ContentType string 
    Stadiums []interface{} 
    StatusCode int64 
    
}

