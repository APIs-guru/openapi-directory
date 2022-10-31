package operations




type TeamsFormatEnum string

const (
    TeamsFormatEnumXML TeamsFormatEnum = "xml"
TeamsFormatEnumJSON TeamsFormatEnum = "json"
)


type TeamsPathParams struct {
    Format TeamsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type TeamsRequest struct {
    PathParams TeamsPathParams 
    
}

type TeamsResponse struct {
    ContentType string 
    StatusCode int64 
    Teams []interface{} 
    
}

