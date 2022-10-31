package operations

import (
"openapi/pkg/models/shared")

type GetChannelSubscriptionsPathParams struct {
    UserID float64 `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type GetChannelSubscriptionsDirectionEnum string

const (
    GetChannelSubscriptionsDirectionEnumAsc GetChannelSubscriptionsDirectionEnum = "asc"
GetChannelSubscriptionsDirectionEnumDesc GetChannelSubscriptionsDirectionEnum = "desc"
)



type GetChannelSubscriptionsFilterEnum string

const (
    GetChannelSubscriptionsFilterEnumModerated GetChannelSubscriptionsFilterEnum = "moderated"
)



type GetChannelSubscriptionsSortEnum string

const (
    GetChannelSubscriptionsSortEnumAlphabetical GetChannelSubscriptionsSortEnum = "alphabetical"
GetChannelSubscriptionsSortEnumDate GetChannelSubscriptionsSortEnum = "date"
GetChannelSubscriptionsSortEnumFollowers GetChannelSubscriptionsSortEnum = "followers"
GetChannelSubscriptionsSortEnumVideos GetChannelSubscriptionsSortEnum = "videos"
)


type GetChannelSubscriptionsQueryParams struct {
    Direction *GetChannelSubscriptionsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
    Filter *GetChannelSubscriptionsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Sort *GetChannelSubscriptionsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetChannelSubscriptionsRequest struct {
    PathParams GetChannelSubscriptionsPathParams 
    QueryParams GetChannelSubscriptionsQueryParams 
    
}

type GetChannelSubscriptionsResponse struct {
    ContentType string 
    StatusCode int64 
    Channels []shared.Channel 
    
}

