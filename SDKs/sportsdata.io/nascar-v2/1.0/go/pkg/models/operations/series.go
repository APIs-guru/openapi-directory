package operations




type SeriesFormatEnum string

const (
    SeriesFormatEnumXML SeriesFormatEnum = "xml"
SeriesFormatEnumJSON SeriesFormatEnum = "json"
)


type SeriesPathParams struct {
    Format SeriesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type SeriesRequest struct {
    PathParams SeriesPathParams 
    
}

type SeriesResponse struct {
    ContentType string 
    Series []interface{} 
    StatusCode int64 
    
}

