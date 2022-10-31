package operations




type InjuriesByTeamFormatEnum string

const (
    InjuriesByTeamFormatEnumXML InjuriesByTeamFormatEnum = "XML"
InjuriesByTeamFormatEnumJSON InjuriesByTeamFormatEnum = "JSON"
)


type InjuriesByTeamPathParams struct {
    Format InjuriesByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Season string `pathParam:"style=simple,explode=false,name=season"`
    Team string `pathParam:"style=simple,explode=false,name=team"`
    Week string `pathParam:"style=simple,explode=false,name=week"`
    
}

type InjuriesByTeamRequest struct {
    PathParams InjuriesByTeamPathParams 
    
}

type InjuriesByTeamResponse struct {
    ContentType string 
    Injuries []interface{} 
    StatusCode int64 
    
}

