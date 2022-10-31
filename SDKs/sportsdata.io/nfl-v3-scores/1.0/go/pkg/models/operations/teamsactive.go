package operations

type TeamsActiveFormatEnum string

const (
	TeamsActiveFormatEnumXML  TeamsActiveFormatEnum = "XML"
	TeamsActiveFormatEnumJSON TeamsActiveFormatEnum = "JSON"
)

type TeamsActivePathParams struct {
	Format TeamsActiveFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type TeamsActiveRequest struct {
	PathParams TeamsActivePathParams
}

type TeamsActiveResponse struct {
	ContentType string
	StatusCode  int64
	Teams       []interface{}
}
