package shared

import (
"time")


type EntryForAPIContractArtistTypeEnum string

const (
    EntryForAPIContractArtistTypeEnumUnknown EntryForAPIContractArtistTypeEnum = "Unknown"
EntryForAPIContractArtistTypeEnumCircle EntryForAPIContractArtistTypeEnum = "Circle"
EntryForAPIContractArtistTypeEnumLabel EntryForAPIContractArtistTypeEnum = "Label"
EntryForAPIContractArtistTypeEnumProducer EntryForAPIContractArtistTypeEnum = "Producer"
EntryForAPIContractArtistTypeEnumAnimator EntryForAPIContractArtistTypeEnum = "Animator"
EntryForAPIContractArtistTypeEnumIllustrator EntryForAPIContractArtistTypeEnum = "Illustrator"
EntryForAPIContractArtistTypeEnumLyricist EntryForAPIContractArtistTypeEnum = "Lyricist"
EntryForAPIContractArtistTypeEnumVocaloid EntryForAPIContractArtistTypeEnum = "Vocaloid"
EntryForAPIContractArtistTypeEnumUtau EntryForAPIContractArtistTypeEnum = "UTAU"
EntryForAPIContractArtistTypeEnumCeVio EntryForAPIContractArtistTypeEnum = "CeVIO"
EntryForAPIContractArtistTypeEnumOtherVoiceSynthesizer EntryForAPIContractArtistTypeEnum = "OtherVoiceSynthesizer"
EntryForAPIContractArtistTypeEnumOtherVocalist EntryForAPIContractArtistTypeEnum = "OtherVocalist"
EntryForAPIContractArtistTypeEnumOtherGroup EntryForAPIContractArtistTypeEnum = "OtherGroup"
EntryForAPIContractArtistTypeEnumOtherIndividual EntryForAPIContractArtistTypeEnum = "OtherIndividual"
EntryForAPIContractArtistTypeEnumUtaite EntryForAPIContractArtistTypeEnum = "Utaite"
EntryForAPIContractArtistTypeEnumBand EntryForAPIContractArtistTypeEnum = "Band"
EntryForAPIContractArtistTypeEnumVocalist EntryForAPIContractArtistTypeEnum = "Vocalist"
EntryForAPIContractArtistTypeEnumCharacter EntryForAPIContractArtistTypeEnum = "Character"
EntryForAPIContractArtistTypeEnumSynthesizerV EntryForAPIContractArtistTypeEnum = "SynthesizerV"
)



type EntryForAPIContractDefaultNameLanguageEnum string

const (
    EntryForAPIContractDefaultNameLanguageEnumUnspecified EntryForAPIContractDefaultNameLanguageEnum = "Unspecified"
EntryForAPIContractDefaultNameLanguageEnumJapanese EntryForAPIContractDefaultNameLanguageEnum = "Japanese"
EntryForAPIContractDefaultNameLanguageEnumRomaji EntryForAPIContractDefaultNameLanguageEnum = "Romaji"
EntryForAPIContractDefaultNameLanguageEnumEnglish EntryForAPIContractDefaultNameLanguageEnum = "English"
)



type EntryForAPIContractDiscTypeEnum string

const (
    EntryForAPIContractDiscTypeEnumUnknown EntryForAPIContractDiscTypeEnum = "Unknown"
EntryForAPIContractDiscTypeEnumAlbum EntryForAPIContractDiscTypeEnum = "Album"
EntryForAPIContractDiscTypeEnumSingle EntryForAPIContractDiscTypeEnum = "Single"
EntryForAPIContractDiscTypeEnumEp EntryForAPIContractDiscTypeEnum = "EP"
EntryForAPIContractDiscTypeEnumSplitAlbum EntryForAPIContractDiscTypeEnum = "SplitAlbum"
EntryForAPIContractDiscTypeEnumCompilation EntryForAPIContractDiscTypeEnum = "Compilation"
EntryForAPIContractDiscTypeEnumVideo EntryForAPIContractDiscTypeEnum = "Video"
EntryForAPIContractDiscTypeEnumArtbook EntryForAPIContractDiscTypeEnum = "Artbook"
EntryForAPIContractDiscTypeEnumGame EntryForAPIContractDiscTypeEnum = "Game"
EntryForAPIContractDiscTypeEnumFanmade EntryForAPIContractDiscTypeEnum = "Fanmade"
EntryForAPIContractDiscTypeEnumInstrumental EntryForAPIContractDiscTypeEnum = "Instrumental"
EntryForAPIContractDiscTypeEnumOther EntryForAPIContractDiscTypeEnum = "Other"
)



type EntryForAPIContractEntryTypeEnum string

const (
    EntryForAPIContractEntryTypeEnumUndefined EntryForAPIContractEntryTypeEnum = "Undefined"
EntryForAPIContractEntryTypeEnumAlbum EntryForAPIContractEntryTypeEnum = "Album"
EntryForAPIContractEntryTypeEnumArtist EntryForAPIContractEntryTypeEnum = "Artist"
EntryForAPIContractEntryTypeEnumDiscussionTopic EntryForAPIContractEntryTypeEnum = "DiscussionTopic"
EntryForAPIContractEntryTypeEnumPv EntryForAPIContractEntryTypeEnum = "PV"
EntryForAPIContractEntryTypeEnumReleaseEvent EntryForAPIContractEntryTypeEnum = "ReleaseEvent"
EntryForAPIContractEntryTypeEnumReleaseEventSeries EntryForAPIContractEntryTypeEnum = "ReleaseEventSeries"
EntryForAPIContractEntryTypeEnumSong EntryForAPIContractEntryTypeEnum = "Song"
EntryForAPIContractEntryTypeEnumSongList EntryForAPIContractEntryTypeEnum = "SongList"
EntryForAPIContractEntryTypeEnumTag EntryForAPIContractEntryTypeEnum = "Tag"
EntryForAPIContractEntryTypeEnumUser EntryForAPIContractEntryTypeEnum = "User"
EntryForAPIContractEntryTypeEnumVenue EntryForAPIContractEntryTypeEnum = "Venue"
)



type EntryForAPIContractEventCategoryEnum string

const (
    EntryForAPIContractEventCategoryEnumUnspecified EntryForAPIContractEventCategoryEnum = "Unspecified"
EntryForAPIContractEventCategoryEnumAlbumRelease EntryForAPIContractEventCategoryEnum = "AlbumRelease"
EntryForAPIContractEventCategoryEnumAnniversary EntryForAPIContractEventCategoryEnum = "Anniversary"
EntryForAPIContractEventCategoryEnumClub EntryForAPIContractEventCategoryEnum = "Club"
EntryForAPIContractEventCategoryEnumConcert EntryForAPIContractEventCategoryEnum = "Concert"
EntryForAPIContractEventCategoryEnumContest EntryForAPIContractEventCategoryEnum = "Contest"
EntryForAPIContractEventCategoryEnumConvention EntryForAPIContractEventCategoryEnum = "Convention"
EntryForAPIContractEventCategoryEnumOther EntryForAPIContractEventCategoryEnum = "Other"
)



type EntryForAPIContractSongListFeaturedCategoryEnum string

const (
    EntryForAPIContractSongListFeaturedCategoryEnumNothing EntryForAPIContractSongListFeaturedCategoryEnum = "Nothing"
EntryForAPIContractSongListFeaturedCategoryEnumConcerts EntryForAPIContractSongListFeaturedCategoryEnum = "Concerts"
EntryForAPIContractSongListFeaturedCategoryEnumVocaloidRanking EntryForAPIContractSongListFeaturedCategoryEnum = "VocaloidRanking"
EntryForAPIContractSongListFeaturedCategoryEnumPools EntryForAPIContractSongListFeaturedCategoryEnum = "Pools"
EntryForAPIContractSongListFeaturedCategoryEnumOther EntryForAPIContractSongListFeaturedCategoryEnum = "Other"
)



type EntryForAPIContractSongTypeEnum string

const (
    EntryForAPIContractSongTypeEnumUnspecified EntryForAPIContractSongTypeEnum = "Unspecified"
EntryForAPIContractSongTypeEnumOriginal EntryForAPIContractSongTypeEnum = "Original"
EntryForAPIContractSongTypeEnumRemaster EntryForAPIContractSongTypeEnum = "Remaster"
EntryForAPIContractSongTypeEnumRemix EntryForAPIContractSongTypeEnum = "Remix"
EntryForAPIContractSongTypeEnumCover EntryForAPIContractSongTypeEnum = "Cover"
EntryForAPIContractSongTypeEnumArrangement EntryForAPIContractSongTypeEnum = "Arrangement"
EntryForAPIContractSongTypeEnumInstrumental EntryForAPIContractSongTypeEnum = "Instrumental"
EntryForAPIContractSongTypeEnumMashup EntryForAPIContractSongTypeEnum = "Mashup"
EntryForAPIContractSongTypeEnumMusicPv EntryForAPIContractSongTypeEnum = "MusicPV"
EntryForAPIContractSongTypeEnumDramaPv EntryForAPIContractSongTypeEnum = "DramaPV"
EntryForAPIContractSongTypeEnumLive EntryForAPIContractSongTypeEnum = "Live"
EntryForAPIContractSongTypeEnumIllustration EntryForAPIContractSongTypeEnum = "Illustration"
EntryForAPIContractSongTypeEnumOther EntryForAPIContractSongTypeEnum = "Other"
)



type EntryForAPIContractStatusEnum string

const (
    EntryForAPIContractStatusEnumDraft EntryForAPIContractStatusEnum = "Draft"
EntryForAPIContractStatusEnumFinished EntryForAPIContractStatusEnum = "Finished"
EntryForAPIContractStatusEnumApproved EntryForAPIContractStatusEnum = "Approved"
EntryForAPIContractStatusEnumLocked EntryForAPIContractStatusEnum = "Locked"
)


type EntryForAPIContract struct {
    ActivityDate *time.Time `json:"activityDate,omitempty"`
    AdditionalNames *string `json:"additionalNames,omitempty"`
    ArtistString *string `json:"artistString,omitempty"`
    ArtistType *EntryForAPIContractArtistTypeEnum `json:"artistType,omitempty"`
    CreateDate *time.Time `json:"createDate,omitempty"`
    DefaultName *string `json:"defaultName,omitempty"`
    DefaultNameLanguage *EntryForAPIContractDefaultNameLanguageEnum `json:"defaultNameLanguage,omitempty"`
    Description *string `json:"description,omitempty"`
    DiscType *EntryForAPIContractDiscTypeEnum `json:"discType,omitempty"`
    EntryType *EntryForAPIContractEntryTypeEnum `json:"entryType,omitempty"`
    EventCategory *EntryForAPIContractEventCategoryEnum `json:"eventCategory,omitempty"`
    ID *int32 `json:"id,omitempty"`
    MainPicture *EntryThumbForAPIContract `json:"mainPicture,omitempty"`
    Name *string `json:"name,omitempty"`
    Names []LocalizedStringContract `json:"names,omitempty"`
    PVs []PvContract `json:"pVs,omitempty"`
    ReleaseEventSeriesName *string `json:"releaseEventSeriesName,omitempty"`
    SongListFeaturedCategory *EntryForAPIContractSongListFeaturedCategoryEnum `json:"songListFeaturedCategory,omitempty"`
    SongType *EntryForAPIContractSongTypeEnum `json:"songType,omitempty"`
    Status *EntryForAPIContractStatusEnum `json:"status,omitempty"`
    TagCategoryName *string `json:"tagCategoryName,omitempty"`
    Tags []TagUsageForAPIContract `json:"tags,omitempty"`
    URLSlug *string `json:"urlSlug,omitempty"`
    Version *int32 `json:"version,omitempty"`
    WebLinks []ArchivedWebLinkContract `json:"webLinks,omitempty"`
    
}

