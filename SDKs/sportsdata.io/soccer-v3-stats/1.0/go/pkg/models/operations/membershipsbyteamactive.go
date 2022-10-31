package operations

type MembershipsByTeamActiveFormatEnum string

const (
	MembershipsByTeamActiveFormatEnumXML  MembershipsByTeamActiveFormatEnum = "xml"
	MembershipsByTeamActiveFormatEnumJSON MembershipsByTeamActiveFormatEnum = "json"
)

type MembershipsByTeamActivePathParams struct {
	Format MembershipsByTeamActiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Teamid string                            `pathParam:"style=simple,explode=false,name=teamid"`
}

type MembershipsByTeamActiveRequest struct {
	PathParams MembershipsByTeamActivePathParams
}

type MembershipsByTeamActiveResponse struct {
	ContentType string
	Memberships []interface{}
	StatusCode  int64
}
