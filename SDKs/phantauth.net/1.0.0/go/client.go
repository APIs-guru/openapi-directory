package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Client struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewClient(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Client {
	return &Client{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetClientClientID - Get a Client
// Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.
// In the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.
// In lack of a client ID, all calls generate a different client object to the randomly generated client ID.
//
// By providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.
//
// If the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`
//
// The result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.
// The members of a fleet are clients randomly generated from the fleet name.
func (s *Client) GetClientClientID(ctx context.Context, request operations.GetClientClientIDRequest) (*operations.GetClientClientIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/client/{client_id}", request.PathParams)

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

	res := &operations.GetClientClientIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetClientClientID200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetClientClientID200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetClientClientIDTokenKind - Get a Client Token
// It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.
//
// It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.
func (s *Client) GetClientClientIDTokenKind(ctx context.Context, request operations.GetClientClientIDTokenKindRequest) (*operations.GetClientClientIDTokenKindResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/client/{client_id}/token/{kind}", request.PathParams)

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

	res := &operations.GetClientClientIDTokenKindResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostClient - Create a Client Selfie
// To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
// Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
// By the use of a selfie token, you can use your own client objects in the authentication process.
func (s *Client) PostClient(ctx context.Context, request operations.PostClientRequest) (*operations.PostClientResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/client"

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

	res := &operations.PostClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
