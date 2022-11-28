package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type VbaDocuments struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewVbaDocuments(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *VbaDocuments {
	return &VbaDocuments{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetBenefitsDocumentUploadDownload - Download zip of "what the server sees"
// An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.
func (s *VbaDocuments) GetBenefitsDocumentUploadDownload(ctx context.Context, request operations.GetBenefitsDocumentUploadDownloadRequest) (*operations.GetBenefitsDocumentUploadDownloadResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/uploads/{id}/download", request.PathParams)

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

	res := &operations.GetBenefitsDocumentUploadDownloadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/zip`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.GetBenefitsDocumentUploadDownload200ApplicationZipBinaryString = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadDownload401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadDownload401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadDownload403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadDownload403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadDownload404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadDownload404ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadDownload429ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadDownload429ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadDownload500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadDownload500ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetBenefitsDocumentUploadStatus - Get status for a previous benefits document upload
func (s *VbaDocuments) GetBenefitsDocumentUploadStatus(ctx context.Context, request operations.GetBenefitsDocumentUploadStatusRequest) (*operations.GetBenefitsDocumentUploadStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/uploads/{id}", request.PathParams)

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

	res := &operations.GetBenefitsDocumentUploadStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatus200ApplicationJSONAny = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatus401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatus401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatus403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatus403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatus404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatus404ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatus429ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatus429ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatus500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatus500ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetBenefitsDocumentUploadStatusReport - Get a bulk status report for a list of previous uploads
func (s *VbaDocuments) GetBenefitsDocumentUploadStatusReport(ctx context.Context, request operations.GetBenefitsDocumentUploadStatusReportRequest) (*operations.GetBenefitsDocumentUploadStatusReportResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/uploads/report"

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

	res := &operations.GetBenefitsDocumentUploadStatusReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatusReport200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatusReport200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatusReport401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatusReport401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatusReport403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatusReport403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatusReport422ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatusReport422ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatusReport429ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatusReport429ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBenefitsDocumentUploadStatusReport500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetBenefitsDocumentUploadStatusReport500ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostBenefitsDocumentUpload - Get a location for subsequent document upload PUT request
func (s *VbaDocuments) PostBenefitsDocumentUpload(ctx context.Context, request operations.PostBenefitsDocumentUploadRequest) (*operations.PostBenefitsDocumentUploadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/uploads"

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

	res := &operations.PostBenefitsDocumentUploadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostBenefitsDocumentUpload202ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostBenefitsDocumentUpload202ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostBenefitsDocumentUpload401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostBenefitsDocumentUpload401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostBenefitsDocumentUpload403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostBenefitsDocumentUpload403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostBenefitsDocumentUpload422ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostBenefitsDocumentUpload422ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostBenefitsDocumentUpload429ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostBenefitsDocumentUpload429ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostBenefitsDocumentUpload500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostBenefitsDocumentUpload500ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PutBenefitsDocumentUpload - Accepts document upload.
// Accepts document metadata, document binary, and attachment binaries.Full URL, including
// query parameters, provided from POST `/document_uploads`.
//
// ## Example Payload
//
// The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
// endpoint. Most programming languages should have provisions for assembling a multipart
// payload like this without having to do so manually.
//
// ```
// --17de1ed8f01442b2a2d7a93506314b76
// Content-Disposition: form-data; name="metadata"
// Content-Type: application/json
//
// {"veteranFirstName": "Jane",
// "veteranLastName": "Doe",
// "fileNumber": "012345678",
// "zipCode": "97202",
// "source": "MyVSO",
// "docType": "21-22"
// "businessLine": "CMP"}
// --17de1ed8f01442b2a2d7a93506314b76
// Content-Disposition: form-data; name="content"
// Content-Type: application/pdf
//
// <Binary PDF contents>
// --17de1ed8f01442b2a2d7a93506314b76
// Content-Disposition: form-data; name="attachment1"
// Content-Type: application/pdf
//
// <Binary PDF attachment contents>
// --17de1ed8f01442b2a2d7a93506314b76--
// ```
//
// This PUT request would have an overall HTTP Content-Type header:
//
// ```
// Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
// ```
//
// Note that the Content-Disposition parameter "name" in each part must be the expected values
// "metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named
// exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
// are invalid.
//
// This is an example curl command:
//
// ```
// curl -v -L -X PUT '<Location from \uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
// ```
func (s *VbaDocuments) PutBenefitsDocumentUpload(ctx context.Context, request operations.PutBenefitsDocumentUploadRequest) (*operations.PutBenefitsDocumentUploadResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/path"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutBenefitsDocumentUploadResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutBenefitsDocumentUpload401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutBenefitsDocumentUpload401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutBenefitsDocumentUpload422ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutBenefitsDocumentUpload422ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutBenefitsDocumentUpload429ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutBenefitsDocumentUpload429ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutBenefitsDocumentUpload500ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutBenefitsDocumentUpload500ApplicationJSONObject = out
		}
	}

	return res, nil
}
