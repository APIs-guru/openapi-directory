package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutUsersIDRequestBody struct {
	AlwaysShowBaseCurrency *bool   `json:"always_show_base_currency,omitempty"`
	BaseCurrencyCode       *string `json:"base_currency_code,omitempty"`
	BetaUser               *bool   `json:"beta_user,omitempty"`
	Email                  *string `json:"email,omitempty"`
	Name                   *string `json:"name,omitempty"`
	TimeZone               *string `json:"time_zone,omitempty"`
	WeekStartDay           *int64  `json:"week_start_day,omitempty"`
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
