package operations




type NewsByTeamFormatEnum string

const (
    NewsByTeamFormatEnumXML NewsByTeamFormatEnum = "XML"
NewsByTeamFormatEnumJSON NewsByTeamFormatEnum = "JSON"
)


type NewsByTeamPathParams struct {
    Format NewsByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Team string `pathParam:"style=simple,explode=false,name=team"`
    
}

type NewsByTeamRequest struct {
    PathParams NewsByTeamPathParams 
    
}

type NewsByTeamResponse struct {
    ContentType string 
    News []interface{} 
    StatusCode int64 
    
}

