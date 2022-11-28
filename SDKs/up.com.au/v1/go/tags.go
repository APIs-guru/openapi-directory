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

type Tags struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTags(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Tags {
	return &Tags{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteTransactionsTransactionIDRelationshipsTags - Remove tags from transaction
// Disassociates one or more tags from a specific transaction. Tags that are
// not associated are silently ignored. An HTTP `204` is returned on
// success. The associated tags, along with this request URL, are also
// exposed via the `tags` relationship on the transaction resource returned
// from `/transactions/{id}`.
func (s *Tags) DeleteTransactionsTransactionIDRelationshipsTags(ctx context.Context, request operations.DeleteTransactionsTransactionIDRelationshipsTagsRequest) (*operations.DeleteTransactionsTransactionIDRelationshipsTagsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/transactions/{transactionId}/relationships/tags", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteTransactionsTransactionIDRelationshipsTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetTags - List tags
// Retrieve a list of all tags currently in use. The returned list is
// [paginated](#pagination) and can be scrolled by following the `next`
// and `prev` links where present. Results are ordered lexicographically.
// The `transactions` relationship for each tag exposes a link
// to get the transactions with the given tag.
func (s *Tags) GetTags(ctx context.Context, request operations.GetTagsRequest) (*operations.GetTagsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/tags"

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

	res := &operations.GetTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListTagsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListTagsResponse = out
		}
	}

	return res, nil
}

// PostTransactionsTransactionIDRelationshipsTags - Add tags to transaction
// Associates one or more tags with a specific transaction. No more than 6
// tags may be present on any single transaction. Duplicate tags are
// silently ignored. An HTTP `204` is returned on success. The associated
// tags, along with this request URL, are also exposed via the `tags`
// relationship on the transaction resource returned from
// `/transactions/{id}`.
func (s *Tags) PostTransactionsTransactionIDRelationshipsTags(ctx context.Context, request operations.PostTransactionsTransactionIDRelationshipsTagsRequest) (*operations.PostTransactionsTransactionIDRelationshipsTagsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/transactions/{transactionId}/relationships/tags", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostTransactionsTransactionIDRelationshipsTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}
