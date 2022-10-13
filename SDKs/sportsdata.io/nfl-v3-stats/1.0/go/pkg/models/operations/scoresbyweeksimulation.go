package operations

type ScoresByWeekSimulationFormatEnum string

const (
	ScoresByWeekSimulationFormatEnumXML  ScoresByWeekSimulationFormatEnum = "XML"
	ScoresByWeekSimulationFormatEnumJSON ScoresByWeekSimulationFormatEnum = "JSON"
)

type ScoresByWeekSimulationPathParams struct {
	Format        ScoresByWeekSimulationFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Numberofplays string                           `pathParam:"style=simple,explode=false,name=numberofplays"`
}

type ScoresByWeekSimulationRequest struct {
	PathParams ScoresByWeekSimulationPathParams
}

type ScoresByWeekSimulationResponse struct {
	ContentType string
	Scores      []interface{}
	StatusCode  int64
}
