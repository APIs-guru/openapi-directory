package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersIDCategoryRulesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersIDCategoryRulesRequest struct {
	PathParams GetUsersIDCategoryRulesPathParams
}

type GetUsersIDCategoryRulesResponse struct {
	CategoryRules []shared.CategoryRule
	ContentType   string
	Error         *shared.Error
	StatusCode    int64
}
