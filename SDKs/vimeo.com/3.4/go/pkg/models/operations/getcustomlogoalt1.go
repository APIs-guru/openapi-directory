package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomLogoAlt1PathParams struct {
	LogoID float64 `pathParam:"style=simple,explode=false,name=logo_id"`
}

type GetCustomLogoAlt1Request struct {
	PathParams GetCustomLogoAlt1PathParams
}

type GetCustomLogoAlt1Response struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Picture     *shared.Picture
}
