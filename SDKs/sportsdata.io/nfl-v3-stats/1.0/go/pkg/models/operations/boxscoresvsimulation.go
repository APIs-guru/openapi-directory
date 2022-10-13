package operations

type BoxScoresVSimulationFormatEnum string

const (
	BoxScoresVSimulationFormatEnumXML  BoxScoresVSimulationFormatEnum = "XML"
	BoxScoresVSimulationFormatEnumJSON BoxScoresVSimulationFormatEnum = "JSON"
)

type BoxScoresVSimulationPathParams struct {
	Format        BoxScoresVSimulationFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Numberofplays string                         `pathParam:"style=simple,explode=false,name=numberofplays"`
}

type BoxScoresVSimulationRequest struct {
	PathParams BoxScoresVSimulationPathParams
}

type BoxScoresVSimulationResponse struct {
	BoxScoreV3s []interface{}
	ContentType string
	StatusCode  int64
}
