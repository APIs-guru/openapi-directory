package operations

import (
	"openapi/pkg/models/shared"
)

type TagAPIGetListFieldsEnum string

const (
	TagAPIGetListFieldsEnumNone                  TagAPIGetListFieldsEnum = "None"
	TagAPIGetListFieldsEnumAdditionalNames       TagAPIGetListFieldsEnum = "AdditionalNames"
	TagAPIGetListFieldsEnumAliasedTo             TagAPIGetListFieldsEnum = "AliasedTo"
	TagAPIGetListFieldsEnumDescription           TagAPIGetListFieldsEnum = "Description"
	TagAPIGetListFieldsEnumMainPicture           TagAPIGetListFieldsEnum = "MainPicture"
	TagAPIGetListFieldsEnumNames                 TagAPIGetListFieldsEnum = "Names"
	TagAPIGetListFieldsEnumParent                TagAPIGetListFieldsEnum = "Parent"
	TagAPIGetListFieldsEnumRelatedTags           TagAPIGetListFieldsEnum = "RelatedTags"
	TagAPIGetListFieldsEnumTranslatedDescription TagAPIGetListFieldsEnum = "TranslatedDescription"
	TagAPIGetListFieldsEnumWebLinks              TagAPIGetListFieldsEnum = "WebLinks"
)

type TagAPIGetListLangEnum string

const (
	TagAPIGetListLangEnumDefault  TagAPIGetListLangEnum = "Default"
	TagAPIGetListLangEnumJapanese TagAPIGetListLangEnum = "Japanese"
	TagAPIGetListLangEnumRomaji   TagAPIGetListLangEnum = "Romaji"
	TagAPIGetListLangEnumEnglish  TagAPIGetListLangEnum = "English"
)

type TagAPIGetListNameMatchModeEnum string

const (
	TagAPIGetListNameMatchModeEnumAuto       TagAPIGetListNameMatchModeEnum = "Auto"
	TagAPIGetListNameMatchModeEnumPartial    TagAPIGetListNameMatchModeEnum = "Partial"
	TagAPIGetListNameMatchModeEnumStartsWith TagAPIGetListNameMatchModeEnum = "StartsWith"
	TagAPIGetListNameMatchModeEnumExact      TagAPIGetListNameMatchModeEnum = "Exact"
	TagAPIGetListNameMatchModeEnumWords      TagAPIGetListNameMatchModeEnum = "Words"
)

type TagAPIGetListSortEnum string

const (
	TagAPIGetListSortEnumNothing      TagAPIGetListSortEnum = "Nothing"
	TagAPIGetListSortEnumName         TagAPIGetListSortEnum = "Name"
	TagAPIGetListSortEnumAdditionDate TagAPIGetListSortEnum = "AdditionDate"
	TagAPIGetListSortEnumUsageCount   TagAPIGetListSortEnum = "UsageCount"
)

type TagAPIGetListTargetEnum string

const (
	TagAPIGetListTargetEnumNothing     TagAPIGetListTargetEnum = "Nothing"
	TagAPIGetListTargetEnumAlbum       TagAPIGetListTargetEnum = "Album"
	TagAPIGetListTargetEnumArtist      TagAPIGetListTargetEnum = "Artist"
	TagAPIGetListTargetEnumAlbumArtist TagAPIGetListTargetEnum = "AlbumArtist"
	TagAPIGetListTargetEnumEvent       TagAPIGetListTargetEnum = "Event"
	TagAPIGetListTargetEnumSong        TagAPIGetListTargetEnum = "Song"
	TagAPIGetListTargetEnumAlbumSong   TagAPIGetListTargetEnum = "AlbumSong"
	TagAPIGetListTargetEnumArtistSong  TagAPIGetListTargetEnum = "ArtistSong"
	TagAPIGetListTargetEnumAll         TagAPIGetListTargetEnum = "All"
)

type TagAPIGetListQueryParams struct {
	AllowChildren         *bool                           `queryParam:"style=form,explode=true,name=allowChildren"`
	CategoryName          *string                         `queryParam:"style=form,explode=true,name=categoryName"`
	Fields                *TagAPIGetListFieldsEnum        `queryParam:"style=form,explode=true,name=fields"`
	GetTotalCount         *bool                           `queryParam:"style=form,explode=true,name=getTotalCount"`
	Lang                  *TagAPIGetListLangEnum          `queryParam:"style=form,explode=true,name=lang"`
	MaxResults            *int32                          `queryParam:"style=form,explode=true,name=maxResults"`
	NameMatchMode         *TagAPIGetListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
	PreferAccurateMatches *bool                           `queryParam:"style=form,explode=true,name=preferAccurateMatches"`
	Query                 *string                         `queryParam:"style=form,explode=true,name=query"`
	Sort                  *TagAPIGetListSortEnum          `queryParam:"style=form,explode=true,name=sort"`
	Start                 *int32                          `queryParam:"style=form,explode=true,name=start"`
	Target                *TagAPIGetListTargetEnum        `queryParam:"style=form,explode=true,name=target"`
}

type TagAPIGetListRequest struct {
	QueryParams TagAPIGetListQueryParams
}

type TagAPIGetListResponse struct {
	Body                               []byte
	ContentType                        string
	PartialFindResultTagForAPIContract *shared.PartialFindResultTagForAPIContract
	StatusCode                         int64
}
