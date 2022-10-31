package operations

import (
	"openapi/pkg/models/shared"
)

type PostMyFollowsCategoriesCategorySubcategoryPathParams struct {
	Category    string `pathParam:"style=simple,explode=false,name=category"`
	Subcategory string `pathParam:"style=simple,explode=false,name=subcategory"`
}

type PostMyFollowsCategoriesCategorySubcategorySecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostMyFollowsCategoriesCategorySubcategoryRequest struct {
	PathParams PostMyFollowsCategoriesCategorySubcategoryPathParams
	Security   PostMyFollowsCategoriesCategorySubcategorySecurity
}

type PostMyFollowsCategoriesCategorySubcategoryResponse struct {
	ContentType string
	StatusCode  int64
}
