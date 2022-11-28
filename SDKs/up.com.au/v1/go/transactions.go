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

type Transactions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTransactions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Transactions {
	return &Transactions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetAccountsAccountIDTransactions - List transactions by account
// Retrieve a list of all transactions for a specific account. The returned
// list is [paginated](#pagination) and can be scrolled by following the
// `next` and `prev` links where present. To narrow the results to a
// specific date range pass one or both of `filter[since]` and
// `filter[until]` in the query string. These filter parameters
// **should not** be used for pagination. Results are ordered newest first
// to oldest last.
func (s *Transactions) GetAccountsAccountIDTransactions(ctx context.Context, request operations.GetAccountsAccountIDTransactionsRequest) (*operations.GetAccountsAccountIDTransactionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/transactions", request.PathParams)

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

	res := &operations.GetAccountsAccountIDTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListTransactionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListTransactionsResponse = out
		}
	}

	return res, nil
}

// GetTransactions - List transactions
// Retrieve a list of all transactions across all accounts for the currently
// authenticated user. The returned list is [paginated](#pagination) and can
// be scrolled by following the `next` and `prev` links where present. To
// narrow the results to a specific date range pass one or both of
// `filter[since]` and `filter[until]` in the query string. These filter
// parameters **should not** be used for pagination. Results are ordered
// newest first to oldest last.
func (s *Transactions) GetTransactions(ctx context.Context, request operations.GetTransactionsRequest) (*operations.GetTransactionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/transactions"

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

	res := &operations.GetTransactionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListTransactionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListTransactionsResponse = out
		}
	}

	return res, nil
}

// GetTransactionsID - Retrieve transaction
// Retrieve a specific transaction by providing its unique identifier.
func (s *Transactions) GetTransactionsID(ctx context.Context, request operations.GetTransactionsIDRequest) (*operations.GetTransactionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/transactions/{id}", request.PathParams)

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

	res := &operations.GetTransactionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetTransactionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTransactionResponse = out
		}
	}

	return res, nil
}
