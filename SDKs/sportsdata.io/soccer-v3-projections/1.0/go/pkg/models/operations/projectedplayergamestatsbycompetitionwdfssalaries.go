package operations

type ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum string

const (
	ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnumXML  ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum = "xml"
	ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnumJSON ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum = "json"
)

type ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams struct {
	Competition string                                                      `pathParam:"style=simple,explode=false,name=competition"`
	Date        string                                                      `pathParam:"style=simple,explode=false,name=date"`
	Format      ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest struct {
	PathParams ProjectedPlayerGameStatsByCompetitionWDfsSalariesPathParams
}

type ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse struct {
	ContentType           string
	PlayerGameProjections []interface{}
	StatusCode            int64
}
