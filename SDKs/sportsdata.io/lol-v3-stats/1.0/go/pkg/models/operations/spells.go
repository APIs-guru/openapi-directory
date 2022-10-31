package operations

type SpellsFormatEnum string

const (
	SpellsFormatEnumXML  SpellsFormatEnum = "xml"
	SpellsFormatEnumJSON SpellsFormatEnum = "json"
)

type SpellsPathParams struct {
	Format SpellsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type SpellsRequest struct {
	PathParams SpellsPathParams
}

type SpellsResponse struct {
	ContentType string
	Spells      []interface{}
	StatusCode  int64
}
