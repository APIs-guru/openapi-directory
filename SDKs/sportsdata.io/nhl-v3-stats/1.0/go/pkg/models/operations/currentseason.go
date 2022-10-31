package operations




type CurrentSeasonFormatEnum string

const (
    CurrentSeasonFormatEnumXML CurrentSeasonFormatEnum = "XML"
CurrentSeasonFormatEnumJSON CurrentSeasonFormatEnum = "JSON"
)


type CurrentSeasonPathParams struct {
    Format CurrentSeasonFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type CurrentSeasonRequest struct {
    PathParams CurrentSeasonPathParams 
    
}

type CurrentSeasonResponse struct {
    ContentType string 
    Season *interface{} 
    StatusCode int64 
    
}

