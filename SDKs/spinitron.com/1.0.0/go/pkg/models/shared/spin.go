package shared

import (
	"time"
)

type SpinLinks struct {
	Playlist *Link `json:"playlist"`
	Self     *Link `json:"self"`
}

type Spin struct {
	Links         *SpinLinks `json:"_links"`
	Artist        *string    `json:"artist"`
	ArtistCustom  *string    `json:"artist-custom"`
	CatalogNumber *string    `json:"catalog-number"`
	Classical     *bool      `json:"classical"`
	Composer      *string    `json:"composer"`
	Conductor     *string    `json:"conductor"`
	Duration      *int64     `json:"duration"`
	End           *time.Time `json:"end"`
	Ensemble      *string    `json:"ensemble"`
	Genre         *string    `json:"genre"`
	ID            *int64     `json:"id"`
	Image         *string    `json:"image"`
	Isrc          *string    `json:"isrc"`
	Iswc          *string    `json:"iswc"`
	Label         *string    `json:"label"`
	LabelCustom   *string    `json:"label-custom"`
	Local         *bool      `json:"local"`
	Medium        *string    `json:"medium"`
	New           *bool      `json:"new"`
	Note          *string    `json:"note"`
	Performers    *string    `json:"performers"`
	PlaylistID    *int64     `json:"playlist_id"`
	Release       *string    `json:"release"`
	ReleaseCustom *string    `json:"release-custom"`
	Released      *int64     `json:"released"`
	Request       *bool      `json:"request"`
	Song          *string    `json:"song"`
	Start         *time.Time `json:"start"`
	Timezone      *string    `json:"timezone"`
	Upc           *string    `json:"upc"`
	Va            *bool      `json:"va"`
	Work          *string    `json:"work"`
}
