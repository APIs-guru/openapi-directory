package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyFollowsCategoriesCategorySubcategoryPathParams struct {
	Category    string `pathParam:"style=simple,explode=false,name=category"`
	Subcategory string `pathParam:"style=simple,explode=false,name=subcategory"`
}

type GetMyFollowsCategoriesCategorySubcategorySecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyFollowsCategoriesCategorySubcategoryRequest struct {
	PathParams GetMyFollowsCategoriesCategorySubcategoryPathParams
	Security   GetMyFollowsCategoriesCategorySubcategorySecurity
}

type GetMyFollowsCategoriesCategorySubcategoryResponse struct {
	ContentType string
	StatusCode  int64
}
