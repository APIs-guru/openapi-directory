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

type PatientManagementController struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPatientManagementController(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PatientManagementController {
	return &PatientManagementController{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetPatientManagement - getPatientManagement
// getPatientManagement
func (s *PatientManagementController) GetPatientManagement(ctx context.Context, request operations.GetPatientManagementRequest) (*operations.GetPatientManagementResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPatientManagementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PatientManagement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatientManagement = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetPatientManagementDiagnoses - getPatientManagementDiagnoses
// getPatientManagementDiagnoses
func (s *PatientManagementController) GetPatientManagementDiagnoses(ctx context.Context) (*operations.GetPatientManagementDiagnosesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/patientmanagement/diagnoses"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPatientManagementDiagnosesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Code
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Codes = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetPatientManagementLookupTypes - getPatientManagementLookupTypes
// getPatientManagementLookupTypes
func (s *PatientManagementController) GetPatientManagementLookupTypes(ctx context.Context) (*operations.GetPatientManagementLookupTypesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/patientmanagement/lookuptypes"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPatientManagementLookupTypesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.LookupType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LookupTypes = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// SavePatientManagement - savePatientManagement
// savePatientManagement
func (s *PatientManagementController) SavePatientManagement(ctx context.Context, request operations.SavePatientManagementRequest) (*operations.SavePatientManagementResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SavePatientManagementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 201:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// SavePatientManagementSurgeries - savePatientManagementSurgeries
// savePatientManagementSurgeries
func (s *PatientManagementController) SavePatientManagementSurgeries(ctx context.Context, request operations.SavePatientManagementSurgeriesRequest) (*operations.SavePatientManagementSurgeriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/patientmanagement/{userId}/group/{groupId}/identifier/{identifierId}/surgeries", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SavePatientManagementSurgeriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 201:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// ValidatePatientManagement - validatePatientManagement
// validatePatientManagement
func (s *PatientManagementController) ValidatePatientManagement(ctx context.Context, request operations.ValidatePatientManagementRequest) (*operations.ValidatePatientManagementResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/patientmanagement/validate"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ValidatePatientManagementResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 201:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
