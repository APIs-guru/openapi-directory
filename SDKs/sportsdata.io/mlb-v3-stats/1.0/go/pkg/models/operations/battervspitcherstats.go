package operations

type BatterVsPitcherStatsFormatEnum string

const (
	BatterVsPitcherStatsFormatEnumXML  BatterVsPitcherStatsFormatEnum = "XML"
	BatterVsPitcherStatsFormatEnumJSON BatterVsPitcherStatsFormatEnum = "JSON"
)

type BatterVsPitcherStatsPathParams struct {
	Format    BatterVsPitcherStatsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Hitterid  string                         `pathParam:"style=simple,explode=false,name=hitterid"`
	Pitcherid string                         `pathParam:"style=simple,explode=false,name=pitcherid"`
}

type BatterVsPitcherStatsRequest struct {
	PathParams BatterVsPitcherStatsPathParams
}

type BatterVsPitcherStatsResponse struct {
	ContentType   string
	PlayerSeasons []interface{}
	StatusCode    int64
}
