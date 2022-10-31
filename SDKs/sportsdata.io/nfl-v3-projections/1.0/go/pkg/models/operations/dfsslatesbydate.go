package operations




type DfsSlatesByDateFormatEnum string

const (
    DfsSlatesByDateFormatEnumXML DfsSlatesByDateFormatEnum = "XML"
DfsSlatesByDateFormatEnumJSON DfsSlatesByDateFormatEnum = "JSON"
)


type DfsSlatesByDatePathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format DfsSlatesByDateFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type DfsSlatesByDateRequest struct {
    PathParams DfsSlatesByDatePathParams 
    
}

type DfsSlatesByDateResponse struct {
    ContentType string 
    DfsSlates []interface{} 
    StatusCode int64 
    
}

