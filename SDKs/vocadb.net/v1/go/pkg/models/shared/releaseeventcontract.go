package shared

import (
	"time"
)

type ReleaseEventContractCategoryEnum string

const (
	ReleaseEventContractCategoryEnumUnspecified  ReleaseEventContractCategoryEnum = "Unspecified"
	ReleaseEventContractCategoryEnumAlbumRelease ReleaseEventContractCategoryEnum = "AlbumRelease"
	ReleaseEventContractCategoryEnumAnniversary  ReleaseEventContractCategoryEnum = "Anniversary"
	ReleaseEventContractCategoryEnumClub         ReleaseEventContractCategoryEnum = "Club"
	ReleaseEventContractCategoryEnumConcert      ReleaseEventContractCategoryEnum = "Concert"
	ReleaseEventContractCategoryEnumContest      ReleaseEventContractCategoryEnum = "Contest"
	ReleaseEventContractCategoryEnumConvention   ReleaseEventContractCategoryEnum = "Convention"
	ReleaseEventContractCategoryEnumOther        ReleaseEventContractCategoryEnum = "Other"
)

type ReleaseEventContractInheritedCategoryEnum string

const (
	ReleaseEventContractInheritedCategoryEnumUnspecified  ReleaseEventContractInheritedCategoryEnum = "Unspecified"
	ReleaseEventContractInheritedCategoryEnumAlbumRelease ReleaseEventContractInheritedCategoryEnum = "AlbumRelease"
	ReleaseEventContractInheritedCategoryEnumAnniversary  ReleaseEventContractInheritedCategoryEnum = "Anniversary"
	ReleaseEventContractInheritedCategoryEnumClub         ReleaseEventContractInheritedCategoryEnum = "Club"
	ReleaseEventContractInheritedCategoryEnumConcert      ReleaseEventContractInheritedCategoryEnum = "Concert"
	ReleaseEventContractInheritedCategoryEnumContest      ReleaseEventContractInheritedCategoryEnum = "Contest"
	ReleaseEventContractInheritedCategoryEnumConvention   ReleaseEventContractInheritedCategoryEnum = "Convention"
	ReleaseEventContractInheritedCategoryEnumOther        ReleaseEventContractInheritedCategoryEnum = "Other"
)

type ReleaseEventContractStatusEnum string

const (
	ReleaseEventContractStatusEnumDraft    ReleaseEventContractStatusEnum = "Draft"
	ReleaseEventContractStatusEnumFinished ReleaseEventContractStatusEnum = "Finished"
	ReleaseEventContractStatusEnumApproved ReleaseEventContractStatusEnum = "Approved"
	ReleaseEventContractStatusEnumLocked   ReleaseEventContractStatusEnum = "Locked"
)

type ReleaseEventContract struct {
	AdditionalNames     *string                                    `json:"additionalNames"`
	Category            *ReleaseEventContractCategoryEnum          `json:"category"`
	CustomName          *bool                                      `json:"customName"`
	Date                *time.Time                                 `json:"date"`
	Deleted             *bool                                      `json:"deleted"`
	Description         *string                                    `json:"description"`
	EndDate             *time.Time                                 `json:"endDate"`
	HasVenueOrVenueName *bool                                      `json:"hasVenueOrVenueName"`
	ID                  *int32                                     `json:"id"`
	InheritedCategory   *ReleaseEventContractInheritedCategoryEnum `json:"inheritedCategory"`
	Name                *string                                    `json:"name"`
	PictureMime         *string                                    `json:"pictureMime"`
	Series              *ReleaseEventSeriesContract                `json:"series"`
	SongList            *SongListBaseContract                      `json:"songList"`
	Status              *ReleaseEventContractStatusEnum            `json:"status"`
	URLSlug             *string                                    `json:"urlSlug"`
	Venue               *VenueContract                             `json:"venue"`
	VenueName           *string                                    `json:"venueName"`
	Version             *int32                                     `json:"version"`
}
