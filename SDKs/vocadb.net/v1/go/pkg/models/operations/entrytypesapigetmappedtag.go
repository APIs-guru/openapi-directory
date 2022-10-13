package operations

import (
	"openapi/pkg/models/shared"
)

type EntryTypesAPIGetMappedTagEntryTypeEnum string

const (
	EntryTypesAPIGetMappedTagEntryTypeEnumUndefined          EntryTypesAPIGetMappedTagEntryTypeEnum = "Undefined"
	EntryTypesAPIGetMappedTagEntryTypeEnumAlbum              EntryTypesAPIGetMappedTagEntryTypeEnum = "Album"
	EntryTypesAPIGetMappedTagEntryTypeEnumArtist             EntryTypesAPIGetMappedTagEntryTypeEnum = "Artist"
	EntryTypesAPIGetMappedTagEntryTypeEnumDiscussionTopic    EntryTypesAPIGetMappedTagEntryTypeEnum = "DiscussionTopic"
	EntryTypesAPIGetMappedTagEntryTypeEnumPv                 EntryTypesAPIGetMappedTagEntryTypeEnum = "PV"
	EntryTypesAPIGetMappedTagEntryTypeEnumReleaseEvent       EntryTypesAPIGetMappedTagEntryTypeEnum = "ReleaseEvent"
	EntryTypesAPIGetMappedTagEntryTypeEnumReleaseEventSeries EntryTypesAPIGetMappedTagEntryTypeEnum = "ReleaseEventSeries"
	EntryTypesAPIGetMappedTagEntryTypeEnumSong               EntryTypesAPIGetMappedTagEntryTypeEnum = "Song"
	EntryTypesAPIGetMappedTagEntryTypeEnumSongList           EntryTypesAPIGetMappedTagEntryTypeEnum = "SongList"
	EntryTypesAPIGetMappedTagEntryTypeEnumTag                EntryTypesAPIGetMappedTagEntryTypeEnum = "Tag"
	EntryTypesAPIGetMappedTagEntryTypeEnumUser               EntryTypesAPIGetMappedTagEntryTypeEnum = "User"
	EntryTypesAPIGetMappedTagEntryTypeEnumVenue              EntryTypesAPIGetMappedTagEntryTypeEnum = "Venue"
)

type EntryTypesAPIGetMappedTagPathParams struct {
	EntryType EntryTypesAPIGetMappedTagEntryTypeEnum `pathParam:"style=simple,explode=false,name=entryType"`
	SubType   string                                 `pathParam:"style=simple,explode=false,name=subType"`
}

type EntryTypesAPIGetMappedTagFieldsEnum string

const (
	EntryTypesAPIGetMappedTagFieldsEnumNone                  EntryTypesAPIGetMappedTagFieldsEnum = "None"
	EntryTypesAPIGetMappedTagFieldsEnumAdditionalNames       EntryTypesAPIGetMappedTagFieldsEnum = "AdditionalNames"
	EntryTypesAPIGetMappedTagFieldsEnumAliasedTo             EntryTypesAPIGetMappedTagFieldsEnum = "AliasedTo"
	EntryTypesAPIGetMappedTagFieldsEnumDescription           EntryTypesAPIGetMappedTagFieldsEnum = "Description"
	EntryTypesAPIGetMappedTagFieldsEnumMainPicture           EntryTypesAPIGetMappedTagFieldsEnum = "MainPicture"
	EntryTypesAPIGetMappedTagFieldsEnumNames                 EntryTypesAPIGetMappedTagFieldsEnum = "Names"
	EntryTypesAPIGetMappedTagFieldsEnumParent                EntryTypesAPIGetMappedTagFieldsEnum = "Parent"
	EntryTypesAPIGetMappedTagFieldsEnumRelatedTags           EntryTypesAPIGetMappedTagFieldsEnum = "RelatedTags"
	EntryTypesAPIGetMappedTagFieldsEnumTranslatedDescription EntryTypesAPIGetMappedTagFieldsEnum = "TranslatedDescription"
	EntryTypesAPIGetMappedTagFieldsEnumWebLinks              EntryTypesAPIGetMappedTagFieldsEnum = "WebLinks"
)

type EntryTypesAPIGetMappedTagQueryParams struct {
	Fields *EntryTypesAPIGetMappedTagFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
}

type EntryTypesAPIGetMappedTagRequest struct {
	PathParams  EntryTypesAPIGetMappedTagPathParams
	QueryParams EntryTypesAPIGetMappedTagQueryParams
}

type EntryTypesAPIGetMappedTagResponse struct {
	Body              []byte
	ContentType       string
	StatusCode        int64
	TagForAPIContract *shared.TagForAPIContract
}
