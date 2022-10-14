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
	AdditionalNames *string                                 `json:"additionalNames,omitempty"`
	Category        *ReleaseEventSeriesContractCategoryEnum `json:"category,omitempty"`
	Deleted         *bool                                   `json:"deleted,omitempty"`
	Description     *string                                 `json:"description,omitempty"`
	ID              *int32                                  `json:"id,omitempty"`
	Name            *string                                 `json:"name,omitempty"`
	PictureMime     *string                                 `json:"pictureMime,omitempty"`
	Status          *ReleaseEventSeriesContractStatusEnum   `json:"status,omitempty"`
	URLSlug         *string                                 `json:"urlSlug,omitempty"`
	Version         *int32                                  `json:"version,omitempty"`
	WebLinks        []WebLinkContract                       `json:"webLinks,omitempty"`
}
