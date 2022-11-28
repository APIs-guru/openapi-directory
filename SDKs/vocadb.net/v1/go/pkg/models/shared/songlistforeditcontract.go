package shared

import (
	"time"
)

type SongListForEditContractFeaturedCategoryEnum string

const (
	SongListForEditContractFeaturedCategoryEnumNothing         SongListForEditContractFeaturedCategoryEnum = "Nothing"
	SongListForEditContractFeaturedCategoryEnumConcerts        SongListForEditContractFeaturedCategoryEnum = "Concerts"
	SongListForEditContractFeaturedCategoryEnumVocaloidRanking SongListForEditContractFeaturedCategoryEnum = "VocaloidRanking"
	SongListForEditContractFeaturedCategoryEnumPools           SongListForEditContractFeaturedCategoryEnum = "Pools"
	SongListForEditContractFeaturedCategoryEnumOther           SongListForEditContractFeaturedCategoryEnum = "Other"
)

type SongListForEditContractStatusEnum string

const (
	SongListForEditContractStatusEnumDraft    SongListForEditContractStatusEnum = "Draft"
	SongListForEditContractStatusEnumFinished SongListForEditContractStatusEnum = "Finished"
	SongListForEditContractStatusEnumApproved SongListForEditContractStatusEnum = "Approved"
	SongListForEditContractStatusEnumLocked   SongListForEditContractStatusEnum = "Locked"
)

type SongListForEditContractInput struct {
	Author           *UserForAPIContract                          `json:"author,omitempty"`
	CanEdit          *bool                                        `json:"canEdit,omitempty"`
	Deleted          *bool                                        `json:"deleted,omitempty"`
	Description      *string                                      `json:"description,omitempty"`
	EventDate        *time.Time                                   `json:"eventDate,omitempty"`
	FeaturedCategory *SongListForEditContractFeaturedCategoryEnum `json:"featuredCategory,omitempty"`
	ID               *int32                                       `json:"id,omitempty"`
	Name             *string                                      `json:"name,omitempty"`
	SongLinks        []SongInListEditContractInput                `json:"songLinks,omitempty"`
	Status           *SongListForEditContractStatusEnum           `json:"status,omitempty"`
	Thumb            *EntryThumbContract                          `json:"thumb,omitempty"`
	UpdateNotes      *string                                      `json:"updateNotes,omitempty"`
	Version          *int32                                       `json:"version,omitempty"`
}
