package operations

type SongAPIGetNamesNameMatchModeEnum string

const (
	SongAPIGetNamesNameMatchModeEnumAuto       SongAPIGetNamesNameMatchModeEnum = "Auto"
	SongAPIGetNamesNameMatchModeEnumPartial    SongAPIGetNamesNameMatchModeEnum = "Partial"
	SongAPIGetNamesNameMatchModeEnumStartsWith SongAPIGetNamesNameMatchModeEnum = "StartsWith"
	SongAPIGetNamesNameMatchModeEnumExact      SongAPIGetNamesNameMatchModeEnum = "Exact"
	SongAPIGetNamesNameMatchModeEnumWords      SongAPIGetNamesNameMatchModeEnum = "Words"
)

type SongAPIGetNamesQueryParams struct {
	MaxResults    *int32                            `queryParam:"style=form,explode=true,name=maxResults"`
	NameMatchMode *SongAPIGetNamesNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
	Query         *string                           `queryParam:"style=form,explode=true,name=query"`
}

type SongAPIGetNamesRequest struct {
	QueryParams SongAPIGetNamesQueryParams
}

type SongAPIGetNamesResponse struct {
	Body                                      []byte
	ContentType                               string
	SongAPIGetNames200ApplicationJSONStrings  []string
	SongAPIGetNames200ApplicationJsonpStrings []string
	SongAPIGetNames200TextJSONStrings         []string
	StatusCode                                int64
}
