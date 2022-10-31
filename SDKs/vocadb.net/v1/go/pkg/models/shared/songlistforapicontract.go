package shared

import (
	"time"
)

type SongListForAPIContractFeaturedCategoryEnum string

const (
	SongListForAPIContractFeaturedCategoryEnumNothing         SongListForAPIContractFeaturedCategoryEnum = "Nothing"
	SongListForAPIContractFeaturedCategoryEnumConcerts        SongListForAPIContractFeaturedCategoryEnum = "Concerts"
	SongListForAPIContractFeaturedCategoryEnumVocaloidRanking SongListForAPIContractFeaturedCategoryEnum = "VocaloidRanking"
	SongListForAPIContractFeaturedCategoryEnumPools           SongListForAPIContractFeaturedCategoryEnum = "Pools"
	SongListForAPIContractFeaturedCategoryEnumOther           SongListForAPIContractFeaturedCategoryEnum = "Other"
)

type SongListForAPIContractStatusEnum string

const (
	SongListForAPIContractStatusEnumDraft    SongListForAPIContractStatusEnum = "Draft"
	SongListForAPIContractStatusEnumFinished SongListForAPIContractStatusEnum = "Finished"
	SongListForAPIContractStatusEnumApproved SongListForAPIContractStatusEnum = "Approved"
	SongListForAPIContractStatusEnumLocked   SongListForAPIContractStatusEnum = "Locked"
)

type SongListForAPIContract struct {
	Author           *UserForAPIContract                         `json:"author,omitempty"`
	Deleted          *bool                                       `json:"deleted,omitempty"`
	Description      *string                                     `json:"description,omitempty"`
	EventDate        *time.Time                                  `json:"eventDate,omitempty"`
	Events           []ReleaseEventForAPIContract                `json:"events,omitempty"`
	FeaturedCategory *SongListForAPIContractFeaturedCategoryEnum `json:"featuredCategory,omitempty"`
	ID               *int32                                      `json:"id,omitempty"`
	LatestComments   []CommentForAPIContract                     `json:"latestComments,omitempty"`
	MainPicture      *EntryThumbForAPIContract                   `json:"mainPicture,omitempty"`
	Name             *string                                     `json:"name,omitempty"`
	Status           *SongListForAPIContractStatusEnum           `json:"status,omitempty"`
	Tags             []TagUsageForAPIContract                    `json:"tags,omitempty"`
}
