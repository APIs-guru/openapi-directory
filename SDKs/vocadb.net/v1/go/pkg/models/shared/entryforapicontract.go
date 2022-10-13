package shared

import (
	"time"
)

type EntryForAPIContractArtistTypeEnum string

const (
	EntryForAPIContractArtistTypeEnumUnknown               EntryForAPIContractArtistTypeEnum = "Unknown"
	EntryForAPIContractArtistTypeEnumCircle                EntryForAPIContractArtistTypeEnum = "Circle"
	EntryForAPIContractArtistTypeEnumLabel                 EntryForAPIContractArtistTypeEnum = "Label"
	EntryForAPIContractArtistTypeEnumProducer              EntryForAPIContractArtistTypeEnum = "Producer"
	EntryForAPIContractArtistTypeEnumAnimator              EntryForAPIContractArtistTypeEnum = "Animator"
	EntryForAPIContractArtistTypeEnumIllustrator           EntryForAPIContractArtistTypeEnum = "Illustrator"
	EntryForAPIContractArtistTypeEnumLyricist              EntryForAPIContractArtistTypeEnum = "Lyricist"
	EntryForAPIContractArtistTypeEnumVocaloid              EntryForAPIContractArtistTypeEnum = "Vocaloid"
	EntryForAPIContractArtistTypeEnumUtau                  EntryForAPIContractArtistTypeEnum = "UTAU"
	EntryForAPIContractArtistTypeEnumCeVio                 EntryForAPIContractArtistTypeEnum = "CeVIO"
	EntryForAPIContractArtistTypeEnumOtherVoiceSynthesizer EntryForAPIContractArtistTypeEnum = "OtherVoiceSynthesizer"
	EntryForAPIContractArtistTypeEnumOtherVocalist         EntryForAPIContractArtistTypeEnum = "OtherVocalist"
	EntryForAPIContractArtistTypeEnumOtherGroup            EntryForAPIContractArtistTypeEnum = "OtherGroup"
	EntryForAPIContractArtistTypeEnumOtherIndividual       EntryForAPIContractArtistTypeEnum = "OtherIndividual"
	EntryForAPIContractArtistTypeEnumUtaite                EntryForAPIContractArtistTypeEnum = "Utaite"
	EntryForAPIContractArtistTypeEnumBand                  EntryForAPIContractArtistTypeEnum = "Band"
	EntryForAPIContractArtistTypeEnumVocalist              EntryForAPIContractArtistTypeEnum = "Vocalist"
	EntryForAPIContractArtistTypeEnumCharacter             EntryForAPIContractArtistTypeEnum = "Character"
	EntryForAPIContractArtistTypeEnumSynthesizerV          EntryForAPIContractArtistTypeEnum = "SynthesizerV"
)

type EntryForAPIContractDefaultNameLanguageEnum string

const (
	EntryForAPIContractDefaultNameLanguageEnumUnspecified EntryForAPIContractDefaultNameLanguageEnum = "Unspecified"
	EntryForAPIContractDefaultNameLanguageEnumJapanese    EntryForAPIContractDefaultNameLanguageEnum = "Japanese"
	EntryForAPIContractDefaultNameLanguageEnumRomaji      EntryForAPIContractDefaultNameLanguageEnum = "Romaji"
	EntryForAPIContractDefaultNameLanguageEnumEnglish     EntryForAPIContractDefaultNameLanguageEnum = "English"
)

type EntryForAPIContractDiscTypeEnum string

const (
	EntryForAPIContractDiscTypeEnumUnknown      EntryForAPIContractDiscTypeEnum = "Unknown"
	EntryForAPIContractDiscTypeEnumAlbum        EntryForAPIContractDiscTypeEnum = "Album"
	EntryForAPIContractDiscTypeEnumSingle       EntryForAPIContractDiscTypeEnum = "Single"
	EntryForAPIContractDiscTypeEnumEp           EntryForAPIContractDiscTypeEnum = "EP"
	EntryForAPIContractDiscTypeEnumSplitAlbum   EntryForAPIContractDiscTypeEnum = "SplitAlbum"
	EntryForAPIContractDiscTypeEnumCompilation  EntryForAPIContractDiscTypeEnum = "Compilation"
	EntryForAPIContractDiscTypeEnumVideo        EntryForAPIContractDiscTypeEnum = "Video"
	EntryForAPIContractDiscTypeEnumArtbook      EntryForAPIContractDiscTypeEnum = "Artbook"
	EntryForAPIContractDiscTypeEnumGame         EntryForAPIContractDiscTypeEnum = "Game"
	EntryForAPIContractDiscTypeEnumFanmade      EntryForAPIContractDiscTypeEnum = "Fanmade"
	EntryForAPIContractDiscTypeEnumInstrumental EntryForAPIContractDiscTypeEnum = "Instrumental"
	EntryForAPIContractDiscTypeEnumOther        EntryForAPIContractDiscTypeEnum = "Other"
)

type EntryForAPIContractEntryTypeEnum string

const (
	EntryForAPIContractEntryTypeEnumUndefined          EntryForAPIContractEntryTypeEnum = "Undefined"
	EntryForAPIContractEntryTypeEnumAlbum              EntryForAPIContractEntryTypeEnum = "Album"
	EntryForAPIContractEntryTypeEnumArtist             EntryForAPIContractEntryTypeEnum = "Artist"
	EntryForAPIContractEntryTypeEnumDiscussionTopic    EntryForAPIContractEntryTypeEnum = "DiscussionTopic"
	EntryForAPIContractEntryTypeEnumPv                 EntryForAPIContractEntryTypeEnum = "PV"
	EntryForAPIContractEntryTypeEnumReleaseEvent       EntryForAPIContractEntryTypeEnum = "ReleaseEvent"
	EntryForAPIContractEntryTypeEnumReleaseEventSeries EntryForAPIContractEntryTypeEnum = "ReleaseEventSeries"
	EntryForAPIContractEntryTypeEnumSong               EntryForAPIContractEntryTypeEnum = "Song"
	EntryForAPIContractEntryTypeEnumSongList           EntryForAPIContractEntryTypeEnum = "SongList"
	EntryForAPIContractEntryTypeEnumTag                EntryForAPIContractEntryTypeEnum = "Tag"
	EntryForAPIContractEntryTypeEnumUser               EntryForAPIContractEntryTypeEnum = "User"
	EntryForAPIContractEntryTypeEnumVenue              EntryForAPIContractEntryTypeEnum = "Venue"
)

type EntryForAPIContractEventCategoryEnum string

const (
	EntryForAPIContractEventCategoryEnumUnspecified  EntryForAPIContractEventCategoryEnum = "Unspecified"
	EntryForAPIContractEventCategoryEnumAlbumRelease EntryForAPIContractEventCategoryEnum = "AlbumRelease"
	EntryForAPIContractEventCategoryEnumAnniversary  EntryForAPIContractEventCategoryEnum = "Anniversary"
	EntryForAPIContractEventCategoryEnumClub         EntryForAPIContractEventCategoryEnum = "Club"
	EntryForAPIContractEventCategoryEnumConcert      EntryForAPIContractEventCategoryEnum = "Concert"
	EntryForAPIContractEventCategoryEnumContest      EntryForAPIContractEventCategoryEnum = "Contest"
	EntryForAPIContractEventCategoryEnumConvention   EntryForAPIContractEventCategoryEnum = "Convention"
	EntryForAPIContractEventCategoryEnumOther        EntryForAPIContractEventCategoryEnum = "Other"
)

type EntryForAPIContractSongListFeaturedCategoryEnum string

const (
	EntryForAPIContractSongListFeaturedCategoryEnumNothing         EntryForAPIContractSongListFeaturedCategoryEnum = "Nothing"
	EntryForAPIContractSongListFeaturedCategoryEnumConcerts        EntryForAPIContractSongListFeaturedCategoryEnum = "Concerts"
	EntryForAPIContractSongListFeaturedCategoryEnumVocaloidRanking EntryForAPIContractSongListFeaturedCategoryEnum = "VocaloidRanking"
	EntryForAPIContractSongListFeaturedCategoryEnumPools           EntryForAPIContractSongListFeaturedCategoryEnum = "Pools"
	EntryForAPIContractSongListFeaturedCategoryEnumOther           EntryForAPIContractSongListFeaturedCategoryEnum = "Other"
)

type EntryForAPIContractSongTypeEnum string

const (
	EntryForAPIContractSongTypeEnumUnspecified  EntryForAPIContractSongTypeEnum = "Unspecified"
	EntryForAPIContractSongTypeEnumOriginal     EntryForAPIContractSongTypeEnum = "Original"
	EntryForAPIContractSongTypeEnumRemaster     EntryForAPIContractSongTypeEnum = "Remaster"
	EntryForAPIContractSongTypeEnumRemix        EntryForAPIContractSongTypeEnum = "Remix"
	EntryForAPIContractSongTypeEnumCover        EntryForAPIContractSongTypeEnum = "Cover"
	EntryForAPIContractSongTypeEnumArrangement  EntryForAPIContractSongTypeEnum = "Arrangement"
	EntryForAPIContractSongTypeEnumInstrumental EntryForAPIContractSongTypeEnum = "Instrumental"
	EntryForAPIContractSongTypeEnumMashup       EntryForAPIContractSongTypeEnum = "Mashup"
	EntryForAPIContractSongTypeEnumMusicPv      EntryForAPIContractSongTypeEnum = "MusicPV"
	EntryForAPIContractSongTypeEnumDramaPv      EntryForAPIContractSongTypeEnum = "DramaPV"
	EntryForAPIContractSongTypeEnumLive         EntryForAPIContractSongTypeEnum = "Live"
	EntryForAPIContractSongTypeEnumIllustration EntryForAPIContractSongTypeEnum = "Illustration"
	EntryForAPIContractSongTypeEnumOther        EntryForAPIContractSongTypeEnum = "Other"
)

type EntryForAPIContractStatusEnum string

const (
	EntryForAPIContractStatusEnumDraft    EntryForAPIContractStatusEnum = "Draft"
	EntryForAPIContractStatusEnumFinished EntryForAPIContractStatusEnum = "Finished"
	EntryForAPIContractStatusEnumApproved EntryForAPIContractStatusEnum = "Approved"
	EntryForAPIContractStatusEnumLocked   EntryForAPIContractStatusEnum = "Locked"
)

type EntryForAPIContract struct {
	ActivityDate             *time.Time                                       `json:"activityDate"`
	AdditionalNames          *string                                          `json:"additionalNames"`
	ArtistString             *string                                          `json:"artistString"`
	ArtistType               *EntryForAPIContractArtistTypeEnum               `json:"artistType"`
	CreateDate               *time.Time                                       `json:"createDate"`
	DefaultName              *string                                          `json:"defaultName"`
	DefaultNameLanguage      *EntryForAPIContractDefaultNameLanguageEnum      `json:"defaultNameLanguage"`
	Description              *string                                          `json:"description"`
	DiscType                 *EntryForAPIContractDiscTypeEnum                 `json:"discType"`
	EntryType                *EntryForAPIContractEntryTypeEnum                `json:"entryType"`
	EventCategory            *EntryForAPIContractEventCategoryEnum            `json:"eventCategory"`
	ID                       *int32                                           `json:"id"`
	MainPicture              *EntryThumbForAPIContract                        `json:"mainPicture"`
	Name                     *string                                          `json:"name"`
	Names                    []LocalizedStringContract                        `json:"names"`
	PVs                      []PvContract                                     `json:"pVs"`
	ReleaseEventSeriesName   *string                                          `json:"releaseEventSeriesName"`
	SongListFeaturedCategory *EntryForAPIContractSongListFeaturedCategoryEnum `json:"songListFeaturedCategory"`
	SongType                 *EntryForAPIContractSongTypeEnum                 `json:"songType"`
	Status                   *EntryForAPIContractStatusEnum                   `json:"status"`
	TagCategoryName          *string                                          `json:"tagCategoryName"`
	Tags                     []TagUsageForAPIContract                         `json:"tags"`
	URLSlug                  *string                                          `json:"urlSlug"`
	Version                  *int32                                           `json:"version"`
	WebLinks                 []ArchivedWebLinkContract                        `json:"webLinks"`
}
