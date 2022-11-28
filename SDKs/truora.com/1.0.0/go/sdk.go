package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var ServerList = []string{
	"https://api.truora.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
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

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
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

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// CreatePdf - Create PDF
// Creates a PDF containing the background check results.
func (s *SDK) CreatePdf(ctx context.Context, request operations.CreatePdfRequest) (*operations.CreatePdfResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/checks/{check_id}/pdf", request.PathParams)

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

	res := &operations.CreatePdfResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DeleteCustomType - Delete Custom Type
// Allows deleting a custom type. Person, vehicle, and company types cannot be deleted
func (s *SDK) DeleteCustomType(ctx context.Context, request operations.DeleteCustomTypeRequest) (*operations.DeleteCustomTypeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/config"

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteCustomTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetV1ContinuousChecksContinuousCheckIDHistory - Lists background check logs. It can be paginated
func (s *SDK) GetV1ContinuousChecksContinuousCheckIDHistory(ctx context.Context, request operations.GetV1ContinuousChecksContinuousCheckIDHistoryRequest) (*operations.GetV1ContinuousChecksContinuousCheckIDHistoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/continuous-checks/{continuous_check_id}/history", request.PathParams)

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

	res := &operations.GetV1ContinuousChecksContinuousCheckIDHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetContiuousCheckHistoryOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetContiuousCheckHistoryOutput = out
		}
	}

	return res, nil
}

// GetContinuousCheck - Lists history associated with a Check. It can be paginated
func (s *SDK) GetContinuousCheck(ctx context.Context, request operations.GetContinuousCheckRequest) (*operations.GetContinuousCheckResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/continuous-checks/{continuous_check_id}", request.PathParams)

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

	res := &operations.GetContinuousCheckResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContinuousCheck
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContinuousCheck = out
		}
	}

	return res, nil
}

// GetHealthDashboard - Get Health Dashboard
// Get the status of a database
func (s *SDK) GetHealthDashboard(ctx context.Context, request operations.GetHealthDashboardRequest) (*operations.GetHealthDashboardResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/checks/health"

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

	res := &operations.GetHealthDashboardResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Database
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Databases = out
		}
	}

	return res, nil
}

// ListContinuousChecks - Lists all continuous checks
func (s *SDK) ListContinuousChecks(ctx context.Context) (*operations.ListContinuousChecksResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/continuous-checks"

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

	res := &operations.ListContinuousChecksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListContinuousChecksOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListContinuousChecksOutput = out
		}
	}

	return res, nil
}

// UpdateContinuousCheck - Updates a continuous check
func (s *SDK) UpdateContinuousCheck(ctx context.Context, request operations.UpdateContinuousCheckRequest) (*operations.UpdateContinuousCheckResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/continuous-checks/{continuous_check_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateContinuousCheckResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContinuousCheck
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContinuousCheck = out
		}
	}

	return res, nil
}

// UpdateCustomType - Update Custom Type
// Allows updating a custom type. Person, vehicle, and company types are not modifiable
func (s *SDK) UpdateCustomType(ctx context.Context, request operations.UpdateCustomTypeRequest) (*operations.UpdateCustomTypeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/config"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateCustomTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// BatchUpload - Batch Upload
// Upload multiple checks and associate them to the report. The inputs for these checks must be sent in an xlsx file, please use the following templates:
//
// **Person:** [Chile](https://app.truora.com/files/person/person-input-cl.xlsx), [Colombia](https://app.truora.com/files/person/person-input-co.xlsx), [Mexico](https://app.truora.com/files/person/person-input-mx.xlsx), [Peru](https://app.truora.com/files/person/person-input-pe.xlsx), [Costa Rica](https://app.truora.com/files/person/person-input-cr.xlsx), [Brazil](https://app.truora.com/files/person/person-input-br.xlsx)
//
// **Vehicle:** [Chile](https://app.truora.com/files/vehicle/vehicle-input-cl.xlsx), [Colombia](https://app.truora.com/files/vehicle/vehicle-input-co.xlsx), [Mexico](https://app.truora.com/files/vehicle/vehicle-input-mx.xlsx), [Peru](https://app.truora.com/files/vehicle/vehicle-input-pe.xlsx)
//
// **Company** [Colombia](https://app.truora.com/files/company/company-input-co.xlsx), [Mexico](https://app.truora.com/files/company/company-input-mx.xlsx), [Brazil](https://app.truora.com/files/company/company-input-br.xlsx)
//
// Keep in mind that we currently do not support batch uploads for custom check types. Background checks created by batch upload are processed with low priority.
func (s *SDK) BatchUpload(ctx context.Context, request operations.BatchUploadRequest) (*operations.BatchUploadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/reports/{report_id}/upload", request.PathParams)

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.BatchUploadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ReportOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportOutput = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateCheck - Create a background check
// Creates a background check and queues it to start collecting information. The full details of background checks can be retrieved with their respective Check IDs using getCheck endpoint. Keep in mind that, depending on the check type, input document, and country of a search, certain inputs are required. You should always provide as many inputs as possible in order to get the highest accuracy.
//
// If your check type is not referenced in the following table, please reach out to find out the fields that apply for you.
//
// | Country | Person-National | PersonForeigner | Company | Vehicle-National | Vehicle-Foreigner |
// |:-------:|:---------------:|:---------------:|:-------:|:----------------:|:-----------------:|
// | Chile<br>CL | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>date_of_birth*<br>phone_number<br>first_name*<br>last_name*<br>native_country* | N/A | national_id*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) | foreign_id*<br>first_name*<br>last_name*<br>date_of_birth*<br>native_country*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) |
// | Colombia<br>CO | national_id*<br>date_of_birth<br>issue_date<br>phone_number | foreign_id* or PEP*<br>date_of_birth<br>phone_number<br>issue_date* | tax_id*<br>national_id | national_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>owner_document_type<br>owner_document_id | foreign_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>issue_date* |
// | Mexico<br>MX | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate*<br>national_id<br>vehicle_id<br>driver_license(Estado de Mexico only) | N/A |
// | Brazil<br>BR | national_id*<br>date_of_birth*<br>region*<br>phone_number | N/A | tax_id* | license_plate* | N/A |
// | Costa Rica<br>CR | national_id*<br>phone_number | foreign_id* | N/A | license_plate* | N/A |
// | Ecuador<br>EC | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate* | N/A |
// | Peru<br>PE | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>ptp<br>date_of_birth*<br>phone_number | N/A | national_id*<br>date_of_birth<br>license_plate* | foreign_id*<br>ptp<br>date_of_birth*<br>license_plate* |
// | Argentina<br>AR | national_id* | N/A | N/A | national_id* | N/A |
// | International<br>ALL | name* | name* | company_name* | N/A | N/A |
//
// (*) Required field
func (s *SDK) CreateCheck(ctx context.Context, request operations.CreateCheckRequest) (*operations.CreateCheckResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/checks"

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

	res := &operations.CreateCheckResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CheckOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CheckOutput = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateContinuousCheck - Creates a continuous check that will run background checks recurrently according to the frequency provided.
func (s *SDK) CreateContinuousCheck(ctx context.Context, request operations.CreateContinuousCheckRequest) (*operations.CreateContinuousCheckResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/continuous-checks"

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateContinuousCheckResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ContinuousCheck
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ContinuousCheck = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// CreateHook - Creates a hook subscription
// Creates a hook subscription to notify events in Truora plataform. Subscriptions broadcast data as events occur and additional subscription instances are not required in order to refresh the information. Events are received in an array as a JWT and are decoded using the signing key returned by this endpoint. Their structure is as follows:
//
// ```
//
//	{
//	    "events": [
//	        {
//	            "event_action": "created",
//	            "event_type": "check",
//	            "id": "HKEdd28c569cf5eb74e45f0f4c092096e62c1c95ba2",
//	            "object": {
//	                "check_id": "CHK9c39003424c521aec8566ce59e1ddc86",
//	                "country": "CO",
//	                "creation_date": "2020-04-01T23:00:30.581232281Z",
//	                "homonym_score": 0,
//	                "id_score": 0,
//	                "national_id": "1151959906",
//	                "previous_check": "CHK4ec814fecd147eaae41027081d7d5caf",
//	                "score": -1,
//	                "status": "not_started",
//	                "type": "person",
//	                "update_date": "2020-04-01T23:00:30.680937413Z"
//	            },
//	            "timestamp": "2020-04-01T23:00:30Z",
//	            "version": "1.0"
//	        }
//	    ],
//	    "iat": 1585782031,
//	    "iss": "Truora"
//	}
//
// ```
//
// Keep in mind that the object attribute varies depending on the event_type.
func (s *SDK) CreateHook(ctx context.Context, request operations.CreateHookRequest) (*operations.CreateHookResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/hooks"

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateHookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Hook
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Hook = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// CreateReport - Create Report
// Creates a Report to which it is possible to associate multiple Checks.
func (s *SDK) CreateReport(ctx context.Context, request operations.CreateReportRequest) (*operations.CreateReportResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/reports"

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ReportOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportOutput = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ReportOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportOutput = out
		}
	}

	return res, nil
}

// CreateScoreConfig - Create Score Configurations
// Create a custom score configuration selecting the weight for each background check dataset and the country where it applies. Weights are numbers between 0 and 1 that represent how impactful the dataset is for the score. Keep in mind that the sum of all weights must equal 1.
func (s *SDK) CreateScoreConfig(ctx context.Context, request operations.CreateScoreConfigRequest) (*operations.CreateScoreConfigResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/config"

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateScoreConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScoreConfigOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScoreConfigOutput = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// DeletHook - Deletes hook
// Deletes hook configuration.
func (s *SDK) DeletHook(ctx context.Context, request operations.DeletHookRequest) (*operations.DeletHookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/hooks/{hook_id}", request.PathParams)

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

	res := &operations.DeletHookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.DeletHook200ApplicationJSONString = &out
		}
	}

	return res, nil
}

// GetCheck - Get Background Check
// Returns the results of the check that matches the ID provided, complete with a set of scores explained below.
//
// ### Scores:
//
// - **Global Score**: Average risk associated with a person, company or vehicle, according to  the background check results. The global score considers results that are validated with the  ID number provided. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
//
// - **ID Score**: Average risk associated with a person according to the background check  results. The ID score considers the results that are validated with a person identity  document. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
//
// - **Homonym Score**: Average risk associated with a person according to the background check  results. The homonym score considers results that are validated against the name of a person and could not be validated with their ID number. These results might have homonyms associated with them. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.
//
// In order to calculate these scores, a weighted average is considered with different weights allocated to each dataset. Scores can be customized using the config endpoints by assigning a weight to each dataset according to its relevance.
//
// Keep in mind that results from the API vary depending on the country, check type and the inputs entered on check creation.
func (s *SDK) GetCheck(ctx context.Context, request operations.GetCheckRequest) (*operations.GetCheckResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/checks/{check_id}", request.PathParams)

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

	res := &operations.GetCheckResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CheckOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CheckOutput = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetPdf - Get PDF
// Downloads the PDF in the specified language, Spanish by default.
func (s *SDK) GetPdf(ctx context.Context, request operations.GetPdfRequest) (*operations.GetPdfResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/checks/{check_id}/pdf", request.PathParams)

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

	res := &operations.GetPdfResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetReport - Get Report
// Returns a report with the given ID.
func (s *SDK) GetReport(ctx context.Context, request operations.GetReportRequest) (*operations.GetReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/reports/{report_id}", request.PathParams)

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

	res := &operations.GetReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ReportOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportOutput = out
		}
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// ListCheckDetails - List Check Details
// Lists all details associated with a Check. It can be paginated.
func (s *SDK) ListCheckDetails(ctx context.Context, request operations.ListCheckDetailsRequest) (*operations.ListCheckDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/checks/{check_id}/details", request.PathParams)

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

	res := &operations.ListCheckDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CheckDetailsOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CheckDetailsOutput = out
		}
	}

	return res, nil
}

// ListChecks - List Checks
// Lists the existing checks in the account or in a specified report.
func (s *SDK) ListChecks(ctx context.Context, request operations.ListChecksRequest) (*operations.ListChecksResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/checks"

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

	res := &operations.ListChecksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ChecksOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ChecksOutput = out
		}
	}

	return res, nil
}

// ListHook - Lists all hooks
// Lists all the configured hooks in your account.
func (s *SDK) ListHook(ctx context.Context, request operations.ListHookRequest) (*operations.ListHookResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/hooks"

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

	res := &operations.ListHookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HookOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HookOutput = out
		}
	}

	return res, nil
}

// ListReports - List Reports
// Lists all reports asociated with the client or user requesting.
func (s *SDK) ListReports(ctx context.Context, request operations.ListReportsRequest) (*operations.ListReportsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/reports"

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

	res := &operations.ListReportsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ReportsOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReportsOutput = out
		}
	}

	return res, nil
}

// ListScoreConfigs - List Score Configurations
// Lists the custom score configurations of the associated account.
func (s *SDK) ListScoreConfigs(ctx context.Context, request operations.ListScoreConfigsRequest) (*operations.ListScoreConfigsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/config"

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

	res := &operations.ListScoreConfigsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScoreConfigsOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScoreConfigsOutput = out
		}
	}

	return res, nil
}

// ReportBehavior - Report Behavior
// Creates a behavior item to report employee conducts that do not or might not be included in their background check. This report includes both possitive and negative behaviors and sorts them by severity.
//
// ### Reasons to report a person
//
// <table>
//
//	<tr>
//	  <td style="width: 100px"><center><b>Very High</b><br>(Score: 1)</td>
//	  <td>Rape, Drug Dealing, Sexual Harassment</td>
//	</tr>
//	<tr>
//	  <td><center><b>High</b><br>(Score: 0.8)</td>
//	  <td>Theft, Fights, Aggressive Behaviour, Identity Fraud, Drunk, Drug Possession</td>
//	</tr>
//	<tr>
//	  <td><center><b>Medium</b><br>(Score: 0.6)</td>
//	  <td>Absences</td>
//	</tr>
//	<tr>
//	  <td><center><b>Low</b><br>(Score: 0.4)</td>
//	  <td>Tardiness, Confidentiality Breach</td>
//	</tr>
//	<tr>
//	  <td><center><b>None</b><br>(Score: 0)</td>
//	  <td>Good Reputation</td>
//	</tr>
//	<tr>
//	  <td><center><b>Unknown</b></td>
//	  <td>No information</td>
//	</tr>
//
// </table>
//
// **NOTE:** If the reason of your report is not here, please contact Truora support team.
func (s *SDK) ReportBehavior(ctx context.Context, request operations.ReportBehaviorRequest) (*operations.ReportBehaviorResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/behavior"

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReportBehaviorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BehaviourOutput
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BehaviourOutput = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Errors = out
		}
	}

	return res, nil
}

// UpdateHook - Updates hook
// Updates a hook configuration.
func (s *SDK) UpdateHook(ctx context.Context, request operations.UpdateHookRequest) (*operations.UpdateHookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/hooks/{hook_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateHookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/x-www-form-urlencoded`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}
