package operations




type PremiumNewsByPlayerFormatEnum string

const (
    PremiumNewsByPlayerFormatEnumXML PremiumNewsByPlayerFormatEnum = "xml"
PremiumNewsByPlayerFormatEnumJSON PremiumNewsByPlayerFormatEnum = "json"
)


type PremiumNewsByPlayerPathParams struct {
    Format PremiumNewsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    
}

type PremiumNewsByPlayerRequest struct {
    PathParams PremiumNewsByPlayerPathParams 
    
}

type PremiumNewsByPlayerResponse struct {
    ContentType string 
    News []interface{} 
    StatusCode int64 
    
}

