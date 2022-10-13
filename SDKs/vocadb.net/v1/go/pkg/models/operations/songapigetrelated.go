package operations

import (
	"openapi/pkg/models/shared"
)

type SongAPIGetRelatedPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type SongAPIGetRelatedFieldsEnum string

const (
	SongAPIGetRelatedFieldsEnumNone            SongAPIGetRelatedFieldsEnum = "None"
	SongAPIGetRelatedFieldsEnumAdditionalNames SongAPIGetRelatedFieldsEnum = "AdditionalNames"
	SongAPIGetRelatedFieldsEnumAlbums          SongAPIGetRelatedFieldsEnum = "Albums"
	SongAPIGetRelatedFieldsEnumArtists         SongAPIGetRelatedFieldsEnum = "Artists"
	SongAPIGetRelatedFieldsEnumLyrics          SongAPIGetRelatedFieldsEnum = "Lyrics"
	SongAPIGetRelatedFieldsEnumMainPicture     SongAPIGetRelatedFieldsEnum = "MainPicture"
	SongAPIGetRelatedFieldsEnumNames           SongAPIGetRelatedFieldsEnum = "Names"
	SongAPIGetRelatedFieldsEnumPVs             SongAPIGetRelatedFieldsEnum = "PVs"
	SongAPIGetRelatedFieldsEnumReleaseEvent    SongAPIGetRelatedFieldsEnum = "ReleaseEvent"
	SongAPIGetRelatedFieldsEnumTags            SongAPIGetRelatedFieldsEnum = "Tags"
	SongAPIGetRelatedFieldsEnumThumbURL        SongAPIGetRelatedFieldsEnum = "ThumbUrl"
	SongAPIGetRelatedFieldsEnumWebLinks        SongAPIGetRelatedFieldsEnum = "WebLinks"
)

type SongAPIGetRelatedLangEnum string

const (
	SongAPIGetRelatedLangEnumDefault  SongAPIGetRelatedLangEnum = "Default"
	SongAPIGetRelatedLangEnumJapanese SongAPIGetRelatedLangEnum = "Japanese"
	SongAPIGetRelatedLangEnumRomaji   SongAPIGetRelatedLangEnum = "Romaji"
	SongAPIGetRelatedLangEnumEnglish  SongAPIGetRelatedLangEnum = "English"
)

type SongAPIGetRelatedQueryParams struct {
	Fields *SongAPIGetRelatedFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	Lang   *SongAPIGetRelatedLangEnum   `queryParam:"style=form,explode=true,name=lang"`
}

type SongAPIGetRelatedRequest struct {
	PathParams  SongAPIGetRelatedPathParams
	QueryParams SongAPIGetRelatedQueryParams
}

type SongAPIGetRelatedResponse struct {
	Body                 []byte
	ContentType          string
	RelatedSongsContract *shared.RelatedSongsContract
	StatusCode           int64
}
