package shared

import (
	"time"
)

type PvContractPvTypeEnum string

const (
	PvContractPvTypeEnumOriginal PvContractPvTypeEnum = "Original"
	PvContractPvTypeEnumReprint  PvContractPvTypeEnum = "Reprint"
	PvContractPvTypeEnumOther    PvContractPvTypeEnum = "Other"
)

type PvContractServiceEnum string

const (
	PvContractServiceEnumNicoNicoDouga PvContractServiceEnum = "NicoNicoDouga"
	PvContractServiceEnumYoutube       PvContractServiceEnum = "Youtube"
	PvContractServiceEnumSoundCloud    PvContractServiceEnum = "SoundCloud"
	PvContractServiceEnumVimeo         PvContractServiceEnum = "Vimeo"
	PvContractServiceEnumPiapro        PvContractServiceEnum = "Piapro"
	PvContractServiceEnumBilibili      PvContractServiceEnum = "Bilibili"
	PvContractServiceEnumFile          PvContractServiceEnum = "File"
	PvContractServiceEnumLocalFile     PvContractServiceEnum = "LocalFile"
	PvContractServiceEnumCreofuga      PvContractServiceEnum = "Creofuga"
	PvContractServiceEnumBandcamp      PvContractServiceEnum = "Bandcamp"
)

type PvContract struct {
	Author           *string                `json:"author"`
	CreatedBy        *int32                 `json:"createdBy"`
	Disabled         *bool                  `json:"disabled"`
	ExtendedMetadata *PvExtendedMetadata    `json:"extendedMetadata"`
	ID               *int32                 `json:"id"`
	Length           *int32                 `json:"length"`
	Name             *string                `json:"name"`
	PublishDate      *time.Time             `json:"publishDate"`
	PvID             *string                `json:"pvId"`
	PvType           *PvContractPvTypeEnum  `json:"pvType"`
	Service          *PvContractServiceEnum `json:"service"`
	ThumbURL         *string                `json:"thumbUrl"`
	URL              *string                `json:"url"`
}
