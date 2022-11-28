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

var ServerList = []string{
	"https://api.xero.com/bankfeeds.xro/1.0",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// CreateFeedConnections - Create one or more new feed connection
// By passing in the FeedConnections array object in the body, you can create one or more new feed connections
func (s *SDK) CreateFeedConnections(ctx context.Context, request operations.CreateFeedConnectionsRequest) (*operations.CreateFeedConnectionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/FeedConnections"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateFeedConnectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FeedConnections
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FeedConnections = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateStatements - Creates one or more new statements
func (s *SDK) CreateStatements(ctx context.Context, request operations.CreateStatementsRequest) (*operations.CreateStatementsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/Statements"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateStatementsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Statements
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Statements = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Statements
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Statements = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Statements
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Statements = out
		}
	case httpRes.StatusCode == 413:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Statements
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Statements = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Statements
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Statements = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Statements
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Statements = out
		}
	}

	return res, nil
}

// DeleteFeedConnections - Delete an existing feed connection
// By passing in FeedConnections array object in the body, you can delete a feed connection.
func (s *SDK) DeleteFeedConnections(ctx context.Context, request operations.DeleteFeedConnectionsRequest) (*operations.DeleteFeedConnectionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/FeedConnections/DeleteRequests"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteFeedConnectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FeedConnections
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FeedConnections = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetFeedConnection - Retrieve single feed connection based on a unique id provided
// By passing in a FeedConnection Id options, you can search for matching feed connections
func (s *SDK) GetFeedConnection(ctx context.Context, request operations.GetFeedConnectionRequest) (*operations.GetFeedConnectionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/FeedConnections/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetFeedConnectionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FeedConnection
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FeedConnection = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetFeedConnections - Searches for feed connections
// By passing in the appropriate options, you can search for available feed connections in the system.
func (s *SDK) GetFeedConnections(ctx context.Context, request operations.GetFeedConnectionsRequest) (*operations.GetFeedConnectionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/FeedConnections"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetFeedConnectionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FeedConnections
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FeedConnections = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetStatement - Retrieve single statement based on unique id provided
// By passing in a statement id, you can search for matching statements
func (s *SDK) GetStatement(ctx context.Context, request operations.GetStatementRequest) (*operations.GetStatementResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/Statements/{statementID}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStatementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Statement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Statement = out
		}
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetStatements - Retrieve all statements
// By passing in parameters, you can search for matching statements
func (s *SDK) GetStatements(ctx context.Context, request operations.GetStatementsRequest) (*operations.GetStatementsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/Statements"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStatementsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Statements
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Statements = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *shared.Statements
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Statements = out
		}
	}

	return res, nil
}
