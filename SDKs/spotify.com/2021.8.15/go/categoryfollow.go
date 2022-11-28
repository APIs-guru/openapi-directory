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

type CategoryFollow struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCategoryFollow(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CategoryFollow {
	return &CategoryFollow{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// EndpointCheckCurrentUserFollows - Get Following State for Artists/Users
// Check to see if the current user is following one or more artists or other Spotify users.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-current-user-follows - Find more info on the official Spotify Web API Reference
func (s *CategoryFollow) EndpointCheckCurrentUserFollows(ctx context.Context, request operations.EndpointCheckCurrentUserFollowsRequest) (*operations.EndpointCheckCurrentUserFollowsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/following/contains"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EndpointCheckCurrentUserFollowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []bool
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EndpointCheckCurrentUserFollows200ApplicationJSONBooleans = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseObject = out
		}
	}

	return res, nil
}

// EndpointCheckIfUserFollowsPlaylist - Check if Users Follow a Playlist
// Check to see if one or more Spotify users are following a specified playlist.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-if-user-follows-playlist - Find more info on the official Spotify Web API Reference
func (s *CategoryFollow) EndpointCheckIfUserFollowsPlaylist(ctx context.Context, request operations.EndpointCheckIfUserFollowsPlaylistRequest) (*operations.EndpointCheckIfUserFollowsPlaylistResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/playlists/{playlist_id}/followers/contains", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EndpointCheckIfUserFollowsPlaylistResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []bool
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EndpointCheckIfUserFollowsPlaylist200ApplicationJSONBooleans = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseObject = out
		}
	}

	return res, nil
}

// EndpointFollowArtistsUsers - Follow Artists or Users
// Add the current user as a follower of one or more artists or other Spotify users.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-follow-artists-users - Find more info on the official Spotify Web API Reference
func (s *CategoryFollow) EndpointFollowArtistsUsers(ctx context.Context, request operations.EndpointFollowArtistsUsersRequest) (*operations.EndpointFollowArtistsUsersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/following"

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

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EndpointFollowArtistsUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseObject = out
		}
	}

	return res, nil
}

// EndpointFollowPlaylist - Follow a Playlist
// Add the current user as a follower of a playlist.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-follow-playlist - Find more info on the official Spotify Web API Reference
func (s *CategoryFollow) EndpointFollowPlaylist(ctx context.Context, request operations.EndpointFollowPlaylistRequest) (*operations.EndpointFollowPlaylistResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/playlists/{playlist_id}/followers", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.EndpointFollowPlaylistResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseObject = out
		}
	}

	return res, nil
}

// EndpointGetFollowed - Get User's Followed Artists
// Get the current user's followed artists.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-followed - Find more info on the official Spotify Web API Reference
func (s *CategoryFollow) EndpointGetFollowed(ctx context.Context, request operations.EndpointGetFollowedRequest) (*operations.EndpointGetFollowedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/following"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EndpointGetFollowedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FollowingArtistsObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FollowingArtistsObject = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseObject = out
		}
	}

	return res, nil
}

// EndpointUnfollowArtistsUsers - Unfollow Artists or Users
// Remove the current user as a follower of one or more artists or other Spotify users.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-unfollow-artists-users - Find more info on the official Spotify Web API Reference
func (s *CategoryFollow) EndpointUnfollowArtistsUsers(ctx context.Context, request operations.EndpointUnfollowArtistsUsersRequest) (*operations.EndpointUnfollowArtistsUsersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/following"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EndpointUnfollowArtistsUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseObject = out
		}
	}

	return res, nil
}

// EndpointUnfollowPlaylist - Unfollow Playlist
// Remove the current user as a follower of a playlist.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-unfollow-playlist - Find more info on the official Spotify Web API Reference
func (s *CategoryFollow) EndpointUnfollowPlaylist(ctx context.Context, request operations.EndpointUnfollowPlaylistRequest) (*operations.EndpointUnfollowPlaylistResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/playlists/{playlist_id}/followers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.EndpointUnfollowPlaylistResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ErrorResponseObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ErrorResponseObject = out
		}
	}

	return res, nil
}
