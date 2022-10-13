package operations

type ChampionsFormatEnum string

const (
	ChampionsFormatEnumXML  ChampionsFormatEnum = "xml"
	ChampionsFormatEnumJSON ChampionsFormatEnum = "json"
)

type ChampionsPathParams struct {
	Format ChampionsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type ChampionsRequest struct {
	PathParams ChampionsPathParams
}

type ChampionsResponse struct {
	Champions   []interface{}
	ContentType string
	StatusCode  int64
}
