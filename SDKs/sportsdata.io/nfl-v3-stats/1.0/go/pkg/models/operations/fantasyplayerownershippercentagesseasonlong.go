package operations

type FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum string

const (
	FantasyPlayerOwnershipPercentagesSeasonLongFormatEnumXML  FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum = "XML"
	FantasyPlayerOwnershipPercentagesSeasonLongFormatEnumJSON FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum = "JSON"
)

type FantasyPlayerOwnershipPercentagesSeasonLongPathParams struct {
	Format FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Season string                                                `pathParam:"style=simple,explode=false,name=season"`
	Week   string                                                `pathParam:"style=simple,explode=false,name=week"`
}

type FantasyPlayerOwnershipPercentagesSeasonLongRequest struct {
	PathParams FantasyPlayerOwnershipPercentagesSeasonLongPathParams
}

type FantasyPlayerOwnershipPercentagesSeasonLongResponse struct {
	ContentType      string
	PlayerOwnerships []interface{}
	StatusCode       int64
}
