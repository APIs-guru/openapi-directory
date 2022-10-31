package operations

type PlayByPlayFormatEnum string

const (
	PlayByPlayFormatEnumXML  PlayByPlayFormatEnum = "XML"
	PlayByPlayFormatEnumJSON PlayByPlayFormatEnum = "JSON"
)

type PlayByPlayPathParams struct {
	Format   PlayByPlayFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Hometeam string               `pathParam:"style=simple,explode=false,name=hometeam"`
	Season   string               `pathParam:"style=simple,explode=false,name=season"`
	Week     string               `pathParam:"style=simple,explode=false,name=week"`
}

type PlayByPlayRequest struct {
	PathParams PlayByPlayPathParams
}

type PlayByPlayResponse struct {
	ContentType string
	PlayByPlay  *interface{}
	StatusCode  int64
}
