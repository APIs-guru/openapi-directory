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

type Show struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewShow(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Show {
	return &Show{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetShows - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
// **Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
// each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
// Thus scheduled shows have occurences that, for example, may be displayed in a calendar.
//
// In the response, `items` is an array of objects representing occurences of scheduled shows.
//
// You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
// parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
// included in the reponse.
//
// `itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
// {start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
// is included.
//
// If the request omits the {start} parameter, the server sets its value to the current time so that the filter
// range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
// otherwise it is *unbounded*.
//
// For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
// difference between objects in `items` representing a given show will be the `start` field value.
//
// For an unbounded request, `items` includes *only one* occurence per show, specifically, the
// next occurrence after {start} of all shows occuring after {start}.
//
// Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
// of shows expanded into occurrences by thir shedules and repetitions.
//
// Objects in `items` are ordered first by `datetime` and then by `id`.
func (s *Show) GetShows(ctx context.Context, request operations.GetShowsRequest) (*operations.GetShowsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/shows"

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

	res := &operations.GetShowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetShows200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetShows200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetShowsID - Get a Show by id
// The response object represents the next occurence of the show specified by {id}.
//
// Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.
func (s *Show) GetShowsID(ctx context.Context, request operations.GetShowsIDRequest) (*operations.GetShowsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/shows/{id}", request.PathParams)

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

	res := &operations.GetShowsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Show
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Show = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Error
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}
