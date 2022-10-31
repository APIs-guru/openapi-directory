package operations

type TagAPIGetCategoryNamesListNameMatchModeEnum string

const (
	TagAPIGetCategoryNamesListNameMatchModeEnumAuto       TagAPIGetCategoryNamesListNameMatchModeEnum = "Auto"
	TagAPIGetCategoryNamesListNameMatchModeEnumPartial    TagAPIGetCategoryNamesListNameMatchModeEnum = "Partial"
	TagAPIGetCategoryNamesListNameMatchModeEnumStartsWith TagAPIGetCategoryNamesListNameMatchModeEnum = "StartsWith"
	TagAPIGetCategoryNamesListNameMatchModeEnumExact      TagAPIGetCategoryNamesListNameMatchModeEnum = "Exact"
	TagAPIGetCategoryNamesListNameMatchModeEnumWords      TagAPIGetCategoryNamesListNameMatchModeEnum = "Words"
)

type TagAPIGetCategoryNamesListQueryParams struct {
	NameMatchMode *TagAPIGetCategoryNamesListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
	Query         *string                                      `queryParam:"style=form,explode=true,name=query"`
}

type TagAPIGetCategoryNamesListRequest struct {
	QueryParams TagAPIGetCategoryNamesListQueryParams
}

type TagAPIGetCategoryNamesListResponse struct {
	Body                                                 []byte
	ContentType                                          string
	StatusCode                                           int64
	TagAPIGetCategoryNamesList200ApplicationJSONStrings  []string
	TagAPIGetCategoryNamesList200ApplicationJsonpStrings []string
	TagAPIGetCategoryNamesList200TextJSONStrings         []string
}
