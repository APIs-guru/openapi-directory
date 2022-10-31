package operations




type AllStarsFormatEnum string

const (
    AllStarsFormatEnumXML AllStarsFormatEnum = "XML"
AllStarsFormatEnumJSON AllStarsFormatEnum = "JSON"
)


type AllStarsPathParams struct {
    Format AllStarsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    
}

type AllStarsRequest struct {
    PathParams AllStarsPathParams 
    
}

type AllStarsResponse struct {
    ContentType string 
    PlayerInfos []interface{} 
    StatusCode int64 
    
}

