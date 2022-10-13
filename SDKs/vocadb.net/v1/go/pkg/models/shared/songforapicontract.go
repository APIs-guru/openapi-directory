package shared

import (
	"time"
)

type SongForAPIContractDefaultNameLanguageEnum string

const (
	SongForAPIContractDefaultNameLanguageEnumUnspecified SongForAPIContractDefaultNameLanguageEnum = "Unspecified"
	SongForAPIContractDefaultNameLanguageEnumJapanese    SongForAPIContractDefaultNameLanguageEnum = "Japanese"
	SongForAPIContractDefaultNameLanguageEnumRomaji      SongForAPIContractDefaultNameLanguageEnum = "Romaji"
	SongForAPIContractDefaultNameLanguageEnumEnglish     SongForAPIContractDefaultNameLanguageEnum = "English"
)

type SongForAPIContractPvServicesEnum string

const (
	SongForAPIContractPvServicesEnumNothing       SongForAPIContractPvServicesEnum = "Nothing"
	SongForAPIContractPvServicesEnumNicoNicoDouga SongForAPIContractPvServicesEnum = "NicoNicoDouga"
	SongForAPIContractPvServicesEnumYoutube       SongForAPIContractPvServicesEnum = "Youtube"
	SongForAPIContractPvServicesEnumSoundCloud    SongForAPIContractPvServicesEnum = "SoundCloud"
	SongForAPIContractPvServicesEnumVimeo         SongForAPIContractPvServicesEnum = "Vimeo"
	SongForAPIContractPvServicesEnumPiapro        SongForAPIContractPvServicesEnum = "Piapro"
	SongForAPIContractPvServicesEnumBilibili      SongForAPIContractPvServicesEnum = "Bilibili"
	SongForAPIContractPvServicesEnumFile          SongForAPIContractPvServicesEnum = "File"
	SongForAPIContractPvServicesEnumLocalFile     SongForAPIContractPvServicesEnum = "LocalFile"
	SongForAPIContractPvServicesEnumCreofuga      SongForAPIContractPvServicesEnum = "Creofuga"
	SongForAPIContractPvServicesEnumBandcamp      SongForAPIContractPvServicesEnum = "Bandcamp"
)

type SongForAPIContractSongTypeEnum string

const (
	SongForAPIContractSongTypeEnumUnspecified  SongForAPIContractSongTypeEnum = "Unspecified"
	SongForAPIContractSongTypeEnumOriginal     SongForAPIContractSongTypeEnum = "Original"
	SongForAPIContractSongTypeEnumRemaster     SongForAPIContractSongTypeEnum = "Remaster"
	SongForAPIContractSongTypeEnumRemix        SongForAPIContractSongTypeEnum = "Remix"
	SongForAPIContractSongTypeEnumCover        SongForAPIContractSongTypeEnum = "Cover"
	SongForAPIContractSongTypeEnumArrangement  SongForAPIContractSongTypeEnum = "Arrangement"
	SongForAPIContractSongTypeEnumInstrumental SongForAPIContractSongTypeEnum = "Instrumental"
	SongForAPIContractSongTypeEnumMashup       SongForAPIContractSongTypeEnum = "Mashup"
	SongForAPIContractSongTypeEnumMusicPv      SongForAPIContractSongTypeEnum = "MusicPV"
	SongForAPIContractSongTypeEnumDramaPv      SongForAPIContractSongTypeEnum = "DramaPV"
	SongForAPIContractSongTypeEnumLive         SongForAPIContractSongTypeEnum = "Live"
	SongForAPIContractSongTypeEnumIllustration SongForAPIContractSongTypeEnum = "Illustration"
	SongForAPIContractSongTypeEnumOther        SongForAPIContractSongTypeEnum = "Other"
)

type SongForAPIContractStatusEnum string

const (
	SongForAPIContractStatusEnumDraft    SongForAPIContractStatusEnum = "Draft"
	SongForAPIContractStatusEnumFinished SongForAPIContractStatusEnum = "Finished"
	SongForAPIContractStatusEnumApproved SongForAPIContractStatusEnum = "Approved"
	SongForAPIContractStatusEnumLocked   SongForAPIContractStatusEnum = "Locked"
)

type SongForAPIContract struct {
	AdditionalNames     *string                                    `json:"additionalNames"`
	Albums              []AlbumContract                            `json:"albums"`
	ArtistString        *string                                    `json:"artistString"`
	Artists             []ArtistForSongContract                    `json:"artists"`
	CreateDate          *time.Time                                 `json:"createDate"`
	DefaultName         *string                                    `json:"defaultName"`
	DefaultNameLanguage *SongForAPIContractDefaultNameLanguageEnum `json:"defaultNameLanguage"`
	Deleted             *bool                                      `json:"deleted"`
	FavoritedTimes      *int32                                     `json:"favoritedTimes"`
	ID                  *int32                                     `json:"id"`
	LengthSeconds       *int32                                     `json:"lengthSeconds"`
	Lyrics              []LyricsForSongContract                    `json:"lyrics"`
	MainPicture         *EntryThumbForAPIContract                  `json:"mainPicture"`
	MergedTo            *int32                                     `json:"mergedTo"`
	Name                *string                                    `json:"name"`
	Names               []LocalizedStringContract                  `json:"names"`
	OriginalVersionID   *int32                                     `json:"originalVersionId"`
	PublishDate         *time.Time                                 `json:"publishDate"`
	PvServices          *SongForAPIContractPvServicesEnum          `json:"pvServices"`
	Pvs                 []PvContract                               `json:"pvs"`
	RatingScore         *int32                                     `json:"ratingScore"`
	ReleaseEvent        *ReleaseEventForAPIContract                `json:"releaseEvent"`
	SongType            *SongForAPIContractSongTypeEnum            `json:"songType"`
	Status              *SongForAPIContractStatusEnum              `json:"status"`
	Tags                []TagUsageForAPIContract                   `json:"tags"`
	ThumbURL            *string                                    `json:"thumbUrl"`
	Version             *int32                                     `json:"version"`
	WebLinks            []WebLinkForAPIContract                    `json:"webLinks"`
}
