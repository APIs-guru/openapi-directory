package operations

type UserAPIGetNamesNameMatchModeEnum string

const (
	UserAPIGetNamesNameMatchModeEnumAuto       UserAPIGetNamesNameMatchModeEnum = "Auto"
	UserAPIGetNamesNameMatchModeEnumPartial    UserAPIGetNamesNameMatchModeEnum = "Partial"
	UserAPIGetNamesNameMatchModeEnumStartsWith UserAPIGetNamesNameMatchModeEnum = "StartsWith"
	UserAPIGetNamesNameMatchModeEnumExact      UserAPIGetNamesNameMatchModeEnum = "Exact"
	UserAPIGetNamesNameMatchModeEnumWords      UserAPIGetNamesNameMatchModeEnum = "Words"
)

type UserAPIGetNamesQueryParams struct {
	IncludeDisabled *bool                             `queryParam:"style=form,explode=true,name=includeDisabled"`
	MaxResults      *int32                            `queryParam:"style=form,explode=true,name=maxResults"`
	NameMatchMode   *UserAPIGetNamesNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
	Query           *string                           `queryParam:"style=form,explode=true,name=query"`
}

type UserAPIGetNamesRequest struct {
	QueryParams UserAPIGetNamesQueryParams
}

type UserAPIGetNamesResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	UserAPIGetNames200ApplicationJSONStrings  []string
	UserAPIGetNames200ApplicationJsonpStrings []string
	UserAPIGetNames200TextJSONStrings         []string
}
