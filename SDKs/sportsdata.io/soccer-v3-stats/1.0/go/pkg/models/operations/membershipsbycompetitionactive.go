package operations

type MembershipsByCompetitionActiveFormatEnum string

const (
	MembershipsByCompetitionActiveFormatEnumXML  MembershipsByCompetitionActiveFormatEnum = "xml"
	MembershipsByCompetitionActiveFormatEnumJSON MembershipsByCompetitionActiveFormatEnum = "json"
)

type MembershipsByCompetitionActivePathParams struct {
	Competition string                                   `pathParam:"style=simple,explode=false,name=competition"`
	Format      MembershipsByCompetitionActiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type MembershipsByCompetitionActiveRequest struct {
	PathParams MembershipsByCompetitionActivePathParams
}

type MembershipsByCompetitionActiveResponse struct {
	ContentType string
	Memberships []interface{}
	StatusCode  int64
}
