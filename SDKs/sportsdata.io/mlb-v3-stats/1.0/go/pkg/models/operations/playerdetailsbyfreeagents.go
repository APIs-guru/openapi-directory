package operations

type PlayerDetailsByFreeAgentsFormatEnum string

const (
	PlayerDetailsByFreeAgentsFormatEnumXML  PlayerDetailsByFreeAgentsFormatEnum = "XML"
	PlayerDetailsByFreeAgentsFormatEnumJSON PlayerDetailsByFreeAgentsFormatEnum = "JSON"
)

type PlayerDetailsByFreeAgentsPathParams struct {
	Format PlayerDetailsByFreeAgentsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type PlayerDetailsByFreeAgentsRequest struct {
	PathParams PlayerDetailsByFreeAgentsPathParams
}

type PlayerDetailsByFreeAgentsResponse struct {
	ContentType string
	Players     []interface{}
	StatusCode  int64
}
