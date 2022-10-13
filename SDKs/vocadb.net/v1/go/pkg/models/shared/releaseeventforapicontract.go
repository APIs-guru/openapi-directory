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
	AdditionalNames *string                                 `json:"additionalNames"`
	Artists         []ArtistForEventContract                `json:"artists"`
	Category        *ReleaseEventForAPIContractCategoryEnum `json:"category"`
	Date            *time.Time                              `json:"date"`
	Description     *string                                 `json:"description"`
	EndDate         *time.Time                              `json:"endDate"`
	ID              *int32                                  `json:"id"`
	MainPicture     *EntryThumbForAPIContract               `json:"mainPicture"`
	Name            *string                                 `json:"name"`
	Names           []LocalizedStringContract               `json:"names"`
	Series          *ReleaseEventSeriesContract             `json:"series"`
	SeriesID        *int32                                  `json:"seriesId"`
	SeriesNumber    *int32                                  `json:"seriesNumber"`
	SeriesSuffix    *string                                 `json:"seriesSuffix"`
	SongList        *SongListBaseContract                   `json:"songList"`
	Status          *ReleaseEventForAPIContractStatusEnum   `json:"status"`
	Tags            []TagUsageForAPIContract                `json:"tags"`
	URLSlug         *string                                 `json:"urlSlug"`
	Venue           *VenueForAPIContract                    `json:"venue"`
	VenueName       *string                                 `json:"venueName"`
	Version         *int32                                  `json:"version"`
	WebLinks        []WebLinkForAPIContract                 `json:"webLinks"`
}
