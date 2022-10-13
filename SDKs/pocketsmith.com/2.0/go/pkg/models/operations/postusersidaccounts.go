package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersIDAccountsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostUsersIDAccountsRequestBodyTypeEnum string

const (
	PostUsersIDAccountsRequestBodyTypeEnumBank           PostUsersIDAccountsRequestBodyTypeEnum = "bank"
	PostUsersIDAccountsRequestBodyTypeEnumCredits        PostUsersIDAccountsRequestBodyTypeEnum = "credits"
	PostUsersIDAccountsRequestBodyTypeEnumLoans          PostUsersIDAccountsRequestBodyTypeEnum = "loans"
	PostUsersIDAccountsRequestBodyTypeEnumMortgage       PostUsersIDAccountsRequestBodyTypeEnum = "mortgage"
	PostUsersIDAccountsRequestBodyTypeEnumStocks         PostUsersIDAccountsRequestBodyTypeEnum = "stocks"
	PostUsersIDAccountsRequestBodyTypeEnumVehicle        PostUsersIDAccountsRequestBodyTypeEnum = "vehicle"
	PostUsersIDAccountsRequestBodyTypeEnumProperty       PostUsersIDAccountsRequestBodyTypeEnum = "property"
	PostUsersIDAccountsRequestBodyTypeEnumOtherAsset     PostUsersIDAccountsRequestBodyTypeEnum = "other_asset"
	PostUsersIDAccountsRequestBodyTypeEnumOtherLiability PostUsersIDAccountsRequestBodyTypeEnum = "other_liability"
)

type PostUsersIDAccountsRequestBody struct {
	CurrencyCode  string                                 `json:"currency_code"`
	InstitutionID int64                                  `json:"institution_id"`
	Title         string                                 `json:"title"`
	Type          PostUsersIDAccountsRequestBodyTypeEnum `json:"type"`
}

type PostUsersIDAccountsRequest struct {
	PathParams PostUsersIDAccountsPathParams
	Request    *PostUsersIDAccountsRequestBody `request:"mediaType=application/json"`
}

type PostUsersIDAccountsResponse struct {
	Account     *shared.Account
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
