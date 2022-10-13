package shared

import (
	"time"
)

type AlbumForAPIContractDefaultNameLanguageEnum string

const (
	AlbumForAPIContractDefaultNameLanguageEnumUnspecified AlbumForAPIContractDefaultNameLanguageEnum = "Unspecified"
	AlbumForAPIContractDefaultNameLanguageEnumJapanese    AlbumForAPIContractDefaultNameLanguageEnum = "Japanese"
	AlbumForAPIContractDefaultNameLanguageEnumRomaji      AlbumForAPIContractDefaultNameLanguageEnum = "Romaji"
	AlbumForAPIContractDefaultNameLanguageEnumEnglish     AlbumForAPIContractDefaultNameLanguageEnum = "English"
)

type AlbumForAPIContractDiscTypeEnum string

const (
	AlbumForAPIContractDiscTypeEnumUnknown      AlbumForAPIContractDiscTypeEnum = "Unknown"
	AlbumForAPIContractDiscTypeEnumAlbum        AlbumForAPIContractDiscTypeEnum = "Album"
	AlbumForAPIContractDiscTypeEnumSingle       AlbumForAPIContractDiscTypeEnum = "Single"
	AlbumForAPIContractDiscTypeEnumEp           AlbumForAPIContractDiscTypeEnum = "EP"
	AlbumForAPIContractDiscTypeEnumSplitAlbum   AlbumForAPIContractDiscTypeEnum = "SplitAlbum"
	AlbumForAPIContractDiscTypeEnumCompilation  AlbumForAPIContractDiscTypeEnum = "Compilation"
	AlbumForAPIContractDiscTypeEnumVideo        AlbumForAPIContractDiscTypeEnum = "Video"
	AlbumForAPIContractDiscTypeEnumArtbook      AlbumForAPIContractDiscTypeEnum = "Artbook"
	AlbumForAPIContractDiscTypeEnumGame         AlbumForAPIContractDiscTypeEnum = "Game"
	AlbumForAPIContractDiscTypeEnumFanmade      AlbumForAPIContractDiscTypeEnum = "Fanmade"
	AlbumForAPIContractDiscTypeEnumInstrumental AlbumForAPIContractDiscTypeEnum = "Instrumental"
	AlbumForAPIContractDiscTypeEnumOther        AlbumForAPIContractDiscTypeEnum = "Other"
)

type AlbumForAPIContractStatusEnum string

const (
	AlbumForAPIContractStatusEnumDraft    AlbumForAPIContractStatusEnum = "Draft"
	AlbumForAPIContractStatusEnumFinished AlbumForAPIContractStatusEnum = "Finished"
	AlbumForAPIContractStatusEnumApproved AlbumForAPIContractStatusEnum = "Approved"
	AlbumForAPIContractStatusEnumLocked   AlbumForAPIContractStatusEnum = "Locked"
)

type AlbumForAPIContract struct {
	AdditionalNames     *string                                     `json:"additionalNames"`
	ArtistString        *string                                     `json:"artistString"`
	Artists             []ArtistForAlbumForAPIContract              `json:"artists"`
	Barcode             *string                                     `json:"barcode"`
	CatalogNumber       *string                                     `json:"catalogNumber"`
	CreateDate          *time.Time                                  `json:"createDate"`
	DefaultName         *string                                     `json:"defaultName"`
	DefaultNameLanguage *AlbumForAPIContractDefaultNameLanguageEnum `json:"defaultNameLanguage"`
	Deleted             *bool                                       `json:"deleted"`
	Description         *string                                     `json:"description"`
	DiscType            *AlbumForAPIContractDiscTypeEnum            `json:"discType"`
	Discs               []AlbumDiscPropertiesContract               `json:"discs"`
	ID                  *int32                                      `json:"id"`
	Identifiers         []AlbumIdentifierContract                   `json:"identifiers"`
	MainPicture         *EntryThumbForAPIContract                   `json:"mainPicture"`
	MergedTo            *int32                                      `json:"mergedTo"`
	Name                *string                                     `json:"name"`
	Names               []LocalizedStringContract                   `json:"names"`
	Pvs                 []PvContract                                `json:"pvs"`
	RatingAverage       *float64                                    `json:"ratingAverage"`
	RatingCount         *int32                                      `json:"ratingCount"`
	ReleaseDate         *OptionalDateTimeContract                   `json:"releaseDate"`
	ReleaseEvent        *ReleaseEventForAPIContract                 `json:"releaseEvent"`
	Status              *AlbumForAPIContractStatusEnum              `json:"status"`
	Tags                []TagUsageForAPIContract                    `json:"tags"`
	Tracks              []SongInAlbumForAPIContract                 `json:"tracks"`
	Version             *int32                                      `json:"version"`
	WebLinks            []WebLinkForAPIContract                     `json:"webLinks"`
}
