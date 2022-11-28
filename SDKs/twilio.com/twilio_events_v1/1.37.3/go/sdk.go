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
	"https://events.twilio.com",
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

// CreateSink - Create a new Sink
func (s *SDK) CreateSink(ctx context.Context, request operations.CreateSinkRequest) (*operations.CreateSinkResponse, error) {
	baseURL := operations.CreateSinkServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v1/Sinks"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateSinkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1Sink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1Sink = out
		}
	}

	return res, nil
}

// CreateSinkTest - Create a new Sink Test Event for the given Sink.
func (s *SDK) CreateSinkTest(ctx context.Context, request operations.CreateSinkTestRequest) (*operations.CreateSinkTestResponse, error) {
	baseURL := operations.CreateSinkTestServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Sinks/{Sid}/Test", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateSinkTestResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1SinkSinkTest
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1SinkSinkTest = out
		}
	}

	return res, nil
}

// CreateSinkValidate - Validate that a test event for a Sink was received.
func (s *SDK) CreateSinkValidate(ctx context.Context, request operations.CreateSinkValidateRequest) (*operations.CreateSinkValidateResponse, error) {
	baseURL := operations.CreateSinkValidateServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Sinks/{Sid}/Validate", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateSinkValidateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1SinkSinkValidate
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1SinkSinkValidate = out
		}
	}

	return res, nil
}

// CreateSubscribedEvent - Create a new Subscribed Event type for the subscription
func (s *SDK) CreateSubscribedEvent(ctx context.Context, request operations.CreateSubscribedEventRequest) (*operations.CreateSubscribedEventResponse, error) {
	baseURL := operations.CreateSubscribedEventServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateSubscribedEventResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1SubscriptionSubscribedEvent
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1SubscriptionSubscribedEvent = out
		}
	}

	return res, nil
}

// CreateSubscription - Create a new Subscription.
func (s *SDK) CreateSubscription(ctx context.Context, request operations.CreateSubscriptionRequest) (*operations.CreateSubscriptionResponse, error) {
	baseURL := operations.CreateSubscriptionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v1/Subscriptions"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1Subscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1Subscription = out
		}
	}

	return res, nil
}

// DeleteSink - Delete a specific Sink.
func (s *SDK) DeleteSink(ctx context.Context, request operations.DeleteSinkRequest) (*operations.DeleteSinkResponse, error) {
	baseURL := operations.DeleteSinkServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Sinks/{Sid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSinkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteSubscribedEvent - Remove an event type from a subscription.
func (s *SDK) DeleteSubscribedEvent(ctx context.Context, request operations.DeleteSubscribedEventRequest) (*operations.DeleteSubscribedEventResponse, error) {
	baseURL := operations.DeleteSubscribedEventServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSubscribedEventResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteSubscription - Delete a specific Subscription.
func (s *SDK) DeleteSubscription(ctx context.Context, request operations.DeleteSubscriptionRequest) (*operations.DeleteSubscriptionResponse, error) {
	baseURL := operations.DeleteSubscriptionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Subscriptions/{Sid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// FetchEventType - Fetch a specific Event Type.
func (s *SDK) FetchEventType(ctx context.Context, request operations.FetchEventTypeRequest) (*operations.FetchEventTypeResponse, error) {
	baseURL := operations.FetchEventTypeServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Types/{Type}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FetchEventTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1EventType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1EventType = out
		}
	}

	return res, nil
}

// FetchSchema - Fetch a specific schema with its nested versions.
func (s *SDK) FetchSchema(ctx context.Context, request operations.FetchSchemaRequest) (*operations.FetchSchemaResponse, error) {
	baseURL := operations.FetchSchemaServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Schemas/{Id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FetchSchemaResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1Schema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1Schema = out
		}
	}

	return res, nil
}

// FetchSchemaVersion - Fetch a specific schema and version.
func (s *SDK) FetchSchemaVersion(ctx context.Context, request operations.FetchSchemaVersionRequest) (*operations.FetchSchemaVersionResponse, error) {
	baseURL := operations.FetchSchemaVersionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Schemas/{Id}/Versions/{SchemaVersion}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FetchSchemaVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1SchemaSchemaVersion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1SchemaSchemaVersion = out
		}
	}

	return res, nil
}

// FetchSink - Fetch a specific Sink.
func (s *SDK) FetchSink(ctx context.Context, request operations.FetchSinkRequest) (*operations.FetchSinkResponse, error) {
	baseURL := operations.FetchSinkServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Sinks/{Sid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FetchSinkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1Sink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1Sink = out
		}
	}

	return res, nil
}

// FetchSubscribedEvent - Read an Event for a Subscription.
func (s *SDK) FetchSubscribedEvent(ctx context.Context, request operations.FetchSubscribedEventRequest) (*operations.FetchSubscribedEventResponse, error) {
	baseURL := operations.FetchSubscribedEventServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FetchSubscribedEventResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1SubscriptionSubscribedEvent
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1SubscriptionSubscribedEvent = out
		}
	}

	return res, nil
}

// FetchSubscription - Fetch a specific Subscription.
func (s *SDK) FetchSubscription(ctx context.Context, request operations.FetchSubscriptionRequest) (*operations.FetchSubscriptionResponse, error) {
	baseURL := operations.FetchSubscriptionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Subscriptions/{Sid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.FetchSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1Subscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1Subscription = out
		}
	}

	return res, nil
}

// ListEventType - Retrieve a paginated list of all the available Event Types.
func (s *SDK) ListEventType(ctx context.Context, request operations.ListEventTypeRequest) (*operations.ListEventTypeResponse, error) {
	baseURL := operations.ListEventTypeServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v1/Types"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListEventTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListEventTypeListEventTypeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListEventTypeResponse = out
		}
	}

	return res, nil
}

// ListSchemaVersion - Retrieve a paginated list of versions of the schema.
func (s *SDK) ListSchemaVersion(ctx context.Context, request operations.ListSchemaVersionRequest) (*operations.ListSchemaVersionResponse, error) {
	baseURL := operations.ListSchemaVersionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Schemas/{Id}/Versions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListSchemaVersionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListSchemaVersionListSchemaVersionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListSchemaVersionResponse = out
		}
	}

	return res, nil
}

// ListSink - Retrieve a paginated list of Sinks belonging to the account used to make the request.
func (s *SDK) ListSink(ctx context.Context, request operations.ListSinkRequest) (*operations.ListSinkResponse, error) {
	baseURL := operations.ListSinkServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v1/Sinks"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListSinkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListSinkListSinkResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListSinkResponse = out
		}
	}

	return res, nil
}

// ListSubscribedEvent - Retrieve a list of all Subscribed Event types for a Subscription.
func (s *SDK) ListSubscribedEvent(ctx context.Context, request operations.ListSubscribedEventRequest) (*operations.ListSubscribedEventResponse, error) {
	baseURL := operations.ListSubscribedEventServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListSubscribedEventResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListSubscribedEventListSubscribedEventResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListSubscribedEventResponse = out
		}
	}

	return res, nil
}

// ListSubscription - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
func (s *SDK) ListSubscription(ctx context.Context, request operations.ListSubscriptionRequest) (*operations.ListSubscriptionResponse, error) {
	baseURL := operations.ListSubscriptionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v1/Subscriptions"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListSubscriptionListSubscriptionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListSubscriptionResponse = out
		}
	}

	return res, nil
}

// UpdateSink - Update a specific Sink
func (s *SDK) UpdateSink(ctx context.Context, request operations.UpdateSinkRequest) (*operations.UpdateSinkResponse, error) {
	baseURL := operations.UpdateSinkServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Sinks/{Sid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateSinkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1Sink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1Sink = out
		}
	}

	return res, nil
}

// UpdateSubscribedEvent - Update an Event for a Subscription.
func (s *SDK) UpdateSubscribedEvent(ctx context.Context, request operations.UpdateSubscribedEventRequest) (*operations.UpdateSubscribedEventResponse, error) {
	baseURL := operations.UpdateSubscribedEventServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateSubscribedEventResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1SubscriptionSubscribedEvent
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1SubscriptionSubscribedEvent = out
		}
	}

	return res, nil
}

// UpdateSubscription - Update a Subscription.
func (s *SDK) UpdateSubscription(ctx context.Context, request operations.UpdateSubscriptionRequest) (*operations.UpdateSubscriptionResponse, error) {
	baseURL := operations.UpdateSubscriptionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Subscriptions/{Sid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateSubscriptionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EventsV1Subscription
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventsV1Subscription = out
		}
	}

	return res, nil
}
