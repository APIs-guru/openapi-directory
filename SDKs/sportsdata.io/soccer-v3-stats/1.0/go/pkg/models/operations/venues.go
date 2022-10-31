package operations

type VenuesFormatEnum string

const (
	VenuesFormatEnumXML  VenuesFormatEnum = "xml"
	VenuesFormatEnumJSON VenuesFormatEnum = "json"
)

type VenuesPathParams struct {
	Format VenuesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type VenuesRequest struct {
	PathParams VenuesPathParams
}

type VenuesResponse struct {
	ContentType string
	StatusCode  int64
	Venues      []interface{}
}
