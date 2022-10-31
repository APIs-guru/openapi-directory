package operations

import (
	"openapi/pkg/models/shared"
)

type ListSupportedCountriesV2Response struct {
	ContentType                  string
	StatusCode                   int64
	SupportedCountriesResponseV2 *shared.SupportedCountriesResponseV2
}
