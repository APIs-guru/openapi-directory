package operations

import (
"openapi/pkg/models/shared")

type PostCategoriesTeamIDCategoryIDSubscriptionsPathParams struct {
    CategoryID string `pathParam:"style=simple,explode=false,name=categoryId"`
    TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
    
}

type PostCategoriesTeamIDCategoryIDSubscriptionsRequests struct {
    CategorySubscriptionInfos []shared.CategorySubscriptionInfo `request:"mediaType=application/*+json"`
    CategorySubscriptionInfos1 []shared.CategorySubscriptionInfo `request:"mediaType=application/json"`
    CategorySubscriptionInfos2 []shared.CategorySubscriptionInfo `request:"mediaType=application/json-patch+json"`
    CategorySubscriptionInfos3 []shared.CategorySubscriptionInfo `request:"mediaType=text/json"`
    
}

type PostCategoriesTeamIDCategoryIDSubscriptionsRequest struct {
    PathParams PostCategoriesTeamIDCategoryIDSubscriptionsPathParams 
    Request *PostCategoriesTeamIDCategoryIDSubscriptionsRequests 
    
}

type PostCategoriesTeamIDCategoryIDSubscriptionsResponse struct {
    Body []byte 
    CategorySubscriptionInfos []shared.CategorySubscriptionInfo 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    
}

