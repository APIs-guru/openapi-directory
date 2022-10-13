package operations

type TeamHittingVsStartingPitcherFormatEnum string

const (
	TeamHittingVsStartingPitcherFormatEnumXML  TeamHittingVsStartingPitcherFormatEnum = "XML"
	TeamHittingVsStartingPitcherFormatEnumJSON TeamHittingVsStartingPitcherFormatEnum = "JSON"
)

type TeamHittingVsStartingPitcherPathParams struct {
	Format TeamHittingVsStartingPitcherFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Gameid string                                 `pathParam:"style=simple,explode=false,name=gameid"`
	Team   string                                 `pathParam:"style=simple,explode=false,name=team"`
}

type TeamHittingVsStartingPitcherRequest struct {
	PathParams TeamHittingVsStartingPitcherPathParams
}

type TeamHittingVsStartingPitcherResponse struct {
	ContentType   string
	PlayerSeasons []interface{}
	StatusCode    int64
}
