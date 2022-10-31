package operations

import (
	"openapi/pkg/models/shared"
)

type ArtistAPIGetOnePathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type ArtistAPIGetOneFieldsEnum string

const (
	ArtistAPIGetOneFieldsEnumNone               ArtistAPIGetOneFieldsEnum = "None"
	ArtistAPIGetOneFieldsEnumAdditionalNames    ArtistAPIGetOneFieldsEnum = "AdditionalNames"
	ArtistAPIGetOneFieldsEnumArtistLinks        ArtistAPIGetOneFieldsEnum = "ArtistLinks"
	ArtistAPIGetOneFieldsEnumArtistLinksReverse ArtistAPIGetOneFieldsEnum = "ArtistLinksReverse"
	ArtistAPIGetOneFieldsEnumBaseVoicebank      ArtistAPIGetOneFieldsEnum = "BaseVoicebank"
	ArtistAPIGetOneFieldsEnumDescription        ArtistAPIGetOneFieldsEnum = "Description"
	ArtistAPIGetOneFieldsEnumMainPicture        ArtistAPIGetOneFieldsEnum = "MainPicture"
	ArtistAPIGetOneFieldsEnumNames              ArtistAPIGetOneFieldsEnum = "Names"
	ArtistAPIGetOneFieldsEnumTags               ArtistAPIGetOneFieldsEnum = "Tags"
	ArtistAPIGetOneFieldsEnumWebLinks           ArtistAPIGetOneFieldsEnum = "WebLinks"
)

type ArtistAPIGetOneLangEnum string

const (
	ArtistAPIGetOneLangEnumDefault  ArtistAPIGetOneLangEnum = "Default"
	ArtistAPIGetOneLangEnumJapanese ArtistAPIGetOneLangEnum = "Japanese"
	ArtistAPIGetOneLangEnumRomaji   ArtistAPIGetOneLangEnum = "Romaji"
	ArtistAPIGetOneLangEnumEnglish  ArtistAPIGetOneLangEnum = "English"
)

type ArtistAPIGetOneRelationsEnum string

const (
	ArtistAPIGetOneRelationsEnumNone          ArtistAPIGetOneRelationsEnum = "None"
	ArtistAPIGetOneRelationsEnumLatestAlbums  ArtistAPIGetOneRelationsEnum = "LatestAlbums"
	ArtistAPIGetOneRelationsEnumLatestEvents  ArtistAPIGetOneRelationsEnum = "LatestEvents"
	ArtistAPIGetOneRelationsEnumLatestSongs   ArtistAPIGetOneRelationsEnum = "LatestSongs"
	ArtistAPIGetOneRelationsEnumPopularAlbums ArtistAPIGetOneRelationsEnum = "PopularAlbums"
	ArtistAPIGetOneRelationsEnumPopularSongs  ArtistAPIGetOneRelationsEnum = "PopularSongs"
	ArtistAPIGetOneRelationsEnumAll           ArtistAPIGetOneRelationsEnum = "All"
)

type ArtistAPIGetOneQueryParams struct {
	Fields    *ArtistAPIGetOneFieldsEnum    `queryParam:"style=form,explode=true,name=fields"`
	Lang      *ArtistAPIGetOneLangEnum      `queryParam:"style=form,explode=true,name=lang"`
	Relations *ArtistAPIGetOneRelationsEnum `queryParam:"style=form,explode=true,name=relations"`
}

type ArtistAPIGetOneRequest struct {
	PathParams  ArtistAPIGetOnePathParams
	QueryParams ArtistAPIGetOneQueryParams
}

type ArtistAPIGetOneResponse struct {
	ArtistForAPIContract *shared.ArtistForAPIContract
	Body                 []byte
	ContentType          string
	StatusCode           int64
}
