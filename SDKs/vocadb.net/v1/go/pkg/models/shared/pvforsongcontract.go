package shared

import (
"time")


type PvForSongContractPvTypeEnum string

const (
    PvForSongContractPvTypeEnumOriginal PvForSongContractPvTypeEnum = "Original"
PvForSongContractPvTypeEnumReprint PvForSongContractPvTypeEnum = "Reprint"
PvForSongContractPvTypeEnumOther PvForSongContractPvTypeEnum = "Other"
)



type PvForSongContractServiceEnum string

const (
    PvForSongContractServiceEnumNicoNicoDouga PvForSongContractServiceEnum = "NicoNicoDouga"
PvForSongContractServiceEnumYoutube PvForSongContractServiceEnum = "Youtube"
PvForSongContractServiceEnumSoundCloud PvForSongContractServiceEnum = "SoundCloud"
PvForSongContractServiceEnumVimeo PvForSongContractServiceEnum = "Vimeo"
PvForSongContractServiceEnumPiapro PvForSongContractServiceEnum = "Piapro"
PvForSongContractServiceEnumBilibili PvForSongContractServiceEnum = "Bilibili"
PvForSongContractServiceEnumFile PvForSongContractServiceEnum = "File"
PvForSongContractServiceEnumLocalFile PvForSongContractServiceEnum = "LocalFile"
PvForSongContractServiceEnumCreofuga PvForSongContractServiceEnum = "Creofuga"
PvForSongContractServiceEnumBandcamp PvForSongContractServiceEnum = "Bandcamp"
)


type PvForSongContract struct {
    Author *string `json:"author,omitempty"`
    CreatedBy *int32 `json:"createdBy,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    ExtendedMetadata *PvExtendedMetadata `json:"extendedMetadata,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Length *int32 `json:"length,omitempty"`
    Name *string `json:"name,omitempty"`
    PublishDate *time.Time `json:"publishDate,omitempty"`
    PvID *string `json:"pvId,omitempty"`
    PvType *PvForSongContractPvTypeEnum `json:"pvType,omitempty"`
    Service *PvForSongContractServiceEnum `json:"service,omitempty"`
    Song *SongContract `json:"song,omitempty"`
    ThumbURL *string `json:"thumbUrl,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

