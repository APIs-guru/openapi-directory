package operations

type SongListAPIGetFeaturedListNamesFeaturedCategoryEnum string

const (
	SongListAPIGetFeaturedListNamesFeaturedCategoryEnumNothing         SongListAPIGetFeaturedListNamesFeaturedCategoryEnum = "Nothing"
	SongListAPIGetFeaturedListNamesFeaturedCategoryEnumConcerts        SongListAPIGetFeaturedListNamesFeaturedCategoryEnum = "Concerts"
	SongListAPIGetFeaturedListNamesFeaturedCategoryEnumVocaloidRanking SongListAPIGetFeaturedListNamesFeaturedCategoryEnum = "VocaloidRanking"
	SongListAPIGetFeaturedListNamesFeaturedCategoryEnumPools           SongListAPIGetFeaturedListNamesFeaturedCategoryEnum = "Pools"
	SongListAPIGetFeaturedListNamesFeaturedCategoryEnumOther           SongListAPIGetFeaturedListNamesFeaturedCategoryEnum = "Other"
)

type SongListAPIGetFeaturedListNamesNameMatchModeEnum string

const (
	SongListAPIGetFeaturedListNamesNameMatchModeEnumAuto       SongListAPIGetFeaturedListNamesNameMatchModeEnum = "Auto"
	SongListAPIGetFeaturedListNamesNameMatchModeEnumPartial    SongListAPIGetFeaturedListNamesNameMatchModeEnum = "Partial"
	SongListAPIGetFeaturedListNamesNameMatchModeEnumStartsWith SongListAPIGetFeaturedListNamesNameMatchModeEnum = "StartsWith"
	SongListAPIGetFeaturedListNamesNameMatchModeEnumExact      SongListAPIGetFeaturedListNamesNameMatchModeEnum = "Exact"
	SongListAPIGetFeaturedListNamesNameMatchModeEnumWords      SongListAPIGetFeaturedListNamesNameMatchModeEnum = "Words"
)

type SongListAPIGetFeaturedListNamesQueryParams struct {
	FeaturedCategory *SongListAPIGetFeaturedListNamesFeaturedCategoryEnum `queryParam:"style=form,explode=true,name=featuredCategory"`
	MaxResults       *int32                                               `queryParam:"style=form,explode=true,name=maxResults"`
	NameMatchMode    *SongListAPIGetFeaturedListNamesNameMatchModeEnum    `queryParam:"style=form,explode=true,name=nameMatchMode"`
	Query            *string                                              `queryParam:"style=form,explode=true,name=query"`
}

type SongListAPIGetFeaturedListNamesRequest struct {
	QueryParams SongListAPIGetFeaturedListNamesQueryParams
}

type SongListAPIGetFeaturedListNamesResponse struct {
	Body                                                      []byte
	ContentType                                               string
	SongListAPIGetFeaturedListNames200ApplicationJSONStrings  []string
	SongListAPIGetFeaturedListNames200ApplicationJsonpStrings []string
	SongListAPIGetFeaturedListNames200TextJSONStrings         []string
	StatusCode                                                int64
}
