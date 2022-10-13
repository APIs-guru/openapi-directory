package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeedPathParams struct {
	UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetFeedTypeEnum string

const (
	GetFeedTypeEnumAppears          GetFeedTypeEnum = "appears"
	GetFeedTypeEnumCategoryFeatured GetFeedTypeEnum = "category_featured"
	GetFeedTypeEnumChannel          GetFeedTypeEnum = "channel"
	GetFeedTypeEnumFacebookFeed     GetFeedTypeEnum = "facebook_feed"
	GetFeedTypeEnumFollowing        GetFeedTypeEnum = "following"
	GetFeedTypeEnumGroup            GetFeedTypeEnum = "group"
	GetFeedTypeEnumLikes            GetFeedTypeEnum = "likes"
	GetFeedTypeEnumOndemandPublish  GetFeedTypeEnum = "ondemand_publish"
	GetFeedTypeEnumShare            GetFeedTypeEnum = "share"
	GetFeedTypeEnumTaggedWith       GetFeedTypeEnum = "tagged_with"
	GetFeedTypeEnumTwitterTimeline  GetFeedTypeEnum = "twitter_timeline"
	GetFeedTypeEnumUploads          GetFeedTypeEnum = "uploads"
)

type GetFeedQueryParams struct {
	Offset  *string          `queryParam:"style=form,explode=true,name=offset"`
	Page    *float64         `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64         `queryParam:"style=form,explode=true,name=per_page"`
	Type    *GetFeedTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetFeedSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetFeedRequest struct {
	PathParams  GetFeedPathParams
	QueryParams GetFeedQueryParams
	Security    GetFeedSecurity
}

type GetFeedResponse struct {
	ContentType string
	StatusCode  int64
	Activity31s []shared.Activity31
}
