package shared

import (
	"time"
)

type ReleaseEventForAPIContractCategoryEnum string

const (
	ReleaseEventForAPIContractCategoryEnumUnspecified  ReleaseEventForAPIContractCategoryEnum = "Unspecified"
	ReleaseEventForAPIContractCategoryEnumAlbumRelease ReleaseEventForAPIContractCategoryEnum = "AlbumRelease"
	ReleaseEventForAPIContractCategoryEnumAnniversary  ReleaseEventForAPIContractCategoryEnum = "Anniversary"
	ReleaseEventForAPIContractCategoryEnumClub         ReleaseEventForAPIContractCategoryEnum = "Club"
	ReleaseEventForAPIContractCategoryEnumConcert      ReleaseEventForAPIContractCategoryEnum = "Concert"
	ReleaseEventForAPIContractCategoryEnumContest      ReleaseEventForAPIContractCategoryEnum = "Contest"
	ReleaseEventForAPIContractCategoryEnumConvention   ReleaseEventForAPIContractCategoryEnum = "Convention"
	ReleaseEventForAPIContractCategoryEnumOther        ReleaseEventForAPIContractCategoryEnum = "Other"
)

type ReleaseEventForAPIContractStatusEnum string

const (
	ReleaseEventForAPIContractStatusEnumDraft    ReleaseEventForAPIContractStatusEnum = "Draft"
	ReleaseEventForAPIContractStatusEnumFinished ReleaseEventForAPIContractStatusEnum = "Finished"
	ReleaseEventForAPIContractStatusEnumApproved ReleaseEventForAPIContractStatusEnum = "Approved"
	ReleaseEventForAPIContractStatusEnumLocked   ReleaseEventForAPIContractStatusEnum = "Locked"
)

type ReleaseEventForAPIContract struct {
	AdditionalNames *string                                 `json:"additionalNames,omitempty"`
	Artists         []ArtistForEventContract                `json:"artists,omitempty"`
	Category        *ReleaseEventForAPIContractCategoryEnum `json:"category,omitempty"`
	Date            *time.Time                              `json:"date,omitempty"`
	Description     *string                                 `json:"description,omitempty"`
	EndDate         *time.Time                              `json:"endDate,omitempty"`
	ID              *int32                                  `json:"id,omitempty"`
	MainPicture     *EntryThumbForAPIContract               `json:"mainPicture,omitempty"`
	Name            *string                                 `json:"name,omitempty"`
	Names           []LocalizedStringContract               `json:"names,omitempty"`
	Series          *ReleaseEventSeriesContract             `json:"series,omitempty"`
	SeriesID        *int32                                  `json:"seriesId,omitempty"`
	SeriesNumber    *int32                                  `json:"seriesNumber,omitempty"`
	SeriesSuffix    *string                                 `json:"seriesSuffix,omitempty"`
	SongList        *SongListBaseContract                   `json:"songList,omitempty"`
	Status          *ReleaseEventForAPIContractStatusEnum   `json:"status,omitempty"`
	Tags            []TagUsageForAPIContract                `json:"tags,omitempty"`
	URLSlug         *string                                 `json:"urlSlug,omitempty"`
	Venue           *VenueForAPIContract                    `json:"venue,omitempty"`
	VenueName       *string                                 `json:"venueName,omitempty"`
	Version         *int32                                  `json:"version,omitempty"`
	WebLinks        []WebLinkForAPIContract                 `json:"webLinks,omitempty"`
}

type ReleaseEventForAPIContractInput struct {
	AdditionalNames *string                                 `json:"additionalNames,omitempty"`
	Artists         []ArtistForEventContract                `json:"artists,omitempty"`
	Category        *ReleaseEventForAPIContractCategoryEnum `json:"category,omitempty"`
	Date            *time.Time                              `json:"date,omitempty"`
	Description     *string                                 `json:"description,omitempty"`
	EndDate         *time.Time                              `json:"endDate,omitempty"`
	ID              *int32                                  `json:"id,omitempty"`
	MainPicture     *EntryThumbForAPIContract               `json:"mainPicture,omitempty"`
	Name            *string                                 `json:"name,omitempty"`
	Names           []LocalizedStringContract               `json:"names,omitempty"`
	Series          *ReleaseEventSeriesContract             `json:"series,omitempty"`
	SeriesID        *int32                                  `json:"seriesId,omitempty"`
	SeriesNumber    *int32                                  `json:"seriesNumber,omitempty"`
	SeriesSuffix    *string                                 `json:"seriesSuffix,omitempty"`
	SongList        *SongListBaseContract                   `json:"songList,omitempty"`
	Status          *ReleaseEventForAPIContractStatusEnum   `json:"status,omitempty"`
	Tags            []TagUsageForAPIContract                `json:"tags,omitempty"`
	URLSlug         *string                                 `json:"urlSlug,omitempty"`
	Venue           *VenueForAPIContractInput               `json:"venue,omitempty"`
	VenueName       *string                                 `json:"venueName,omitempty"`
	Version         *int32                                  `json:"version,omitempty"`
	WebLinks        []WebLinkForAPIContract                 `json:"webLinks,omitempty"`
}
