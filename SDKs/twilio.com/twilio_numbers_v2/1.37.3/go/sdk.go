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
	"https://numbers.twilio.com",
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

// CreateBundle - Create a new Bundle.
func (s *SDK) CreateBundle(ctx context.Context, request operations.CreateBundleRequest) (*operations.CreateBundleResponse, error) {
	baseURL := operations.CreateBundleServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v2/RegulatoryCompliance/Bundles"

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

	res := &operations.CreateBundleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceBundle
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceBundle = out
		}
	}

	return res, nil
}

// CreateBundleCopy - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
func (s *SDK) CreateBundleCopy(ctx context.Context, request operations.CreateBundleCopyRequest) (*operations.CreateBundleCopyResponse, error) {
	baseURL := operations.CreateBundleCopyServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", request.PathParams)

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

	res := &operations.CreateBundleCopyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceBundleBundleCopy
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceBundleBundleCopy = out
		}
	}

	return res, nil
}

// CreateEndUser - Create a new End User.
func (s *SDK) CreateEndUser(ctx context.Context, request operations.CreateEndUserRequest) (*operations.CreateEndUserResponse, error) {
	baseURL := operations.CreateEndUserServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v2/RegulatoryCompliance/EndUsers"

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

	res := &operations.CreateEndUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceEndUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceEndUser = out
		}
	}

	return res, nil
}

// CreateEvaluation - Creates an evaluation for a bundle
func (s *SDK) CreateEvaluation(ctx context.Context, request operations.CreateEvaluationRequest) (*operations.CreateEvaluationResponse, error) {
	baseURL := operations.CreateEvaluationServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", request.PathParams)

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

	res := &operations.CreateEvaluationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceBundleEvaluation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceBundleEvaluation = out
		}
	}

	return res, nil
}

// CreateItemAssignment - Create a new Assigned Item.
func (s *SDK) CreateItemAssignment(ctx context.Context, request operations.CreateItemAssignmentRequest) (*operations.CreateItemAssignmentResponse, error) {
	baseURL := operations.CreateItemAssignmentServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", request.PathParams)

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

	res := &operations.CreateItemAssignmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceBundleItemAssignment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceBundleItemAssignment = out
		}
	}

	return res, nil
}

// CreateReplaceItems - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
func (s *SDK) CreateReplaceItems(ctx context.Context, request operations.CreateReplaceItemsRequest) (*operations.CreateReplaceItemsResponse, error) {
	baseURL := operations.CreateReplaceItemsServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems", request.PathParams)

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

	res := &operations.CreateReplaceItemsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceBundleReplaceItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceBundleReplaceItems = out
		}
	}

	return res, nil
}

// CreateSupportingDocument - Create a new Supporting Document.
func (s *SDK) CreateSupportingDocument(ctx context.Context, request operations.CreateSupportingDocumentRequest) (*operations.CreateSupportingDocumentResponse, error) {
	baseURL := operations.CreateSupportingDocumentServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v2/RegulatoryCompliance/SupportingDocuments"

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

	res := &operations.CreateSupportingDocumentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceSupportingDocument
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceSupportingDocument = out
		}
	}

	return res, nil
}

// DeleteBundle - Delete a specific Bundle.
func (s *SDK) DeleteBundle(ctx context.Context, request operations.DeleteBundleRequest) (*operations.DeleteBundleResponse, error) {
	baseURL := operations.DeleteBundleServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{Sid}", request.PathParams)

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

	res := &operations.DeleteBundleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteEndUser - Delete a specific End User.
func (s *SDK) DeleteEndUser(ctx context.Context, request operations.DeleteEndUserRequest) (*operations.DeleteEndUserResponse, error) {
	baseURL := operations.DeleteEndUserServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/EndUsers/{Sid}", request.PathParams)

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

	res := &operations.DeleteEndUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteItemAssignment - Remove an Assignment Item Instance.
func (s *SDK) DeleteItemAssignment(ctx context.Context, request operations.DeleteItemAssignmentRequest) (*operations.DeleteItemAssignmentResponse, error) {
	baseURL := operations.DeleteItemAssignmentServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", request.PathParams)

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

	res := &operations.DeleteItemAssignmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// DeleteSupportingDocument - Delete a specific Supporting Document.
func (s *SDK) DeleteSupportingDocument(ctx context.Context, request operations.DeleteSupportingDocumentRequest) (*operations.DeleteSupportingDocumentResponse, error) {
	baseURL := operations.DeleteSupportingDocumentServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", request.PathParams)

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

	res := &operations.DeleteSupportingDocumentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// FetchBundle - Fetch a specific Bundle instance.
func (s *SDK) FetchBundle(ctx context.Context, request operations.FetchBundleRequest) (*operations.FetchBundleResponse, error) {
	baseURL := operations.FetchBundleServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{Sid}", request.PathParams)

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

	res := &operations.FetchBundleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceBundle
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceBundle = out
		}
	}

	return res, nil
}

// FetchEndUser - Fetch specific End User Instance.
func (s *SDK) FetchEndUser(ctx context.Context, request operations.FetchEndUserRequest) (*operations.FetchEndUserResponse, error) {
	baseURL := operations.FetchEndUserServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/EndUsers/{Sid}", request.PathParams)

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

	res := &operations.FetchEndUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceEndUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceEndUser = out
		}
	}

	return res, nil
}

// FetchEndUserType - Fetch a specific End-User Type Instance.
func (s *SDK) FetchEndUserType(ctx context.Context, request operations.FetchEndUserTypeRequest) (*operations.FetchEndUserTypeResponse, error) {
	baseURL := operations.FetchEndUserTypeServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/EndUserTypes/{Sid}", request.PathParams)

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

	res := &operations.FetchEndUserTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceEndUserType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceEndUserType = out
		}
	}

	return res, nil
}

// FetchEvaluation - Fetch specific Evaluation Instance.
func (s *SDK) FetchEvaluation(ctx context.Context, request operations.FetchEvaluationRequest) (*operations.FetchEvaluationResponse, error) {
	baseURL := operations.FetchEvaluationServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}", request.PathParams)

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

	res := &operations.FetchEvaluationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceBundleEvaluation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceBundleEvaluation = out
		}
	}

	return res, nil
}

// FetchItemAssignment - Fetch specific Assigned Item Instance.
func (s *SDK) FetchItemAssignment(ctx context.Context, request operations.FetchItemAssignmentRequest) (*operations.FetchItemAssignmentResponse, error) {
	baseURL := operations.FetchItemAssignmentServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", request.PathParams)

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

	res := &operations.FetchItemAssignmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceBundleItemAssignment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceBundleItemAssignment = out
		}
	}

	return res, nil
}

// FetchRegulation - Fetch specific Regulation Instance.
func (s *SDK) FetchRegulation(ctx context.Context, request operations.FetchRegulationRequest) (*operations.FetchRegulationResponse, error) {
	baseURL := operations.FetchRegulationServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Regulations/{Sid}", request.PathParams)

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

	res := &operations.FetchRegulationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceRegulation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceRegulation = out
		}
	}

	return res, nil
}

// FetchSupportingDocument - Fetch specific Supporting Document Instance.
func (s *SDK) FetchSupportingDocument(ctx context.Context, request operations.FetchSupportingDocumentRequest) (*operations.FetchSupportingDocumentResponse, error) {
	baseURL := operations.FetchSupportingDocumentServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", request.PathParams)

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

	res := &operations.FetchSupportingDocumentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceSupportingDocument
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceSupportingDocument = out
		}
	}

	return res, nil
}

// FetchSupportingDocumentType - Fetch a specific Supporting Document Type Instance.
func (s *SDK) FetchSupportingDocumentType(ctx context.Context, request operations.FetchSupportingDocumentTypeRequest) (*operations.FetchSupportingDocumentTypeResponse, error) {
	baseURL := operations.FetchSupportingDocumentTypeServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}", request.PathParams)

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

	res := &operations.FetchSupportingDocumentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceSupportingDocumentType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceSupportingDocumentType = out
		}
	}

	return res, nil
}

// ListBundle - Retrieve a list of all Bundles for an account.
func (s *SDK) ListBundle(ctx context.Context, request operations.ListBundleRequest) (*operations.ListBundleResponse, error) {
	baseURL := operations.ListBundleServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v2/RegulatoryCompliance/Bundles"

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

	res := &operations.ListBundleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListBundleListBundleResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBundleResponse = out
		}
	}

	return res, nil
}

// ListBundleCopy - Retrieve a list of all Bundles Copies for a Bundle.
func (s *SDK) ListBundleCopy(ctx context.Context, request operations.ListBundleCopyRequest) (*operations.ListBundleCopyResponse, error) {
	baseURL := operations.ListBundleCopyServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", request.PathParams)

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

	res := &operations.ListBundleCopyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListBundleCopyListBundleCopyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBundleCopyResponse = out
		}
	}

	return res, nil
}

// ListEndUser - Retrieve a list of all End User for an account.
func (s *SDK) ListEndUser(ctx context.Context, request operations.ListEndUserRequest) (*operations.ListEndUserResponse, error) {
	baseURL := operations.ListEndUserServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v2/RegulatoryCompliance/EndUsers"

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

	res := &operations.ListEndUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListEndUserListEndUserResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListEndUserResponse = out
		}
	}

	return res, nil
}

// ListEndUserType - Retrieve a list of all End-User Types.
func (s *SDK) ListEndUserType(ctx context.Context, request operations.ListEndUserTypeRequest) (*operations.ListEndUserTypeResponse, error) {
	baseURL := operations.ListEndUserTypeServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v2/RegulatoryCompliance/EndUserTypes"

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

	res := &operations.ListEndUserTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListEndUserTypeListEndUserTypeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListEndUserTypeResponse = out
		}
	}

	return res, nil
}

// ListEvaluation - Retrieve a list of Evaluations associated to the Bundle resource.
func (s *SDK) ListEvaluation(ctx context.Context, request operations.ListEvaluationRequest) (*operations.ListEvaluationResponse, error) {
	baseURL := operations.ListEvaluationServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", request.PathParams)

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

	res := &operations.ListEvaluationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListEvaluationListEvaluationResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListEvaluationResponse = out
		}
	}

	return res, nil
}

// ListItemAssignment - Retrieve a list of all Assigned Items for an account.
func (s *SDK) ListItemAssignment(ctx context.Context, request operations.ListItemAssignmentRequest) (*operations.ListItemAssignmentResponse, error) {
	baseURL := operations.ListItemAssignmentServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", request.PathParams)

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

	res := &operations.ListItemAssignmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListItemAssignmentListItemAssignmentResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListItemAssignmentResponse = out
		}
	}

	return res, nil
}

// ListRegulation - Retrieve a list of all Regulations.
func (s *SDK) ListRegulation(ctx context.Context, request operations.ListRegulationRequest) (*operations.ListRegulationResponse, error) {
	baseURL := operations.ListRegulationServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v2/RegulatoryCompliance/Regulations"

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

	res := &operations.ListRegulationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListRegulationListRegulationResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListRegulationResponse = out
		}
	}

	return res, nil
}

// ListSupportingDocument - Retrieve a list of all Supporting Document for an account.
func (s *SDK) ListSupportingDocument(ctx context.Context, request operations.ListSupportingDocumentRequest) (*operations.ListSupportingDocumentResponse, error) {
	baseURL := operations.ListSupportingDocumentServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v2/RegulatoryCompliance/SupportingDocuments"

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

	res := &operations.ListSupportingDocumentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListSupportingDocumentListSupportingDocumentResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListSupportingDocumentResponse = out
		}
	}

	return res, nil
}

// ListSupportingDocumentType - Retrieve a list of all Supporting Document Types.
func (s *SDK) ListSupportingDocumentType(ctx context.Context, request operations.ListSupportingDocumentTypeRequest) (*operations.ListSupportingDocumentTypeResponse, error) {
	baseURL := operations.ListSupportingDocumentTypeServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/v2/RegulatoryCompliance/SupportingDocumentTypes"

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

	res := &operations.ListSupportingDocumentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListSupportingDocumentTypeListSupportingDocumentTypeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListSupportingDocumentTypeResponse = out
		}
	}

	return res, nil
}

// UpdateBundle - Updates a Bundle in an account.
func (s *SDK) UpdateBundle(ctx context.Context, request operations.UpdateBundleRequest) (*operations.UpdateBundleResponse, error) {
	baseURL := operations.UpdateBundleServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/Bundles/{Sid}", request.PathParams)

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

	res := &operations.UpdateBundleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceBundle
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceBundle = out
		}
	}

	return res, nil
}

// UpdateEndUser - Update an existing End User.
func (s *SDK) UpdateEndUser(ctx context.Context, request operations.UpdateEndUserRequest) (*operations.UpdateEndUserResponse, error) {
	baseURL := operations.UpdateEndUserServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/EndUsers/{Sid}", request.PathParams)

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

	res := &operations.UpdateEndUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceEndUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceEndUser = out
		}
	}

	return res, nil
}

// UpdateSupportingDocument - Update an existing Supporting Document.
func (s *SDK) UpdateSupportingDocument(ctx context.Context, request operations.UpdateSupportingDocumentRequest) (*operations.UpdateSupportingDocumentResponse, error) {
	baseURL := operations.UpdateSupportingDocumentServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", request.PathParams)

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

	res := &operations.UpdateSupportingDocumentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NumbersV2RegulatoryComplianceSupportingDocument
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NumbersV2RegulatoryComplianceSupportingDocument = out
		}
	}

	return res, nil
}
