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
	AdditionalNames     *string                                    `json:"additionalNames,omitempty"`
	Category            *ReleaseEventContractCategoryEnum          `json:"category,omitempty"`
	CustomName          *bool                                      `json:"customName,omitempty"`
	Date                *time.Time                                 `json:"date,omitempty"`
	Deleted             *bool                                      `json:"deleted,omitempty"`
	Description         *string                                    `json:"description,omitempty"`
	EndDate             *time.Time                                 `json:"endDate,omitempty"`
	HasVenueOrVenueName *bool                                      `json:"hasVenueOrVenueName,omitempty"`
	ID                  *int32                                     `json:"id,omitempty"`
	InheritedCategory   *ReleaseEventContractInheritedCategoryEnum `json:"inheritedCategory,omitempty"`
	Name                *string                                    `json:"name,omitempty"`
	PictureMime         *string                                    `json:"pictureMime,omitempty"`
	Series              *ReleaseEventSeriesContract                `json:"series,omitempty"`
	SongList            *SongListBaseContract                      `json:"songList,omitempty"`
	Status              *ReleaseEventContractStatusEnum            `json:"status,omitempty"`
	URLSlug             *string                                    `json:"urlSlug,omitempty"`
	Venue               *VenueContract                             `json:"venue,omitempty"`
	VenueName           *string                                    `json:"venueName,omitempty"`
	Version             *int32                                     `json:"version,omitempty"`
}

type ReleaseEventContractInput struct {
	AdditionalNames *string                           `json:"additionalNames,omitempty"`
	Category        *ReleaseEventContractCategoryEnum `json:"category,omitempty"`
	CustomName      *bool                             `json:"customName,omitempty"`
	Date            *time.Time                        `json:"date,omitempty"`
	Deleted         *bool                             `json:"deleted,omitempty"`
	Description     *string                           `json:"description,omitempty"`
	EndDate         *time.Time                        `json:"endDate,omitempty"`
	ID              *int32                            `json:"id,omitempty"`
	Name            *string                           `json:"name,omitempty"`
	PictureMime     *string                           `json:"pictureMime,omitempty"`
	Series          *ReleaseEventSeriesContract       `json:"series,omitempty"`
	SongList        *SongListBaseContract             `json:"songList,omitempty"`
	Status          *ReleaseEventContractStatusEnum   `json:"status,omitempty"`
	URLSlug         *string                           `json:"urlSlug,omitempty"`
	Venue           *VenueContract                    `json:"venue,omitempty"`
	VenueName       *string                           `json:"venueName,omitempty"`
	Version         *int32                            `json:"version,omitempty"`
}
