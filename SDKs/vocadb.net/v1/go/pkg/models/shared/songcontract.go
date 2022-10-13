package shared

import (
	"time"
)

type SongContractPvServicesEnum string

const (
	SongContractPvServicesEnumNothing       SongContractPvServicesEnum = "Nothing"
	SongContractPvServicesEnumNicoNicoDouga SongContractPvServicesEnum = "NicoNicoDouga"
	SongContractPvServicesEnumYoutube       SongContractPvServicesEnum = "Youtube"
	SongContractPvServicesEnumSoundCloud    SongContractPvServicesEnum = "SoundCloud"
	SongContractPvServicesEnumVimeo         SongContractPvServicesEnum = "Vimeo"
	SongContractPvServicesEnumPiapro        SongContractPvServicesEnum = "Piapro"
	SongContractPvServicesEnumBilibili      SongContractPvServicesEnum = "Bilibili"
	SongContractPvServicesEnumFile          SongContractPvServicesEnum = "File"
	SongContractPvServicesEnumLocalFile     SongContractPvServicesEnum = "LocalFile"
	SongContractPvServicesEnumCreofuga      SongContractPvServicesEnum = "Creofuga"
	SongContractPvServicesEnumBandcamp      SongContractPvServicesEnum = "Bandcamp"
)

type SongContractSongTypeEnum string

const (
	SongContractSongTypeEnumUnspecified  SongContractSongTypeEnum = "Unspecified"
	SongContractSongTypeEnumOriginal     SongContractSongTypeEnum = "Original"
	SongContractSongTypeEnumRemaster     SongContractSongTypeEnum = "Remaster"
	SongContractSongTypeEnumRemix        SongContractSongTypeEnum = "Remix"
	SongContractSongTypeEnumCover        SongContractSongTypeEnum = "Cover"
	SongContractSongTypeEnumArrangement  SongContractSongTypeEnum = "Arrangement"
	SongContractSongTypeEnumInstrumental SongContractSongTypeEnum = "Instrumental"
	SongContractSongTypeEnumMashup       SongContractSongTypeEnum = "Mashup"
	SongContractSongTypeEnumMusicPv      SongContractSongTypeEnum = "MusicPV"
	SongContractSongTypeEnumDramaPv      SongContractSongTypeEnum = "DramaPV"
	SongContractSongTypeEnumLive         SongContractSongTypeEnum = "Live"
	SongContractSongTypeEnumIllustration SongContractSongTypeEnum = "Illustration"
	SongContractSongTypeEnumOther        SongContractSongTypeEnum = "Other"
)

type SongContractStatusEnum string

const (
	SongContractStatusEnumDraft    SongContractStatusEnum = "Draft"
	SongContractStatusEnumFinished SongContractStatusEnum = "Finished"
	SongContractStatusEnumApproved SongContractStatusEnum = "Approved"
	SongContractStatusEnumLocked   SongContractStatusEnum = "Locked"
)

type SongContract struct {
	AdditionalNames *string                     `json:"additionalNames"`
	ArtistString    *string                     `json:"artistString"`
	CreateDate      *time.Time                  `json:"createDate"`
	Deleted         *bool                       `json:"deleted"`
	FavoritedTimes  *int32                      `json:"favoritedTimes"`
	ID              *int32                      `json:"id"`
	LengthSeconds   *int32                      `json:"lengthSeconds"`
	Name            *string                     `json:"name"`
	NicoID          *string                     `json:"nicoId"`
	PublishDate     *time.Time                  `json:"publishDate"`
	PvServices      *SongContractPvServicesEnum `json:"pvServices"`
	RatingScore     *int32                      `json:"ratingScore"`
	SongType        *SongContractSongTypeEnum   `json:"songType"`
	Status          *SongContractStatusEnum     `json:"status"`
	ThumbURL        *string                     `json:"thumbUrl"`
	Version         *int32                      `json:"version"`
}
