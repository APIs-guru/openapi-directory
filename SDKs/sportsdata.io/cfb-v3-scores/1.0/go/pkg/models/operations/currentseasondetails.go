package operations

type CurrentSeasonDetailsFormatEnum string

const (
	CurrentSeasonDetailsFormatEnumXML  CurrentSeasonDetailsFormatEnum = "XML"
	CurrentSeasonDetailsFormatEnumJSON CurrentSeasonDetailsFormatEnum = "JSON"
)

type CurrentSeasonDetailsPathParams struct {
	Format CurrentSeasonDetailsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type CurrentSeasonDetailsRequest struct {
	PathParams CurrentSeasonDetailsPathParams
}

type CurrentSeasonDetailsResponse struct {
	ContentType string
	Season      *interface{}
	StatusCode  int64
}
