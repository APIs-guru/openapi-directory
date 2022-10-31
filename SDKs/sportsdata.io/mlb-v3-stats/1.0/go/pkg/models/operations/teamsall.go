package operations

type TeamsAllFormatEnum string

const (
	TeamsAllFormatEnumXML  TeamsAllFormatEnum = "XML"
	TeamsAllFormatEnumJSON TeamsAllFormatEnum = "JSON"
)

type TeamsAllPathParams struct {
	Format TeamsAllFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type TeamsAllRequest struct {
	PathParams TeamsAllPathParams
}

type TeamsAllResponse struct {
	ContentType string
	StatusCode  int64
	Teams       []interface{}
}
