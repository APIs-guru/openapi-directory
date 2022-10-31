package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMyFollowsCategoriesCategorySubcategoryPathParams struct {
	Category    string `pathParam:"style=simple,explode=false,name=category"`
	Subcategory string `pathParam:"style=simple,explode=false,name=subcategory"`
}

type DeleteMyFollowsCategoriesCategorySubcategorySecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteMyFollowsCategoriesCategorySubcategoryRequest struct {
	PathParams DeleteMyFollowsCategoriesCategorySubcategoryPathParams
	Security   DeleteMyFollowsCategoriesCategorySubcategorySecurity
}

type DeleteMyFollowsCategoriesCategorySubcategoryResponse struct {
	ContentType string
	StatusCode  int64
}
