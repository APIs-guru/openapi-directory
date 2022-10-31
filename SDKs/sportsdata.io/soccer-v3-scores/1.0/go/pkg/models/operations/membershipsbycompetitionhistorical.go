package operations




type MembershipsByCompetitionHistoricalFormatEnum string

const (
    MembershipsByCompetitionHistoricalFormatEnumXML MembershipsByCompetitionHistoricalFormatEnum = "xml"
MembershipsByCompetitionHistoricalFormatEnumJSON MembershipsByCompetitionHistoricalFormatEnum = "json"
)


type MembershipsByCompetitionHistoricalPathParams struct {
    Competition string `pathParam:"style=simple,explode=false,name=competition"`
    Format MembershipsByCompetitionHistoricalFormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type MembershipsByCompetitionHistoricalRequest struct {
    PathParams MembershipsByCompetitionHistoricalPathParams 
    
}

type MembershipsByCompetitionHistoricalResponse struct {
    ContentType string 
    Memberships []interface{} 
    StatusCode int64 
    
}

