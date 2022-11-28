package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type List struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewList(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *List {
	return &List{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDistrictEvents - Gets a list of events in the given district.
func (s *List) GetDistrictEvents(ctx context.Context, request operations.GetDistrictEventsRequest) (*operations.GetDistrictEventsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/district/{district_key}/events", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDistrictEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetDistrictEventsKeys - Gets a list of event keys for events in the given district.
func (s *List) GetDistrictEventsKeys(ctx context.Context, request operations.GetDistrictEventsKeysRequest) (*operations.GetDistrictEventsKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/district/{district_key}/events/keys", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDistrictEventsKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDistrictEventsKeys200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetDistrictEventsSimple - Gets a short-form list of events in the given district.
func (s *List) GetDistrictEventsSimple(ctx context.Context, request operations.GetDistrictEventsSimpleRequest) (*operations.GetDistrictEventsSimpleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/district/{district_key}/events/simple", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDistrictEventsSimpleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.EventSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventSimples = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetDistrictRankings - Gets a list of team district rankings for the given district.
func (s *List) GetDistrictRankings(ctx context.Context, request operations.GetDistrictRankingsRequest) (*operations.GetDistrictRankingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/district/{district_key}/rankings", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDistrictRankingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.DistrictRanking
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DistrictRankings = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetDistrictTeams - Gets a list of `Team` objects that competed in events in the given district.
func (s *List) GetDistrictTeams(ctx context.Context, request operations.GetDistrictTeamsRequest) (*operations.GetDistrictTeamsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/district/{district_key}/teams", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDistrictTeamsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Team
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Teams = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetDistrictTeamsKeys - Gets a list of `Team` objects that competed in events in the given district.
func (s *List) GetDistrictTeamsKeys(ctx context.Context, request operations.GetDistrictTeamsKeysRequest) (*operations.GetDistrictTeamsKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/district/{district_key}/teams/keys", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDistrictTeamsKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetDistrictTeamsKeys200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetDistrictTeamsSimple - Gets a short-form list of `Team` objects that competed in events in the given district.
func (s *List) GetDistrictTeamsSimple(ctx context.Context, request operations.GetDistrictTeamsSimpleRequest) (*operations.GetDistrictTeamsSimpleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/district/{district_key}/teams/simple", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDistrictTeamsSimpleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TeamSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamSimples = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetEventTeams - Gets a list of `Team` objects that competed in the given event.
func (s *List) GetEventTeams(ctx context.Context, request operations.GetEventTeamsRequest) (*operations.GetEventTeamsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/event/{event_key}/teams", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEventTeamsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Team
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Teams = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetEventTeamsKeys - Gets a list of `Team` keys that competed in the given event.
func (s *List) GetEventTeamsKeys(ctx context.Context, request operations.GetEventTeamsKeysRequest) (*operations.GetEventTeamsKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/event/{event_key}/teams/keys", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEventTeamsKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetEventTeamsKeys200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetEventTeamsSimple - Gets a short-form list of `Team` objects that competed in the given event.
func (s *List) GetEventTeamsSimple(ctx context.Context, request operations.GetEventTeamsSimpleRequest) (*operations.GetEventTeamsSimpleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/event/{event_key}/teams/simple", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEventTeamsSimpleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TeamSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamSimples = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetEventTeamsStatuses - Gets a key-value list of the event statuses for teams competing at the given event.
func (s *List) GetEventTeamsStatuses(ctx context.Context, request operations.GetEventTeamsStatusesRequest) (*operations.GetEventTeamsStatusesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/event/{event_key}/teams/statuses", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEventTeamsStatusesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]shared.TeamEventStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetEventTeamsStatuses200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetEventsByYear - Gets a list of events in the given year.
func (s *List) GetEventsByYear(ctx context.Context, request operations.GetEventsByYearRequest) (*operations.GetEventsByYearResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/events/{year}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEventsByYearResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Event
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Events = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetEventsByYearKeys - Gets a list of event keys in the given year.
func (s *List) GetEventsByYearKeys(ctx context.Context, request operations.GetEventsByYearKeysRequest) (*operations.GetEventsByYearKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/events/{year}/keys", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEventsByYearKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetEventsByYearKeys200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetEventsByYearSimple - Gets a short-form list of events in the given year.
func (s *List) GetEventsByYearSimple(ctx context.Context, request operations.GetEventsByYearSimpleRequest) (*operations.GetEventsByYearSimpleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/events/{year}/simple", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEventsByYearSimpleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.EventSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EventSimples = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetTeamEventsStatusesByYear - Gets a key-value list of the event statuses for events this team has competed at in the given year.
func (s *List) GetTeamEventsStatusesByYear(ctx context.Context, request operations.GetTeamEventsStatusesByYearRequest) (*operations.GetTeamEventsStatusesByYearResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/team/{team_key}/events/{year}/statuses", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamEventsStatusesByYearResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]shared.TeamEventStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTeamEventsStatusesByYear200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetTeams - Gets a list of `Team` objects, paginated in groups of 500.
func (s *List) GetTeams(ctx context.Context, request operations.GetTeamsRequest) (*operations.GetTeamsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{page_num}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Team
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Teams = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetTeamsByYear - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
func (s *List) GetTeamsByYear(ctx context.Context, request operations.GetTeamsByYearRequest) (*operations.GetTeamsByYearResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{year}/{page_num}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsByYearResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Team
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Teams = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetTeamsByYearKeys - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
func (s *List) GetTeamsByYearKeys(ctx context.Context, request operations.GetTeamsByYearKeysRequest) (*operations.GetTeamsByYearKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{year}/{page_num}/keys", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsByYearKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTeamsByYearKeys200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetTeamsByYearSimple - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
func (s *List) GetTeamsByYearSimple(ctx context.Context, request operations.GetTeamsByYearSimpleRequest) (*operations.GetTeamsByYearSimpleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{year}/{page_num}/simple", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsByYearSimpleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TeamSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamSimples = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetTeamsKeys - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
func (s *List) GetTeamsKeys(ctx context.Context, request operations.GetTeamsKeysRequest) (*operations.GetTeamsKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{page_num}/keys", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTeamsKeys200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetTeamsSimple - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.
func (s *List) GetTeamsSimple(ctx context.Context, request operations.GetTeamsSimpleRequest) (*operations.GetTeamsSimpleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{page_num}/simple", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsSimpleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TeamSimple
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TeamSimples = out
		}
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}
