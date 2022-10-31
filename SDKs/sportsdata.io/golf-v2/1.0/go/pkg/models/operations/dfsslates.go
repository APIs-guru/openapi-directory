package operations

type DfsSlatesFormatEnum string

const (
	DfsSlatesFormatEnumXML  DfsSlatesFormatEnum = "XML"
	DfsSlatesFormatEnumJSON DfsSlatesFormatEnum = "JSON"
)

type DfsSlatesPathParams struct {
	Format       DfsSlatesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Tournamentid string              `pathParam:"style=simple,explode=false,name=tournamentid"`
}

type DfsSlatesRequest struct {
	PathParams DfsSlatesPathParams
}

type DfsSlatesResponse struct {
	ContentType string
	DfsSlates   []interface{}
	StatusCode  int64
}
