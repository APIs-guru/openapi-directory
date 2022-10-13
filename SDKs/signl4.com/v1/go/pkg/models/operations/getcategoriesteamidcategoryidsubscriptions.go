package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoriesTeamIDCategoryIDSubscriptionsPathParams struct {
	CategoryID string `pathParam:"style=simple,explode=false,name=categoryId"`
	TeamID     string `pathParam:"style=simple,explode=false,name=teamId"`
}

type GetCategoriesTeamIDCategoryIDSubscriptionsRequest struct {
	PathParams GetCategoriesTeamIDCategoryIDSubscriptionsPathParams
}

type GetCategoriesTeamIDCategoryIDSubscriptionsResponse struct {
	Body                      []byte
	CategorySubscriptionInfos []shared.CategorySubscriptionInfo
	ContentType               string
	ErrorResponseContent      *shared.ErrorResponseContent
	StatusCode                int64
}
