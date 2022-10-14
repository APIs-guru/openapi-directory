package shared

import (
	"time"
)

type SpinLinks struct {
	Playlist *Link `json:"playlist,omitempty"`
	Self     *Link `json:"self,omitempty"`
}

type Spin struct {
	Links         *SpinLinks `json:"_links,omitempty"`
	Artist        *string    `json:"artist,omitempty"`
	ArtistCustom  *string    `json:"artist-custom,omitempty"`
	CatalogNumber *string    `json:"catalog-number,omitempty"`
	Classical     *bool      `json:"classical,omitempty"`
	Composer      *string    `json:"composer,omitempty"`
	Conductor     *string    `json:"conductor,omitempty"`
	Duration      *int64     `json:"duration,omitempty"`
	End           *time.Time `json:"end,omitempty"`
	Ensemble      *string    `json:"ensemble,omitempty"`
	Genre         *string    `json:"genre,omitempty"`
	ID            *int64     `json:"id,omitempty"`
	Image         *string    `json:"image,omitempty"`
	Isrc          *string    `json:"isrc,omitempty"`
	Iswc          *string    `json:"iswc,omitempty"`
	Label         *string    `json:"label,omitempty"`
	LabelCustom   *string    `json:"label-custom,omitempty"`
	Local         *bool      `json:"local,omitempty"`
	Medium        *string    `json:"medium,omitempty"`
	New           *bool      `json:"new,omitempty"`
	Note          *string    `json:"note,omitempty"`
	Performers    *string    `json:"performers,omitempty"`
	PlaylistID    *int64     `json:"playlist_id,omitempty"`
	Release       *string    `json:"release,omitempty"`
	ReleaseCustom *string    `json:"release-custom,omitempty"`
	Released      *int64     `json:"released,omitempty"`
	Request       *bool      `json:"request,omitempty"`
	Song          *string    `json:"song,omitempty"`
	Start         *time.Time `json:"start,omitempty"`
	Timezone      *string    `json:"timezone,omitempty"`
	Upc           *string    `json:"upc,omitempty"`
	Va            *bool      `json:"va,omitempty"`
	Work          *string    `json:"work,omitempty"`
}
