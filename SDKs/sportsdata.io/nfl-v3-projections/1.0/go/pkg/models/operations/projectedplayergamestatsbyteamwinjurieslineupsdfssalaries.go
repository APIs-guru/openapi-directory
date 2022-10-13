package operations

type ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum string

const (
	ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnumXML  ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum = "XML"
	ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum = "JSON"
)

type ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams struct {
	Format ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                                              `pathParam:"style=simple,explode=false,name=season"`
	Team   string                                                              `pathParam:"style=simple,explode=false,name=team"`
	Week   string                                                              `pathParam:"style=simple,explode=false,name=week"`
}

type ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest struct {
	PathParams ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams
}

type ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse struct {
	ContentType           string
	PlayerGameProjections []interface{}
	StatusCode            int64
}
