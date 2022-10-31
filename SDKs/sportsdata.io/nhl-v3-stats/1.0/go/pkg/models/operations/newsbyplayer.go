package operations




type NewsByPlayerFormatEnum string

const (
    NewsByPlayerFormatEnumXML NewsByPlayerFormatEnum = "XML"
NewsByPlayerFormatEnumJSON NewsByPlayerFormatEnum = "JSON"
)


type NewsByPlayerPathParams struct {
    Format NewsByPlayerFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Playerid string `pathParam:"style=simple,explode=false,name=playerid"`
    
}

type NewsByPlayerRequest struct {
    PathParams NewsByPlayerPathParams 
    
}

type NewsByPlayerResponse struct {
    ContentType string 
    News []interface{} 
    StatusCode int64 
    
}

