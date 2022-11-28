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

type Webhooks struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewWebhooks(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Webhooks {
	return &Webhooks{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteWebhooksID - Delete webhook
// Delete a specific webhook by providing its unique identifier. Once
// deleted, webhook events will no longer be sent to the configured URL.
func (s *Webhooks) DeleteWebhooksID(ctx context.Context, request operations.DeleteWebhooksIDRequest) (*operations.DeleteWebhooksIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/webhooks/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteWebhooksIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetWebhooks - List webhooks
// Retrieve a list of configured webhooks. The returned list is
// [paginated](#pagination) and can be scrolled by following the `next`
// and `prev` links where present. Results are ordered oldest first to
// newest last.
func (s *Webhooks) GetWebhooks(ctx context.Context, request operations.GetWebhooksRequest) (*operations.GetWebhooksResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/webhooks"

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

	res := &operations.GetWebhooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListWebhooksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListWebhooksResponse = out
		}
	}

	return res, nil
}

// GetWebhooksID - Retrieve webhook
// Retrieve a specific webhook by providing its unique identifier.
func (s *Webhooks) GetWebhooksID(ctx context.Context, request operations.GetWebhooksIDRequest) (*operations.GetWebhooksIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/webhooks/{id}", request.PathParams)

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

	res := &operations.GetWebhooksIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetWebhookResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetWebhookResponse = out
		}
	}

	return res, nil
}

// GetWebhooksWebhookIDLogs - List webhook logs
// Retrieve a list of delivery logs for a webhook by providing its unique
// identifier. This is useful for analysis and debugging purposes. The
// returned list is [paginated](#pagination) and can be scrolled by
// following the `next` and `prev` links where present. Results are ordered
// newest first to oldest last. Logs may be automatically purged after a
// period of time.
func (s *Webhooks) GetWebhooksWebhookIDLogs(ctx context.Context, request operations.GetWebhooksWebhookIDLogsRequest) (*operations.GetWebhooksWebhookIDLogsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/webhooks/{webhookId}/logs", request.PathParams)

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

	res := &operations.GetWebhooksWebhookIDLogsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListWebhookDeliveryLogsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListWebhookDeliveryLogsResponse = out
		}
	}

	return res, nil
}

// PostWebhooksWebhookIDPing - Ping webhook
// Send a `PING` event to a webhook by providing its unique identifier.
// This is useful for testing and debugging purposes. The event is delivered
// asynchronously and its data is returned in the response to this request.
func (s *Webhooks) PostWebhooksWebhookIDPing(ctx context.Context, request operations.PostWebhooksWebhookIDPingRequest) (*operations.PostWebhooksWebhookIDPingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/webhooks/{webhookId}/ping", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostWebhooksWebhookIDPingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.WebhookEventCallback
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookEventCallback = out
		}
	}

	return res, nil
}
