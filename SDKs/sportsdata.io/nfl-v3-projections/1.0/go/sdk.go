package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

var ServerList = []string{
	"http://api.sportsdata.io",
	"https://api.sportsdata.io",
	"http://azure-api.sportsdata.io",
	"https://azure-api.sportsdata.io",
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

// DfsSlatesByDate - DFS Slates by Date
func (s *SDK) DfsSlatesByDate(ctx context.Context, request operations.DfsSlatesByDateRequest) (*operations.DfsSlatesByDateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/DfsSlatesByDate/{date}", request.PathParams)

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

	res := &operations.DfsSlatesByDateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DfsSlates = out
		}
	}

	return res, nil
}

// DfsSlatesByWeek - DFS Slates by Week
func (s *SDK) DfsSlatesByWeek(ctx context.Context, request operations.DfsSlatesByWeekRequest) (*operations.DfsSlatesByWeekResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/DfsSlatesByWeek/{season}/{week}", request.PathParams)

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

	res := &operations.DfsSlatesByWeekResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DfsSlates = out
		}
	}

	return res, nil
}

// IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
func (s *SDK) IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(ctx context.Context, request operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest) (*operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", request.PathParams)

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

	res := &operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse{
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

			res.PlayerGameProjection = out
		}
	}

	return res, nil
}

// IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
func (s *SDK) IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(ctx context.Context, request operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest) (*operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}", request.PathParams)

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

	res := &operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PlayerGameProjections = out
		}
	}

	return res, nil
}

// IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
func (s *SDK) IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(ctx context.Context, request operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest) (*operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}", request.PathParams)

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

	res := &operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PlayerGameProjections = out
		}
	}

	return res, nil
}

// ProjectedFantasyDefenseGameStatsWDfsSalaries - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
func (s *SDK) ProjectedFantasyDefenseGameStatsWDfsSalaries(ctx context.Context, request operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest) (*operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/FantasyDefenseProjectionsByGame/{season}/{week}", request.PathParams)

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

	res := &operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FantasyDefenseGameProjections = out
		}
	}

	return res, nil
}

// ProjectedFantasyDefenseSeasonStatsWByeWeekAdp - Projected Fantasy Defense Season Stats (w/ Bye Week, ADP)
func (s *SDK) ProjectedFantasyDefenseSeasonStatsWByeWeekAdp(ctx context.Context, request operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest) (*operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/FantasyDefenseProjectionsBySeason/{season}", request.PathParams)

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

	res := &operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FantasyDefenseSeasonProjections = out
		}
	}

	return res, nil
}

// ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
func (s *SDK) ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(ctx context.Context, request operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest) (*operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", request.PathParams)

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

	res := &operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse{
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

			res.PlayerGameProjection = out
		}
	}

	return res, nil
}

// ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
func (s *SDK) ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(ctx context.Context, request operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest) (*operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}", request.PathParams)

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

	res := &operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PlayerGameProjections = out
		}
	}

	return res, nil
}

// ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
func (s *SDK) ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(ctx context.Context, request operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest) (*operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}", request.PathParams)

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

	res := &operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PlayerGameProjections = out
		}
	}

	return res, nil
}

// ProjectedPlayerSeasonStatsByPlayerWByeWeekAdp - Projected Player Season Stats by Player (w/ Bye Week, ADP)
func (s *SDK) ProjectedPlayerSeasonStatsByPlayerWByeWeekAdp(ctx context.Context, request operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest) (*operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}", request.PathParams)

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

	res := &operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse{
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

			res.PlayerSeasonProjection = out
		}
	}

	return res, nil
}

// ProjectedPlayerSeasonStatsByTeamWByeWeekAdp - Projected Player Season Stats by Team (w/ Bye Week, ADP)
func (s *SDK) ProjectedPlayerSeasonStatsByTeamWByeWeekAdp(ctx context.Context, request operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest) (*operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}", request.PathParams)

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

	res := &operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PlayerSeasonProjections = out
		}
	}

	return res, nil
}

// ProjectedPlayerSeasonStatsWByeWeekAdp - Projected Player Season Stats (w/ Bye Week, ADP)
func (s *SDK) ProjectedPlayerSeasonStatsWByeWeekAdp(ctx context.Context, request operations.ProjectedPlayerSeasonStatsWByeWeekAdpRequest) (*operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{format}/PlayerSeasonProjectionStats/{season}", request.PathParams)

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

	res := &operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PlayerSeasonProjections = out
		}
	}

	return res, nil
}
