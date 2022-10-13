package shared

import (
	"time"
)

type PvForSongContractPvTypeEnum string

const (
	PvForSongContractPvTypeEnumOriginal PvForSongContractPvTypeEnum = "Original"
	PvForSongContractPvTypeEnumReprint  PvForSongContractPvTypeEnum = "Reprint"
	PvForSongContractPvTypeEnumOther    PvForSongContractPvTypeEnum = "Other"
)

type PvForSongContractServiceEnum string

const (
	PvForSongContractServiceEnumNicoNicoDouga PvForSongContractServiceEnum = "NicoNicoDouga"
	PvForSongContractServiceEnumYoutube       PvForSongContractServiceEnum = "Youtube"
	PvForSongContractServiceEnumSoundCloud    PvForSongContractServiceEnum = "SoundCloud"
	PvForSongContractServiceEnumVimeo         PvForSongContractServiceEnum = "Vimeo"
	PvForSongContractServiceEnumPiapro        PvForSongContractServiceEnum = "Piapro"
	PvForSongContractServiceEnumBilibili      PvForSongContractServiceEnum = "Bilibili"
	PvForSongContractServiceEnumFile          PvForSongContractServiceEnum = "File"
	PvForSongContractServiceEnumLocalFile     PvForSongContractServiceEnum = "LocalFile"
	PvForSongContractServiceEnumCreofuga      PvForSongContractServiceEnum = "Creofuga"
	PvForSongContractServiceEnumBandcamp      PvForSongContractServiceEnum = "Bandcamp"
)

type PvForSongContract struct {
	Author           *string                       `json:"author"`
	CreatedBy        *int32                        `json:"createdBy"`
	Disabled         *bool                         `json:"disabled"`
	ExtendedMetadata *PvExtendedMetadata           `json:"extendedMetadata"`
	ID               *int32                        `json:"id"`
	Length           *int32                        `json:"length"`
	Name             *string                       `json:"name"`
	PublishDate      *time.Time                    `json:"publishDate"`
	PvID             *string                       `json:"pvId"`
	PvType           *PvForSongContractPvTypeEnum  `json:"pvType"`
	Service          *PvForSongContractServiceEnum `json:"service"`
	Song             *SongContract                 `json:"song"`
	ThumbURL         *string                       `json:"thumbUrl"`
	URL              *string                       `json:"url"`
}
