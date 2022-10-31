package operations




type PremiumNewsByDateFormatEnum string

const (
    PremiumNewsByDateFormatEnumXML PremiumNewsByDateFormatEnum = "xml"
PremiumNewsByDateFormatEnumJSON PremiumNewsByDateFormatEnum = "json"
)


type PremiumNewsByDatePathParams struct {
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Format PremiumNewsByDateFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type PremiumNewsByDateRequest struct {
    PathParams PremiumNewsByDatePathParams 
    
}

type PremiumNewsByDateResponse struct {
    ContentType string 
    News []interface{} 
    StatusCode int64 
    
}

