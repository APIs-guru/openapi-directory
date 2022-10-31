package operations

import (
	"openapi/pkg/models/shared"
)

type GetPortfolioAlt1PathParams struct {
	PortfolioID float64 `pathParam:"style=simple,explode=false,name=portfolio_id"`
}

type GetPortfolioAlt1Request struct {
	PathParams GetPortfolioAlt1PathParams
}

type GetPortfolioAlt1Response struct {
	ContentType string
	StatusCode  int64
	Portfolio   *shared.Portfolio
}
