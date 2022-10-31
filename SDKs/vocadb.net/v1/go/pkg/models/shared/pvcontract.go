package shared

import (
"time")


type PvContractPvTypeEnum string

const (
    PvContractPvTypeEnumOriginal PvContractPvTypeEnum = "Original"
PvContractPvTypeEnumReprint PvContractPvTypeEnum = "Reprint"
PvContractPvTypeEnumOther PvContractPvTypeEnum = "Other"
)



type PvContractServiceEnum string

const (
    PvContractServiceEnumNicoNicoDouga PvContractServiceEnum = "NicoNicoDouga"
PvContractServiceEnumYoutube PvContractServiceEnum = "Youtube"
PvContractServiceEnumSoundCloud PvContractServiceEnum = "SoundCloud"
PvContractServiceEnumVimeo PvContractServiceEnum = "Vimeo"
PvContractServiceEnumPiapro PvContractServiceEnum = "Piapro"
PvContractServiceEnumBilibili PvContractServiceEnum = "Bilibili"
PvContractServiceEnumFile PvContractServiceEnum = "File"
PvContractServiceEnumLocalFile PvContractServiceEnum = "LocalFile"
PvContractServiceEnumCreofuga PvContractServiceEnum = "Creofuga"
PvContractServiceEnumBandcamp PvContractServiceEnum = "Bandcamp"
)


type PvContract struct {
    Author *string `json:"author,omitempty"`
    CreatedBy *int32 `json:"createdBy,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    ExtendedMetadata *PvExtendedMetadata `json:"extendedMetadata,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Length *int32 `json:"length,omitempty"`
    Name *string `json:"name,omitempty"`
    PublishDate *time.Time `json:"publishDate,omitempty"`
    PvID *string `json:"pvId,omitempty"`
    PvType *PvContractPvTypeEnum `json:"pvType,omitempty"`
    Service *PvContractServiceEnum `json:"service,omitempty"`
    ThumbURL *string `json:"thumbUrl,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

