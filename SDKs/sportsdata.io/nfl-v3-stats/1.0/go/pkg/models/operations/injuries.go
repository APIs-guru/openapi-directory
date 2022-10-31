package operations




type InjuriesFormatEnum string

const (
    InjuriesFormatEnumXML InjuriesFormatEnum = "XML"
InjuriesFormatEnumJSON InjuriesFormatEnum = "JSON"
)


type InjuriesPathParams struct {
    Format InjuriesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type InjuriesRequest struct {
    PathParams InjuriesPathParams 
    
}

type InjuriesResponse struct {
    ContentType string 
    Injuries []interface{} 
    StatusCode int64 
    
}

