package operations

import (
	"openapi/pkg/models/shared"
)

type ArtistAPIGetListFieldsEnum string

const (
	ArtistAPIGetListFieldsEnumNone               ArtistAPIGetListFieldsEnum = "None"
	ArtistAPIGetListFieldsEnumAdditionalNames    ArtistAPIGetListFieldsEnum = "AdditionalNames"
	ArtistAPIGetListFieldsEnumArtistLinks        ArtistAPIGetListFieldsEnum = "ArtistLinks"
	ArtistAPIGetListFieldsEnumArtistLinksReverse ArtistAPIGetListFieldsEnum = "ArtistLinksReverse"
	ArtistAPIGetListFieldsEnumBaseVoicebank      ArtistAPIGetListFieldsEnum = "BaseVoicebank"
	ArtistAPIGetListFieldsEnumDescription        ArtistAPIGetListFieldsEnum = "Description"
	ArtistAPIGetListFieldsEnumMainPicture        ArtistAPIGetListFieldsEnum = "MainPicture"
	ArtistAPIGetListFieldsEnumNames              ArtistAPIGetListFieldsEnum = "Names"
	ArtistAPIGetListFieldsEnumTags               ArtistAPIGetListFieldsEnum = "Tags"
	ArtistAPIGetListFieldsEnumWebLinks           ArtistAPIGetListFieldsEnum = "WebLinks"
)

type ArtistAPIGetListLangEnum string

const (
	ArtistAPIGetListLangEnumDefault  ArtistAPIGetListLangEnum = "Default"
	ArtistAPIGetListLangEnumJapanese ArtistAPIGetListLangEnum = "Japanese"
	ArtistAPIGetListLangEnumRomaji   ArtistAPIGetListLangEnum = "Romaji"
	ArtistAPIGetListLangEnumEnglish  ArtistAPIGetListLangEnum = "English"
)

type ArtistAPIGetListNameMatchModeEnum string

const (
	ArtistAPIGetListNameMatchModeEnumAuto       ArtistAPIGetListNameMatchModeEnum = "Auto"
	ArtistAPIGetListNameMatchModeEnumPartial    ArtistAPIGetListNameMatchModeEnum = "Partial"
	ArtistAPIGetListNameMatchModeEnumStartsWith ArtistAPIGetListNameMatchModeEnum = "StartsWith"
	ArtistAPIGetListNameMatchModeEnumExact      ArtistAPIGetListNameMatchModeEnum = "Exact"
	ArtistAPIGetListNameMatchModeEnumWords      ArtistAPIGetListNameMatchModeEnum = "Words"
)

type ArtistAPIGetListSortEnum string

const (
	ArtistAPIGetListSortEnumNone            ArtistAPIGetListSortEnum = "None"
	ArtistAPIGetListSortEnumName            ArtistAPIGetListSortEnum = "Name"
	ArtistAPIGetListSortEnumAdditionDate    ArtistAPIGetListSortEnum = "AdditionDate"
	ArtistAPIGetListSortEnumAdditionDateAsc ArtistAPIGetListSortEnum = "AdditionDateAsc"
	ArtistAPIGetListSortEnumReleaseDate     ArtistAPIGetListSortEnum = "ReleaseDate"
	ArtistAPIGetListSortEnumSongCount       ArtistAPIGetListSortEnum = "SongCount"
	ArtistAPIGetListSortEnumSongRating      ArtistAPIGetListSortEnum = "SongRating"
	ArtistAPIGetListSortEnumFollowerCount   ArtistAPIGetListSortEnum = "FollowerCount"
)

type ArtistAPIGetListStatusEnum string

const (
	ArtistAPIGetListStatusEnumDraft    ArtistAPIGetListStatusEnum = "Draft"
	ArtistAPIGetListStatusEnumFinished ArtistAPIGetListStatusEnum = "Finished"
	ArtistAPIGetListStatusEnumApproved ArtistAPIGetListStatusEnum = "Approved"
	ArtistAPIGetListStatusEnumLocked   ArtistAPIGetListStatusEnum = "Locked"
)

type ArtistAPIGetListQueryParams struct {
	AdvancedFilters       []interface{}                      `queryParam:"style=form,explode=true,name=advancedFilters"`
	AllowBaseVoicebanks   *bool                              `queryParam:"style=form,explode=true,name=allowBaseVoicebanks"`
	ArtistTypes           *string                            `queryParam:"style=form,explode=true,name=artistTypes"`
	ChildTags             *bool                              `queryParam:"style=form,explode=true,name=childTags"`
	Fields                *ArtistAPIGetListFieldsEnum        `queryParam:"style=form,explode=true,name=fields"`
	FollowedByUserID      *int32                             `queryParam:"style=form,explode=true,name=followedByUserId"`
	GetTotalCount         *bool                              `queryParam:"style=form,explode=true,name=getTotalCount"`
	Lang                  *ArtistAPIGetListLangEnum          `queryParam:"style=form,explode=true,name=lang"`
	MaxResults            *int32                             `queryParam:"style=form,explode=true,name=maxResults"`
	NameMatchMode         *ArtistAPIGetListNameMatchModeEnum `queryParam:"style=form,explode=true,name=nameMatchMode"`
	PreferAccurateMatches *bool                              `queryParam:"style=form,explode=true,name=preferAccurateMatches"`
	Query                 *string                            `queryParam:"style=form,explode=true,name=query"`
	Sort                  *ArtistAPIGetListSortEnum          `queryParam:"style=form,explode=true,name=sort"`
	Start                 *int32                             `queryParam:"style=form,explode=true,name=start"`
	Status                *ArtistAPIGetListStatusEnum        `queryParam:"style=form,explode=true,name=status"`
	TagID                 []int32                            `queryParam:"style=form,explode=true,name=tagId"`
	TagName               []string                           `queryParam:"style=form,explode=true,name=tagName"`
}

type ArtistAPIGetListRequest struct {
	QueryParams ArtistAPIGetListQueryParams
}

type ArtistAPIGetListResponse struct {
	Body                                  []byte
	ContentType                           string
	PartialFindResultArtistForAPIContract *shared.PartialFindResultArtistForAPIContract
	StatusCode                            int64
}
