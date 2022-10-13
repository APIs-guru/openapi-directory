package shared

type ReleaseEventSeriesContractCategoryEnum string

const (
	ReleaseEventSeriesContractCategoryEnumUnspecified  ReleaseEventSeriesContractCategoryEnum = "Unspecified"
	ReleaseEventSeriesContractCategoryEnumAlbumRelease ReleaseEventSeriesContractCategoryEnum = "AlbumRelease"
	ReleaseEventSeriesContractCategoryEnumAnniversary  ReleaseEventSeriesContractCategoryEnum = "Anniversary"
	ReleaseEventSeriesContractCategoryEnumClub         ReleaseEventSeriesContractCategoryEnum = "Club"
	ReleaseEventSeriesContractCategoryEnumConcert      ReleaseEventSeriesContractCategoryEnum = "Concert"
	ReleaseEventSeriesContractCategoryEnumContest      ReleaseEventSeriesContractCategoryEnum = "Contest"
	ReleaseEventSeriesContractCategoryEnumConvention   ReleaseEventSeriesContractCategoryEnum = "Convention"
	ReleaseEventSeriesContractCategoryEnumOther        ReleaseEventSeriesContractCategoryEnum = "Other"
)

type ReleaseEventSeriesContractStatusEnum string

const (
	ReleaseEventSeriesContractStatusEnumDraft    ReleaseEventSeriesContractStatusEnum = "Draft"
	ReleaseEventSeriesContractStatusEnumFinished ReleaseEventSeriesContractStatusEnum = "Finished"
	ReleaseEventSeriesContractStatusEnumApproved ReleaseEventSeriesContractStatusEnum = "Approved"
	ReleaseEventSeriesContractStatusEnumLocked   ReleaseEventSeriesContractStatusEnum = "Locked"
)

type ReleaseEventSeriesContract struct {
	AdditionalNames *string                                 `json:"additionalNames"`
	Category        *ReleaseEventSeriesContractCategoryEnum `json:"category"`
	Deleted         *bool                                   `json:"deleted"`
	Description     *string                                 `json:"description"`
	ID              *int32                                  `json:"id"`
	Name            *string                                 `json:"name"`
	PictureMime     *string                                 `json:"pictureMime"`
	Status          *ReleaseEventSeriesContractStatusEnum   `json:"status"`
	URLSlug         *string                                 `json:"urlSlug"`
	Version         *int32                                  `json:"version"`
	WebLinks        []WebLinkContract                       `json:"webLinks"`
}
