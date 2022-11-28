package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Team struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTeam(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Team {
	return &Team{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetTeamTeamname - Get a Team
// Use this endpoint to generate a random group of users. The team is generated in a deterministic way, on the basis of the team name given as the path parameter.
// In the case of identical team names, the endpoint will generate the same team object. The properties of the generated team object are randomly generated on the basis of the team name.
// In lack of a team name, all calls generate a different team object to the randomly generated team name.
func (s *Team) GetTeamTeamname(ctx context.Context, request operations.GetTeamTeamnameRequest) (*operations.GetTeamTeamnameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/team/{teamname}", request.PathParams)

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

	res := &operations.GetTeamTeamnameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTeamTeamname200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTeamTeamname200ApplicationJSONObject = out
		}
	}

	return res, nil
}
