package operations




type PremiumNewsByTeamFormatEnum string

const (
    PremiumNewsByTeamFormatEnumXML PremiumNewsByTeamFormatEnum = "xml"
PremiumNewsByTeamFormatEnumJSON PremiumNewsByTeamFormatEnum = "json"
)


type PremiumNewsByTeamPathParams struct {
    Format PremiumNewsByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Team string `pathParam:"style=simple,explode=false,name=team"`
    
}

type PremiumNewsByTeamRequest struct {
    PathParams PremiumNewsByTeamPathParams 
    
}

type PremiumNewsByTeamResponse struct {
    ContentType string 
    News []interface{} 
    StatusCode int64 
    
}

