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
	Author           *UserForAPIContract                         `json:"author"`
	Deleted          *bool                                       `json:"deleted"`
	Description      *string                                     `json:"description"`
	EventDate        *time.Time                                  `json:"eventDate"`
	Events           []ReleaseEventForAPIContract                `json:"events"`
	FeaturedCategory *SongListForAPIContractFeaturedCategoryEnum `json:"featuredCategory"`
	ID               *int32                                      `json:"id"`
	LatestComments   []CommentForAPIContract                     `json:"latestComments"`
	MainPicture      *EntryThumbForAPIContract                   `json:"mainPicture"`
	Name             *string                                     `json:"name"`
	Status           *SongListForAPIContractStatusEnum           `json:"status"`
	Tags             []TagUsageForAPIContract                    `json:"tags"`
}
