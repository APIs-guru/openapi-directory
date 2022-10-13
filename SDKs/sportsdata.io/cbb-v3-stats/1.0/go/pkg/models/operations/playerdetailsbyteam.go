package operations

type PlayerDetailsByTeamFormatEnum string

const (
	PlayerDetailsByTeamFormatEnumXML  PlayerDetailsByTeamFormatEnum = "XML"
	PlayerDetailsByTeamFormatEnumJSON PlayerDetailsByTeamFormatEnum = "JSON"
)

type PlayerDetailsByTeamPathParams struct {
	Format PlayerDetailsByTeamFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Team   string                        `pathParam:"style=simple,explode=false,name=team"`
}

type PlayerDetailsByTeamRequest struct {
	PathParams PlayerDetailsByTeamPathParams
}

type PlayerDetailsByTeamResponse struct {
	ContentType string
	Players     []interface{}
	StatusCode  int64
}
