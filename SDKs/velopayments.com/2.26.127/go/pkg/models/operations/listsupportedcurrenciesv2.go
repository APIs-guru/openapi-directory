package operations

import (
	"openapi/pkg/models/shared"
)

type ListSupportedCurrenciesV2Response struct {
	ContentType                 string
	StatusCode                  int64
	SupportedCurrencyResponseV2 *shared.SupportedCurrencyResponseV2
}
