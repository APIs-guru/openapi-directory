package operations

type ByeWeeksFormatEnum string

const (
	ByeWeeksFormatEnumXML  ByeWeeksFormatEnum = "XML"
	ByeWeeksFormatEnumJSON ByeWeeksFormatEnum = "JSON"
)

type ByeWeeksPathParams struct {
	Format ByeWeeksFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string             `pathParam:"style=simple,explode=false,name=season"`
}

type ByeWeeksRequest struct {
	PathParams ByeWeeksPathParams
}

type ByeWeeksResponse struct {
	Byes        []interface{}
	ContentType string
	StatusCode  int64
}
