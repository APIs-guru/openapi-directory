package operations

type AreasCountriesFormatEnum string

const (
	AreasCountriesFormatEnumXML  AreasCountriesFormatEnum = "xml"
	AreasCountriesFormatEnumJSON AreasCountriesFormatEnum = "json"
)

type AreasCountriesPathParams struct {
	Format AreasCountriesFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type AreasCountriesRequest struct {
	PathParams AreasCountriesPathParams
}

type AreasCountriesResponse struct {
	Areas       []interface{}
	ContentType string
	StatusCode  int64
}
