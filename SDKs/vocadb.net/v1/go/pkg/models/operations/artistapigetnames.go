package operations

type ArtistAPIGetNamesNameMatchModeEnum string

const (
	ArtistAPIGetNamesNameMatchModeEnumAuto       ArtistAPIGetNamesNameMatchModeEnum = "Auto"
	ArtistAPIGetNamesNameMatchModeEnumPartial    ArtistAPIGetNamesNameMatchModeEnum = "Partial"
	ArtistAPIGetNamesNameMatchModeEnumStartsWith ArtistAPIGetNamesNameMatchModeEnum = "StartsWith"
	ArtistAPIGetNamesNameMatchModeEnumExact      ArtistAPIGetNamesNameMatchModeEnum = "Exact"
	ArtistAPIGetNamesNameMatchModeEnumWords      ArtistAPIGetNamesNameMatchModeEnum = "Words"
)

type ArtistAPIGetNamesQueryParams struct {
	MaxResults    *int32                              `queryParam:"style=form,explode=true,name=maxResults"`
	NameMatchMode *ArtistAPIGetNamesNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
	Query         *string                             `queryParam:"style=form,explode=true,name=query"`
}

type ArtistAPIGetNamesRequest struct {
	QueryParams ArtistAPIGetNamesQueryParams
}

type ArtistAPIGetNamesResponse struct {
	ArtistAPIGetNames200ApplicationJSONStrings  []string
	ArtistAPIGetNames200ApplicationJsonpStrings []string
	ArtistAPIGetNames200TextJSONStrings         []string
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
}
