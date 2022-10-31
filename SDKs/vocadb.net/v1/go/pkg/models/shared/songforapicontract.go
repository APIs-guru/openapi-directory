package shared

import (
"time")


type SongForAPIContractDefaultNameLanguageEnum string

const (
    SongForAPIContractDefaultNameLanguageEnumUnspecified SongForAPIContractDefaultNameLanguageEnum = "Unspecified"
SongForAPIContractDefaultNameLanguageEnumJapanese SongForAPIContractDefaultNameLanguageEnum = "Japanese"
SongForAPIContractDefaultNameLanguageEnumRomaji SongForAPIContractDefaultNameLanguageEnum = "Romaji"
SongForAPIContractDefaultNameLanguageEnumEnglish SongForAPIContractDefaultNameLanguageEnum = "English"
)



type SongForAPIContractPvServicesEnum string

const (
    SongForAPIContractPvServicesEnumNothing SongForAPIContractPvServicesEnum = "Nothing"
SongForAPIContractPvServicesEnumNicoNicoDouga SongForAPIContractPvServicesEnum = "NicoNicoDouga"
SongForAPIContractPvServicesEnumYoutube SongForAPIContractPvServicesEnum = "Youtube"
SongForAPIContractPvServicesEnumSoundCloud SongForAPIContractPvServicesEnum = "SoundCloud"
SongForAPIContractPvServicesEnumVimeo SongForAPIContractPvServicesEnum = "Vimeo"
SongForAPIContractPvServicesEnumPiapro SongForAPIContractPvServicesEnum = "Piapro"
SongForAPIContractPvServicesEnumBilibili SongForAPIContractPvServicesEnum = "Bilibili"
SongForAPIContractPvServicesEnumFile SongForAPIContractPvServicesEnum = "File"
SongForAPIContractPvServicesEnumLocalFile SongForAPIContractPvServicesEnum = "LocalFile"
SongForAPIContractPvServicesEnumCreofuga SongForAPIContractPvServicesEnum = "Creofuga"
SongForAPIContractPvServicesEnumBandcamp SongForAPIContractPvServicesEnum = "Bandcamp"
)



type SongForAPIContractSongTypeEnum string

const (
    SongForAPIContractSongTypeEnumUnspecified SongForAPIContractSongTypeEnum = "Unspecified"
SongForAPIContractSongTypeEnumOriginal SongForAPIContractSongTypeEnum = "Original"
SongForAPIContractSongTypeEnumRemaster SongForAPIContractSongTypeEnum = "Remaster"
SongForAPIContractSongTypeEnumRemix SongForAPIContractSongTypeEnum = "Remix"
SongForAPIContractSongTypeEnumCover SongForAPIContractSongTypeEnum = "Cover"
SongForAPIContractSongTypeEnumArrangement SongForAPIContractSongTypeEnum = "Arrangement"
SongForAPIContractSongTypeEnumInstrumental SongForAPIContractSongTypeEnum = "Instrumental"
SongForAPIContractSongTypeEnumMashup SongForAPIContractSongTypeEnum = "Mashup"
SongForAPIContractSongTypeEnumMusicPv SongForAPIContractSongTypeEnum = "MusicPV"
SongForAPIContractSongTypeEnumDramaPv SongForAPIContractSongTypeEnum = "DramaPV"
SongForAPIContractSongTypeEnumLive SongForAPIContractSongTypeEnum = "Live"
SongForAPIContractSongTypeEnumIllustration SongForAPIContractSongTypeEnum = "Illustration"
SongForAPIContractSongTypeEnumOther SongForAPIContractSongTypeEnum = "Other"
)



type SongForAPIContractStatusEnum string

const (
    SongForAPIContractStatusEnumDraft SongForAPIContractStatusEnum = "Draft"
SongForAPIContractStatusEnumFinished SongForAPIContractStatusEnum = "Finished"
SongForAPIContractStatusEnumApproved SongForAPIContractStatusEnum = "Approved"
SongForAPIContractStatusEnumLocked SongForAPIContractStatusEnum = "Locked"
)


type SongForAPIContract struct {
    AdditionalNames *string `json:"additionalNames,omitempty"`
    Albums []AlbumContract `json:"albums,omitempty"`
    ArtistString *string `json:"artistString,omitempty"`
    Artists []ArtistForSongContract `json:"artists,omitempty"`
    CreateDate *time.Time `json:"createDate,omitempty"`
    DefaultName *string `json:"defaultName,omitempty"`
    DefaultNameLanguage *SongForAPIContractDefaultNameLanguageEnum `json:"defaultNameLanguage,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    FavoritedTimes *int32 `json:"favoritedTimes,omitempty"`
    ID *int32 `json:"id,omitempty"`
    LengthSeconds *int32 `json:"lengthSeconds,omitempty"`
    Lyrics []LyricsForSongContract `json:"lyrics,omitempty"`
    MainPicture *EntryThumbForAPIContract `json:"mainPicture,omitempty"`
    MergedTo *int32 `json:"mergedTo,omitempty"`
    Name *string `json:"name,omitempty"`
    Names []LocalizedStringContract `json:"names,omitempty"`
    OriginalVersionID *int32 `json:"originalVersionId,omitempty"`
    PublishDate *time.Time `json:"publishDate,omitempty"`
    PvServices *SongForAPIContractPvServicesEnum `json:"pvServices,omitempty"`
    Pvs []PvContract `json:"pvs,omitempty"`
    RatingScore *int32 `json:"ratingScore,omitempty"`
    ReleaseEvent *ReleaseEventForAPIContract `json:"releaseEvent,omitempty"`
    SongType *SongForAPIContractSongTypeEnum `json:"songType,omitempty"`
    Status *SongForAPIContractStatusEnum `json:"status,omitempty"`
    Tags []TagUsageForAPIContract `json:"tags,omitempty"`
    ThumbURL *string `json:"thumbUrl,omitempty"`
    Version *int32 `json:"version,omitempty"`
    WebLinks []WebLinkForAPIContract `json:"webLinks,omitempty"`
    
}

