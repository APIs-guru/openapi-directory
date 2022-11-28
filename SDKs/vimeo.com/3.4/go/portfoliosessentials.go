package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type PortfoliosEssentials struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPortfoliosEssentials(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PortfoliosEssentials {
	return &PortfoliosEssentials{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetPortfolio - Get a specific portfolio
func (s *PortfoliosEssentials) GetPortfolio(ctx context.Context, request operations.GetPortfolioRequest) (*operations.GetPortfolioResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/portfolios/{portfolio_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPortfolioResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.portfolio+json`):
			var out *shared.Portfolio
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Portfolio = out
		}
	}

	return res, nil
}

// GetPortfolioAlt1 - Get a specific portfolio
func (s *PortfoliosEssentials) GetPortfolioAlt1(ctx context.Context, request operations.GetPortfolioAlt1Request) (*operations.GetPortfolioAlt1Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/me/portfolios/{portfolio_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPortfolioAlt1Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.portfolio+json`):
			var out *shared.Portfolio
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Portfolio = out
		}
	}

	return res, nil
}

// GetPortfolios - Get all the portfolios that belong to a user
func (s *PortfoliosEssentials) GetPortfolios(ctx context.Context, request operations.GetPortfoliosRequest) (*operations.GetPortfoliosResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/portfolios", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPortfoliosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.portfolio+json`):
			var out []shared.Portfolio
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Portfolios = out
		}
	}

	return res, nil
}

// GetPortfoliosAlt1 - Get all the portfolios that belong to a user
func (s *PortfoliosEssentials) GetPortfoliosAlt1(ctx context.Context, request operations.GetPortfoliosAlt1Request) (*operations.GetPortfoliosAlt1Response, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/portfolios"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPortfoliosAlt1Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.portfolio+json`):
			var out []shared.Portfolio
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Portfolios = out
		}
	}

	return res, nil
}
