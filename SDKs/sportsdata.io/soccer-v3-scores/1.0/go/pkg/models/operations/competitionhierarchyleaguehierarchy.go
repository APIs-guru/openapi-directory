package operations

type CompetitionHierarchyLeagueHierarchyFormatEnum string

const (
	CompetitionHierarchyLeagueHierarchyFormatEnumXML  CompetitionHierarchyLeagueHierarchyFormatEnum = "xml"
	CompetitionHierarchyLeagueHierarchyFormatEnumJSON CompetitionHierarchyLeagueHierarchyFormatEnum = "json"
)

type CompetitionHierarchyLeagueHierarchyPathParams struct {
	Format CompetitionHierarchyLeagueHierarchyFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type CompetitionHierarchyLeagueHierarchyRequest struct {
	PathParams CompetitionHierarchyLeagueHierarchyPathParams
}

type CompetitionHierarchyLeagueHierarchyResponse struct {
	Areas       []interface{}
	ContentType string
	StatusCode  int64
}
