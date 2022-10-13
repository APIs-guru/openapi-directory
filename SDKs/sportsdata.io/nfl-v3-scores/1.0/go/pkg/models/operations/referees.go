package operations

type RefereesFormatEnum string

const (
	RefereesFormatEnumXML  RefereesFormatEnum = "XML"
	RefereesFormatEnumJSON RefereesFormatEnum = "JSON"
)

type RefereesPathParams struct {
	Format RefereesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type RefereesRequest struct {
	PathParams RefereesPathParams
}

type RefereesResponse struct {
	ContentType string
	Referees    []interface{}
	StatusCode  int64
}
