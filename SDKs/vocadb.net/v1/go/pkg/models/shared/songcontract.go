package shared

import (
"time")


type SongContractPvServicesEnum string

const (
    SongContractPvServicesEnumNothing SongContractPvServicesEnum = "Nothing"
SongContractPvServicesEnumNicoNicoDouga SongContractPvServicesEnum = "NicoNicoDouga"
SongContractPvServicesEnumYoutube SongContractPvServicesEnum = "Youtube"
SongContractPvServicesEnumSoundCloud SongContractPvServicesEnum = "SoundCloud"
SongContractPvServicesEnumVimeo SongContractPvServicesEnum = "Vimeo"
SongContractPvServicesEnumPiapro SongContractPvServicesEnum = "Piapro"
SongContractPvServicesEnumBilibili SongContractPvServicesEnum = "Bilibili"
SongContractPvServicesEnumFile SongContractPvServicesEnum = "File"
SongContractPvServicesEnumLocalFile SongContractPvServicesEnum = "LocalFile"
SongContractPvServicesEnumCreofuga SongContractPvServicesEnum = "Creofuga"
SongContractPvServicesEnumBandcamp SongContractPvServicesEnum = "Bandcamp"
)



type SongContractSongTypeEnum string

const (
    SongContractSongTypeEnumUnspecified SongContractSongTypeEnum = "Unspecified"
SongContractSongTypeEnumOriginal SongContractSongTypeEnum = "Original"
SongContractSongTypeEnumRemaster SongContractSongTypeEnum = "Remaster"
SongContractSongTypeEnumRemix SongContractSongTypeEnum = "Remix"
SongContractSongTypeEnumCover SongContractSongTypeEnum = "Cover"
SongContractSongTypeEnumArrangement SongContractSongTypeEnum = "Arrangement"
SongContractSongTypeEnumInstrumental SongContractSongTypeEnum = "Instrumental"
SongContractSongTypeEnumMashup SongContractSongTypeEnum = "Mashup"
SongContractSongTypeEnumMusicPv SongContractSongTypeEnum = "MusicPV"
SongContractSongTypeEnumDramaPv SongContractSongTypeEnum = "DramaPV"
SongContractSongTypeEnumLive SongContractSongTypeEnum = "Live"
SongContractSongTypeEnumIllustration SongContractSongTypeEnum = "Illustration"
SongContractSongTypeEnumOther SongContractSongTypeEnum = "Other"
)



type SongContractStatusEnum string

const (
    SongContractStatusEnumDraft SongContractStatusEnum = "Draft"
SongContractStatusEnumFinished SongContractStatusEnum = "Finished"
SongContractStatusEnumApproved SongContractStatusEnum = "Approved"
SongContractStatusEnumLocked SongContractStatusEnum = "Locked"
)


type SongContract struct {
    AdditionalNames *string `json:"additionalNames,omitempty"`
    ArtistString *string `json:"artistString,omitempty"`
    CreateDate *time.Time `json:"createDate,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    FavoritedTimes *int32 `json:"favoritedTimes,omitempty"`
    ID *int32 `json:"id,omitempty"`
    LengthSeconds *int32 `json:"lengthSeconds,omitempty"`
    Name *string `json:"name,omitempty"`
    NicoID *string `json:"nicoId,omitempty"`
    PublishDate *time.Time `json:"publishDate,omitempty"`
    PvServices *SongContractPvServicesEnum `json:"pvServices,omitempty"`
    RatingScore *int32 `json:"ratingScore,omitempty"`
    SongType *SongContractSongTypeEnum `json:"songType,omitempty"`
    Status *SongContractStatusEnum `json:"status,omitempty"`
    ThumbURL *string `json:"thumbUrl,omitempty"`
    Version *int32 `json:"version,omitempty"`
    
}

