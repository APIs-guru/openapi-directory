package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutUsersIDRequestBody struct {
	AlwaysShowBaseCurrency *bool   `json:"always_show_base_currency"`
	BaseCurrencyCode       *string `json:"base_currency_code"`
	BetaUser               *bool   `json:"beta_user"`
	Email                  *string `json:"email"`
	Name                   *string `json:"name"`
	TimeZone               *string `json:"time_zone"`
	WeekStartDay           *int64  `json:"week_start_day"`
}

type PutUsersIDRequest struct {
	PathParams PutUsersIDPathParams
	Request    *PutUsersIDRequestBody `request:"mediaType=application/json"`
}

type PutUsersIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	User        *shared.User
}
