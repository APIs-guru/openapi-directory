package shared

type ReleaseEventSeriesForAPIContractCategoryEnum string

const (
	ReleaseEventSeriesForAPIContractCategoryEnumUnspecified  ReleaseEventSeriesForAPIContractCategoryEnum = "Unspecified"
	ReleaseEventSeriesForAPIContractCategoryEnumAlbumRelease ReleaseEventSeriesForAPIContractCategoryEnum = "AlbumRelease"
	ReleaseEventSeriesForAPIContractCategoryEnumAnniversary  ReleaseEventSeriesForAPIContractCategoryEnum = "Anniversary"
	ReleaseEventSeriesForAPIContractCategoryEnumClub         ReleaseEventSeriesForAPIContractCategoryEnum = "Club"
	ReleaseEventSeriesForAPIContractCategoryEnumConcert      ReleaseEventSeriesForAPIContractCategoryEnum = "Concert"
	ReleaseEventSeriesForAPIContractCategoryEnumContest      ReleaseEventSeriesForAPIContractCategoryEnum = "Contest"
	ReleaseEventSeriesForAPIContractCategoryEnumConvention   ReleaseEventSeriesForAPIContractCategoryEnum = "Convention"
	ReleaseEventSeriesForAPIContractCategoryEnumOther        ReleaseEventSeriesForAPIContractCategoryEnum = "Other"
)

type ReleaseEventSeriesForAPIContractStatusEnum string

const (
	ReleaseEventSeriesForAPIContractStatusEnumDraft    ReleaseEventSeriesForAPIContractStatusEnum = "Draft"
	ReleaseEventSeriesForAPIContractStatusEnumFinished ReleaseEventSeriesForAPIContractStatusEnum = "Finished"
	ReleaseEventSeriesForAPIContractStatusEnumApproved ReleaseEventSeriesForAPIContractStatusEnum = "Approved"
	ReleaseEventSeriesForAPIContractStatusEnumLocked   ReleaseEventSeriesForAPIContractStatusEnum = "Locked"
)

type ReleaseEventSeriesForAPIContract struct {
	AdditionalNames *string                                       `json:"additionalNames,omitempty"`
	Category        *ReleaseEventSeriesForAPIContractCategoryEnum `json:"category,omitempty"`
	Description     *string                                       `json:"description,omitempty"`
	Events          []ReleaseEventForAPIContract                  `json:"events,omitempty"`
	ID              *int32                                        `json:"id,omitempty"`
	MainPicture     *EntryThumbForAPIContract                     `json:"mainPicture,omitempty"`
	Name            *string                                       `json:"name,omitempty"`
	Names           []LocalizedStringContract                     `json:"names,omitempty"`
	Status          *ReleaseEventSeriesForAPIContractStatusEnum   `json:"status,omitempty"`
	URLSlug         *string                                       `json:"urlSlug,omitempty"`
	Version         *int32                                        `json:"version,omitempty"`
	WebLinks        []WebLinkForAPIContract                       `json:"webLinks,omitempty"`
}
