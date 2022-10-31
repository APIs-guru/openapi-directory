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
	AdditionalNames     *string                                     `json:"additionalNames,omitempty"`
	ArtistString        *string                                     `json:"artistString,omitempty"`
	Artists             []ArtistForAlbumForAPIContract              `json:"artists,omitempty"`
	Barcode             *string                                     `json:"barcode,omitempty"`
	CatalogNumber       *string                                     `json:"catalogNumber,omitempty"`
	CreateDate          *time.Time                                  `json:"createDate,omitempty"`
	DefaultName         *string                                     `json:"defaultName,omitempty"`
	DefaultNameLanguage *AlbumForAPIContractDefaultNameLanguageEnum `json:"defaultNameLanguage,omitempty"`
	Deleted             *bool                                       `json:"deleted,omitempty"`
	Description         *string                                     `json:"description,omitempty"`
	DiscType            *AlbumForAPIContractDiscTypeEnum            `json:"discType,omitempty"`
	Discs               []AlbumDiscPropertiesContract               `json:"discs,omitempty"`
	ID                  *int32                                      `json:"id,omitempty"`
	Identifiers         []AlbumIdentifierContract                   `json:"identifiers,omitempty"`
	MainPicture         *EntryThumbForAPIContract                   `json:"mainPicture,omitempty"`
	MergedTo            *int32                                      `json:"mergedTo,omitempty"`
	Name                *string                                     `json:"name,omitempty"`
	Names               []LocalizedStringContract                   `json:"names,omitempty"`
	Pvs                 []PvContract                                `json:"pvs,omitempty"`
	RatingAverage       *float64                                    `json:"ratingAverage,omitempty"`
	RatingCount         *int32                                      `json:"ratingCount,omitempty"`
	ReleaseDate         *OptionalDateTimeContract                   `json:"releaseDate,omitempty"`
	ReleaseEvent        *ReleaseEventForAPIContract                 `json:"releaseEvent,omitempty"`
	Status              *AlbumForAPIContractStatusEnum              `json:"status,omitempty"`
	Tags                []TagUsageForAPIContract                    `json:"tags,omitempty"`
	Tracks              []SongInAlbumForAPIContract                 `json:"tracks,omitempty"`
	Version             *int32                                      `json:"version,omitempty"`
	WebLinks            []WebLinkForAPIContract                     `json:"webLinks,omitempty"`
}
