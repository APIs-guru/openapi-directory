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

type AlbumContract struct {
	AdditionalNames  *string                     `json:"additionalNames"`
	ArtistString     *string                     `json:"artistString"`
	CoverPictureMime *string                     `json:"coverPictureMime"`
	CreateDate       *time.Time                  `json:"createDate"`
	Deleted          *bool                       `json:"deleted"`
	DiscType         *AlbumContractDiscTypeEnum  `json:"discType"`
	ID               *int32                      `json:"id"`
	Name             *string                     `json:"name"`
	RatingAverage    *float64                    `json:"ratingAverage"`
	RatingCount      *int32                      `json:"ratingCount"`
	ReleaseDate      *OptionalDateTimeContract   `json:"releaseDate"`
	ReleaseEvent     *ReleaseEventForAPIContract `json:"releaseEvent"`
	Status           *AlbumContractStatusEnum    `json:"status"`
	Version          *int32                      `json:"version"`
}
