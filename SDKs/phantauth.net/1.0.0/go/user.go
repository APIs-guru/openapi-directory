package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type User struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUser(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *User {
	return &User{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetUserUsername - Get a User
// Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
// In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
// In lack of a user name, all calls generate a different user object to the randomly generated user name.
//
// By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.
//
// If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
// In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`
//
// The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
// The members of a team are users randomly generated from the team name.
func (s *User) GetUserUsername(ctx context.Context, request operations.GetUserUsernameRequest) (*operations.GetUserUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/{username}", request.PathParams)

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

	res := &operations.GetUserUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetUserUsername200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetUserUsername200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetUserUsernameTokenKind - Get a User Token
// It is used to generate OpenID Connect tokens as path parameters to a user of a given name.
//
// This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
// Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.
func (s *User) GetUserUsernameTokenKind(ctx context.Context, request operations.GetUserUsernameTokenKindRequest) (*operations.GetUserUsernameTokenKindResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/{username}/token/{kind}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserUsernameTokenKindResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostUser - Create a User Selfie
// To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
// Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
// By the use of a selfie token, you can use your own user objects during the authentication process.
//
// Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.
func (s *User) PostUser(ctx context.Context, request operations.PostUserRequest) (*operations.PostUserResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user"

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

	res := &operations.PostUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
