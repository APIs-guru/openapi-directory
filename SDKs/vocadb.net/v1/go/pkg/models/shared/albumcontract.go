package shared

import (
	"time"
)

type AlbumContractDiscTypeEnum string

const (
	AlbumContractDiscTypeEnumUnknown      AlbumContractDiscTypeEnum = "Unknown"
	AlbumContractDiscTypeEnumAlbum        AlbumContractDiscTypeEnum = "Album"
	AlbumContractDiscTypeEnumSingle       AlbumContractDiscTypeEnum = "Single"
	AlbumContractDiscTypeEnumEp           AlbumContractDiscTypeEnum = "EP"
	AlbumContractDiscTypeEnumSplitAlbum   AlbumContractDiscTypeEnum = "SplitAlbum"
	AlbumContractDiscTypeEnumCompilation  AlbumContractDiscTypeEnum = "Compilation"
	AlbumContractDiscTypeEnumVideo        AlbumContractDiscTypeEnum = "Video"
	AlbumContractDiscTypeEnumArtbook      AlbumContractDiscTypeEnum = "Artbook"
	AlbumContractDiscTypeEnumGame         AlbumContractDiscTypeEnum = "Game"
	AlbumContractDiscTypeEnumFanmade      AlbumContractDiscTypeEnum = "Fanmade"
	AlbumContractDiscTypeEnumInstrumental AlbumContractDiscTypeEnum = "Instrumental"
	AlbumContractDiscTypeEnumOther        AlbumContractDiscTypeEnum = "Other"
)

type AlbumContractStatusEnum string

const (
	AlbumContractStatusEnumDraft    AlbumContractStatusEnum = "Draft"
	AlbumContractStatusEnumFinished AlbumContractStatusEnum = "Finished"
	AlbumContractStatusEnumApproved AlbumContractStatusEnum = "Approved"
	AlbumContractStatusEnumLocked   AlbumContractStatusEnum = "Locked"
)

type AlbumContractInput struct {
	AdditionalNames  *string                          `json:"additionalNames,omitempty"`
	ArtistString     *string                          `json:"artistString,omitempty"`
	CoverPictureMime *string                          `json:"coverPictureMime,omitempty"`
	CreateDate       *time.Time                       `json:"createDate,omitempty"`
	Deleted          *bool                            `json:"deleted,omitempty"`
	DiscType         *AlbumContractDiscTypeEnum       `json:"discType,omitempty"`
	ID               *int32                           `json:"id,omitempty"`
	Name             *string                          `json:"name,omitempty"`
	RatingAverage    *float64                         `json:"ratingAverage,omitempty"`
	RatingCount      *int32                           `json:"ratingCount,omitempty"`
	ReleaseDate      *OptionalDateTimeContract        `json:"releaseDate,omitempty"`
	ReleaseEvent     *ReleaseEventForAPIContractInput `json:"releaseEvent,omitempty"`
	Status           *AlbumContractStatusEnum         `json:"status,omitempty"`
	Version          *int32                           `json:"version,omitempty"`
}

type AlbumContract struct {
	AdditionalNames  *string                     `json:"additionalNames,omitempty"`
	ArtistString     *string                     `json:"artistString,omitempty"`
	CoverPictureMime *string                     `json:"coverPictureMime,omitempty"`
	CreateDate       *time.Time                  `json:"createDate,omitempty"`
	Deleted          *bool                       `json:"deleted,omitempty"`
	DiscType         *AlbumContractDiscTypeEnum  `json:"discType,omitempty"`
	ID               *int32                      `json:"id,omitempty"`
	Name             *string                     `json:"name,omitempty"`
	RatingAverage    *float64                    `json:"ratingAverage,omitempty"`
	RatingCount      *int32                      `json:"ratingCount,omitempty"`
	ReleaseDate      *OptionalDateTimeContract   `json:"releaseDate,omitempty"`
	ReleaseEvent     *ReleaseEventForAPIContract `json:"releaseEvent,omitempty"`
	Status           *AlbumContractStatusEnum    `json:"status,omitempty"`
	Version          *int32                      `json:"version,omitempty"`
}
