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

type Facilities struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFacilities(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Facilities {
	return &Facilities{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetAllFacilities - Bulk download information for all facilities
// Retrieve all available facilities in a single operation, formatted as either a GeoJSON FeatureCollection or as a CSV. Due to the complexity of the facility resource type, the CSV response contains a subset of available facility data - specifically it omits the available services, patient satisfaction, and patient wait time data.
func (s *Facilities) GetAllFacilities(ctx context.Context, request operations.GetAllFacilitiesRequest) (*operations.GetAllFacilitiesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/facilities/all"

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

	res := &operations.GetAllFacilitiesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/geo+json`):
			var out *shared.GeoFacilitiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeoFacilitiesResponse = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GeoFacilitiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeoFacilitiesResponse = out
		case utils.MatchContentType(contentType, `application/vnd.geo+json`):
			var out *shared.GeoFacilitiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeoFacilitiesResponse = out
		case utils.MatchContentType(contentType, `text/csv`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			out := string(data)
			res.GetAllFacilities200TextCsvString = &out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	}

	return res, nil
}

// GetFacilitiesByLocation - Query facilities by location or IDs, with optional filters
// Query facilities by bounding box, latitude and longitude, state, visn, or zip code. Bounding box is specified as four `bbox[]` parameters, long1, lat1, long2, lat2. (Relative order is unimportant.)
//
// A query by latitude and longitude returns all facilities in the system, sorted by distance from that location.
//
// All location queries support filtering by facility type, available services, and mobile status.
//
// One can also retrieve facilities by ID using a comma-separated list like `?ids=id1,id2`. When requesting multiple facilities by ID, the API will return as many results as it can find matches for, omitting IDs where there is no match. It will not return an HTTP error code if it is unable to match a requested ID. Clients may supply IDs up to the limit their HTTP client enforces for URI path lengths. (Usually 2048 characters.)
//
// Results are paginated. JSON responses include pagination information in the standard JSON API "links" and "meta" elements.
//
// ### Parameter combinations
// You may optionally specify `page` and `per_page` with any query. You must specify one of the following parameter combinations:
//
// - `bbox[]`, with the option of any combination of `type`, `services[]`, or `mobile`
//
// - `ids`
//
// - `lat` and `long`, with the option of any combination of `ids`, `type`, `services[]`, or `mobile`
//
// - `state`, with the option of any combination of `type`, `services[]`, or `mobile`
//
// - `visn`
//
// - `zip`, with the option of any combination of `type`, `services[]`, or `mobile`
//
//	Invalid combinations will return `400 Bad Request`.
func (s *Facilities) GetFacilitiesByLocation(ctx context.Context, request operations.GetFacilitiesByLocationRequest) (*operations.GetFacilitiesByLocationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/facilities"

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

	res := &operations.GetFacilitiesByLocationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/geo+json`):
			var out *shared.GeoFacilitiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeoFacilitiesResponse = out
		case utils.MatchContentType(contentType, `application/vnd.geo+json`):
			var out *shared.GeoFacilitiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeoFacilitiesResponse = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FacilitiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FacilitiesResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	}

	return res, nil
}

// GetFacilityByID - Retrieve a specific facility by ID
func (s *Facilities) GetFacilityByID(ctx context.Context, request operations.GetFacilityByIDRequest) (*operations.GetFacilityByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/facilities/{id}", request.PathParams)

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

	res := &operations.GetFacilityByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/geo+json`):
			var out *shared.GeoFacilityReadResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeoFacilityReadResponse = out
		case utils.MatchContentType(contentType, `application/vnd.geo+json`):
			var out *shared.GeoFacilityReadResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeoFacilityReadResponse = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FacilityReadResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FacilityReadResponse = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	}

	return res, nil
}

// GetFacilityIds - Bulk download of all facility IDs
// Retrieves all available facility IDs only
func (s *Facilities) GetFacilityIds(ctx context.Context, request operations.GetFacilityIdsRequest) (*operations.GetFacilityIdsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/ids"

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

	res := &operations.GetFacilityIdsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FacilitiesIdsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FacilitiesIdsResponse = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	}

	return res, nil
}

// GetNearbyFacilities - Retrieve all VA health facilities reachable by driving within the specified time period
// Retrieve all VA health facilities that are located within a specified drive time from a specified location based on address (`street_address`, `city`, `state`, and `zip`) or coordinates (`lat` and `lng`). Optional filter parameters include `drive_time` and `services[]`.
//
// Results of this operation are paginated. Responses include pagination information in the standard JSON API "links" and "meta" elements.
//
// The "attributes" element has information about the drive-time band that contains the requested location for each facility in the response. The values of `min_time` and `max_time` are in minutes. For example, a facility returned with a matched `min_time` of 10 and `max_time` of 20 is a 10 to 20 minute drive from the requested location.
//
// To retrieve full details for nearby facilities, see the documentation for `/facilities?ids`.
func (s *Facilities) GetNearbyFacilities(ctx context.Context, request operations.GetNearbyFacilitiesRequest) (*operations.GetNearbyFacilitiesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/nearby"

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

	res := &operations.GetNearbyFacilitiesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.NearbyResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NearbyResponse = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericError = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	}

	return res, nil
}
