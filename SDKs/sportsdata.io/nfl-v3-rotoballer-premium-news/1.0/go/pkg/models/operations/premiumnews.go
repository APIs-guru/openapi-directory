package operations




type PremiumNewsFormatEnum string

const (
    PremiumNewsFormatEnumXML PremiumNewsFormatEnum = "xml"
PremiumNewsFormatEnumJSON PremiumNewsFormatEnum = "json"
)


type PremiumNewsPathParams struct {
    Format PremiumNewsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type PremiumNewsRequest struct {
    PathParams PremiumNewsPathParams 
    
}

type PremiumNewsResponse struct {
    ContentType string 
    News []interface{} 
    StatusCode int64 
    
}

