package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeedAlt1TypeEnum string

const (
	GetFeedAlt1TypeEnumAppears          GetFeedAlt1TypeEnum = "appears"
	GetFeedAlt1TypeEnumCategoryFeatured GetFeedAlt1TypeEnum = "category_featured"
	GetFeedAlt1TypeEnumChannel          GetFeedAlt1TypeEnum = "channel"
	GetFeedAlt1TypeEnumFacebookFeed     GetFeedAlt1TypeEnum = "facebook_feed"
	GetFeedAlt1TypeEnumFollowing        GetFeedAlt1TypeEnum = "following"
	GetFeedAlt1TypeEnumGroup            GetFeedAlt1TypeEnum = "group"
	GetFeedAlt1TypeEnumLikes            GetFeedAlt1TypeEnum = "likes"
	GetFeedAlt1TypeEnumOndemandPublish  GetFeedAlt1TypeEnum = "ondemand_publish"
	GetFeedAlt1TypeEnumShare            GetFeedAlt1TypeEnum = "share"
	GetFeedAlt1TypeEnumTaggedWith       GetFeedAlt1TypeEnum = "tagged_with"
	GetFeedAlt1TypeEnumTwitterTimeline  GetFeedAlt1TypeEnum = "twitter_timeline"
	GetFeedAlt1TypeEnumUploads          GetFeedAlt1TypeEnum = "uploads"
)

type GetFeedAlt1QueryParams struct {
	Offset  *string              `queryParam:"style=form,explode=true,name=offset"`
	Page    *float64             `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64             `queryParam:"style=form,explode=true,name=per_page"`
	Type    *GetFeedAlt1TypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetFeedAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetFeedAlt1Request struct {
	QueryParams GetFeedAlt1QueryParams
	Security    GetFeedAlt1Security
}

type GetFeedAlt1Response struct {
	ContentType string
	StatusCode  int64
	Activity31s []shared.Activity31
}
