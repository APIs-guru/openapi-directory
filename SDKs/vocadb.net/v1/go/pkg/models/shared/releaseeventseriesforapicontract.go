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
	AdditionalNames *string                                       `json:"additionalNames"`
	Category        *ReleaseEventSeriesForAPIContractCategoryEnum `json:"category"`
	Description     *string                                       `json:"description"`
	Events          []ReleaseEventForAPIContract                  `json:"events"`
	ID              *int32                                        `json:"id"`
	MainPicture     *EntryThumbForAPIContract                     `json:"mainPicture"`
	Name            *string                                       `json:"name"`
	Names           []LocalizedStringContract                     `json:"names"`
	Status          *ReleaseEventSeriesForAPIContractStatusEnum   `json:"status"`
	URLSlug         *string                                       `json:"urlSlug"`
	Version         *int32                                        `json:"version"`
	WebLinks        []WebLinkForAPIContract                       `json:"webLinks"`
}
