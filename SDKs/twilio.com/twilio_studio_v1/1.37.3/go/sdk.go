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
	"https://studio.twilio.com",
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

// CreateEngagement - Triggers a new Engagement for the Flow
func (s *SDK) CreateEngagement(ctx context.Context, request operations.CreateEngagementRequest) (*operations.CreateEngagementResponse, error) {
	baseURL := operations.CreateEngagementServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Engagements", request.PathParams)

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

	res := &operations.CreateEngagementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowEngagement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowEngagement = out
		}
	}

	return res, nil
}

// CreateExecution - Triggers a new Execution for the Flow
func (s *SDK) CreateExecution(ctx context.Context, request operations.CreateExecutionRequest) (*operations.CreateExecutionResponse, error) {
	baseURL := operations.CreateExecutionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Executions", request.PathParams)

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

	res := &operations.CreateExecutionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowExecution
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowExecution = out
		}
	}

	return res, nil
}

// DeleteEngagement - Delete this Engagement and all Steps relating to it.
func (s *SDK) DeleteEngagement(ctx context.Context, request operations.DeleteEngagementRequest) (*operations.DeleteEngagementResponse, error) {
	baseURL := operations.DeleteEngagementServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Engagements/{Sid}", request.PathParams)

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

	res := &operations.DeleteEngagementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteExecution - Delete the Execution and all Steps relating to it.
func (s *SDK) DeleteExecution(ctx context.Context, request operations.DeleteExecutionRequest) (*operations.DeleteExecutionResponse, error) {
	baseURL := operations.DeleteExecutionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Executions/{Sid}", request.PathParams)

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

	res := &operations.DeleteExecutionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteFlow - Delete a specific Flow.
func (s *SDK) DeleteFlow(ctx context.Context, request operations.DeleteFlowRequest) (*operations.DeleteFlowResponse, error) {
	baseURL := operations.DeleteFlowServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{Sid}", request.PathParams)

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

	res := &operations.DeleteFlowResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// FetchEngagement - Retrieve an Engagement
func (s *SDK) FetchEngagement(ctx context.Context, request operations.FetchEngagementRequest) (*operations.FetchEngagementResponse, error) {
	baseURL := operations.FetchEngagementServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Engagements/{Sid}", request.PathParams)

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

	res := &operations.FetchEngagementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowEngagement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowEngagement = out
		}
	}

	return res, nil
}

// FetchEngagementContext - Retrieve the most recent context for an Engagement.
func (s *SDK) FetchEngagementContext(ctx context.Context, request operations.FetchEngagementContextRequest) (*operations.FetchEngagementContextResponse, error) {
	baseURL := operations.FetchEngagementContextServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context", request.PathParams)

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

	res := &operations.FetchEngagementContextResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowEngagementEngagementContext
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowEngagementEngagementContext = out
		}
	}

	return res, nil
}

// FetchExecution - Retrieve an Execution
func (s *SDK) FetchExecution(ctx context.Context, request operations.FetchExecutionRequest) (*operations.FetchExecutionResponse, error) {
	baseURL := operations.FetchExecutionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Executions/{Sid}", request.PathParams)

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

	res := &operations.FetchExecutionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowExecution
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowExecution = out
		}
	}

	return res, nil
}

// FetchExecutionContext - Retrieve the most recent context for an Execution.
func (s *SDK) FetchExecutionContext(ctx context.Context, request operations.FetchExecutionContextRequest) (*operations.FetchExecutionContextResponse, error) {
	baseURL := operations.FetchExecutionContextServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Context", request.PathParams)

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

	res := &operations.FetchExecutionContextResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowExecutionExecutionContext
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowExecutionExecutionContext = out
		}
	}

	return res, nil
}

// FetchExecutionStep - Retrieve a Step.
func (s *SDK) FetchExecutionStep(ctx context.Context, request operations.FetchExecutionStepRequest) (*operations.FetchExecutionStepResponse, error) {
	baseURL := operations.FetchExecutionStepServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}", request.PathParams)

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

	res := &operations.FetchExecutionStepResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowExecutionExecutionStep
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowExecutionExecutionStep = out
		}
	}

	return res, nil
}

// FetchExecutionStepContext - Retrieve the context for an Execution Step.
func (s *SDK) FetchExecutionStepContext(ctx context.Context, request operations.FetchExecutionStepContextRequest) (*operations.FetchExecutionStepContextResponse, error) {
	baseURL := operations.FetchExecutionStepContextServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context", request.PathParams)

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

	res := &operations.FetchExecutionStepContextResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowExecutionExecutionStepExecutionStepContext
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowExecutionExecutionStepExecutionStepContext = out
		}
	}

	return res, nil
}

// FetchFlow - Retrieve a specific Flow.
func (s *SDK) FetchFlow(ctx context.Context, request operations.FetchFlowRequest) (*operations.FetchFlowResponse, error) {
	baseURL := operations.FetchFlowServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{Sid}", request.PathParams)

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

	res := &operations.FetchFlowResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1Flow
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1Flow = out
		}
	}

	return res, nil
}

// FetchStep - Retrieve a Step.
func (s *SDK) FetchStep(ctx context.Context, request operations.FetchStepRequest) (*operations.FetchStepResponse, error) {
	baseURL := operations.FetchStepServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{Sid}", request.PathParams)

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

	res := &operations.FetchStepResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowEngagementStep
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowEngagementStep = out
		}
	}

	return res, nil
}

// FetchStepContext - Retrieve the context for an Engagement Step.
func (s *SDK) FetchStepContext(ctx context.Context, request operations.FetchStepContextRequest) (*operations.FetchStepContextResponse, error) {
	baseURL := operations.FetchStepContextServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{StepSid}/Context", request.PathParams)

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

	res := &operations.FetchStepContextResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowEngagementStepStepContext
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowEngagementStepStepContext = out
		}
	}

	return res, nil
}

// ListEngagement - Retrieve a list of all Engagements for the Flow.
func (s *SDK) ListEngagement(ctx context.Context, request operations.ListEngagementRequest) (*operations.ListEngagementResponse, error) {
	baseURL := operations.ListEngagementServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Engagements", request.PathParams)

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

	res := &operations.ListEngagementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListEngagementListEngagementResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListEngagementResponse = out
		}
	}

	return res, nil
}

// ListExecution - Retrieve a list of all Executions for the Flow.
func (s *SDK) ListExecution(ctx context.Context, request operations.ListExecutionRequest) (*operations.ListExecutionResponse, error) {
	baseURL := operations.ListExecutionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Executions", request.PathParams)

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

	res := &operations.ListExecutionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListExecutionListExecutionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListExecutionResponse = out
		}
	}

	return res, nil
}

// ListExecutionStep - Retrieve a list of all Steps for an Execution.
func (s *SDK) ListExecutionStep(ctx context.Context, request operations.ListExecutionStepRequest) (*operations.ListExecutionStepResponse, error) {
	baseURL := operations.ListExecutionStepServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps", request.PathParams)

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

	res := &operations.ListExecutionStepResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListExecutionStepListExecutionStepResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListExecutionStepResponse = out
		}
	}

	return res, nil
}

// ListFlow - Retrieve a list of all Flows.
func (s *SDK) ListFlow(ctx context.Context, request operations.ListFlowRequest) (*operations.ListFlowResponse, error) {
	baseURL := operations.ListFlowServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v1/Flows"

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

	res := &operations.ListFlowResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListFlowListFlowResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListFlowResponse = out
		}
	}

	return res, nil
}

// ListStep - Retrieve a list of all Steps for an Engagement.
func (s *SDK) ListStep(ctx context.Context, request operations.ListStepRequest) (*operations.ListStepResponse, error) {
	baseURL := operations.ListStepServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps", request.PathParams)

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

	res := &operations.ListStepResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListStepListStepResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListStepResponse = out
		}
	}

	return res, nil
}

// UpdateExecution - Update the status of an Execution to `ended`.
func (s *SDK) UpdateExecution(ctx context.Context, request operations.UpdateExecutionRequest) (*operations.UpdateExecutionResponse, error) {
	baseURL := operations.UpdateExecutionServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v1/Flows/{FlowSid}/Executions/{Sid}", request.PathParams)

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

	res := &operations.UpdateExecutionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.StudioV1FlowExecution
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StudioV1FlowExecution = out
		}
	}

	return res, nil
}
