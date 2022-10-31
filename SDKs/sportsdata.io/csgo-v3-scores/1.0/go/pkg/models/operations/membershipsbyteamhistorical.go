package operations




type MembershipsByTeamHistoricalFormatEnum string

const (
    MembershipsByTeamHistoricalFormatEnumXML MembershipsByTeamHistoricalFormatEnum = "xml"
MembershipsByTeamHistoricalFormatEnumJSON MembershipsByTeamHistoricalFormatEnum = "json"
)


type MembershipsByTeamHistoricalPathParams struct {
    Format MembershipsByTeamHistoricalFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    Teamid string `pathParam:"style=simple,explode=false,name=teamid"`
    
}

type MembershipsByTeamHistoricalRequest struct {
    PathParams MembershipsByTeamHistoricalPathParams 
    
}

type MembershipsByTeamHistoricalResponse struct {
    ContentType string 
    Memberships []interface{} 
    StatusCode int64 
    
}

