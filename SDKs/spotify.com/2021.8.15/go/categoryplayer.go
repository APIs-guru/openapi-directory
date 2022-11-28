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

type CategoryPlayer struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCategoryPlayer(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CategoryPlayer {
	return &CategoryPlayer{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// EndpointAddToQueue - Add an item to queue
// Add an item to the end of the user's current playback queue.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-to-queue - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointAddToQueue(ctx context.Context, request operations.EndpointAddToQueueRequest) (*operations.EndpointAddToQueueResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/queue"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.EndpointAddToQueueResponse{
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

// EndpointGetAUsersAvailableDevices - Get a User's Available Devices
// Get information about a user's available devices.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-users-available-devices - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointGetAUsersAvailableDevices(ctx context.Context, request operations.EndpointGetAUsersAvailableDevicesRequest) (*operations.EndpointGetAUsersAvailableDevicesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/devices"

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

	res := &operations.EndpointGetAUsersAvailableDevicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DevicesObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DevicesObject = out
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

// EndpointGetInformationAboutTheUsersCurrentPlayback - Get Information About The User's Current Playback
// Get information about the user's current playback state, including track or episode, progress, and active device.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-information-about-the-users-current-playback - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointGetInformationAboutTheUsersCurrentPlayback(ctx context.Context, request operations.EndpointGetInformationAboutTheUsersCurrentPlaybackRequest) (*operations.EndpointGetInformationAboutTheUsersCurrentPlaybackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player"

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

	res := &operations.EndpointGetInformationAboutTheUsersCurrentPlaybackResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CurrentlyPlayingContextObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CurrentlyPlayingContextObject = out
		}
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

// EndpointGetRecentlyPlayed - Get Current User's Recently Played Tracks
// Get tracks from the current user's recently played tracks.
// *Note: Currently doesn't support podcast episodes.*
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recently-played - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointGetRecentlyPlayed(ctx context.Context, request operations.EndpointGetRecentlyPlayedRequest) (*operations.EndpointGetRecentlyPlayedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/recently-played"

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

	res := &operations.EndpointGetRecentlyPlayedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EndpointGetRecentlyPlayed200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EndpointGetRecentlyPlayed200ApplicationJSONObject = out
		}
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

// EndpointGetTheUsersCurrentlyPlayingTrack - Get the User's Currently Playing Track
// Get the object currently being played on the user's Spotify account.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-the-users-currently-playing-track - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointGetTheUsersCurrentlyPlayingTrack(ctx context.Context, request operations.EndpointGetTheUsersCurrentlyPlayingTrackRequest) (*operations.EndpointGetTheUsersCurrentlyPlayingTrackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/currently-playing"

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

	res := &operations.EndpointGetTheUsersCurrentlyPlayingTrackResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CurrentlyPlayingObject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CurrentlyPlayingObject = out
		}
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

// EndpointPauseAUsersPlayback - Pause a User's Playback
// Pause playback on the user's account.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-pause-a-users-playback - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointPauseAUsersPlayback(ctx context.Context, request operations.EndpointPauseAUsersPlaybackRequest) (*operations.EndpointPauseAUsersPlaybackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/pause"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.EndpointPauseAUsersPlaybackResponse{
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

// EndpointSeekToPositionInCurrentlyPlayingTrack - Seek To Position In Currently Playing Track
// Seeks to the given position in the user's currently playing track.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-seek-to-position-in-currently-playing-track - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointSeekToPositionInCurrentlyPlayingTrack(ctx context.Context, request operations.EndpointSeekToPositionInCurrentlyPlayingTrackRequest) (*operations.EndpointSeekToPositionInCurrentlyPlayingTrackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/seek"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.EndpointSeekToPositionInCurrentlyPlayingTrackResponse{
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

// EndpointSetRepeatModeOnUsersPlayback - Set Repeat Mode On User’s Playback
// Set the repeat mode for the user's playback. Options are repeat-track,
// repeat-context, and off.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-repeat-mode-on-users-playback - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointSetRepeatModeOnUsersPlayback(ctx context.Context, request operations.EndpointSetRepeatModeOnUsersPlaybackRequest) (*operations.EndpointSetRepeatModeOnUsersPlaybackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/repeat"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.EndpointSetRepeatModeOnUsersPlaybackResponse{
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

// EndpointSetVolumeForUsersPlayback - Set Volume For User's Playback
// Set the volume for the user's current playback device.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-volume-for-users-playback - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointSetVolumeForUsersPlayback(ctx context.Context, request operations.EndpointSetVolumeForUsersPlaybackRequest) (*operations.EndpointSetVolumeForUsersPlaybackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/volume"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.EndpointSetVolumeForUsersPlaybackResponse{
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

// EndpointSkipUsersPlaybackToNextTrack - Skip User’s Playback To Next Track
// Skips to next track in the user's queue.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-next-track - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointSkipUsersPlaybackToNextTrack(ctx context.Context, request operations.EndpointSkipUsersPlaybackToNextTrackRequest) (*operations.EndpointSkipUsersPlaybackToNextTrackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/next"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.EndpointSkipUsersPlaybackToNextTrackResponse{
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

// EndpointSkipUsersPlaybackToPreviousTrack - Skip User’s Playback To Previous Track
// Skips to previous track in the user's queue.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-previous-track - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointSkipUsersPlaybackToPreviousTrack(ctx context.Context, request operations.EndpointSkipUsersPlaybackToPreviousTrackRequest) (*operations.EndpointSkipUsersPlaybackToPreviousTrackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/previous"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.EndpointSkipUsersPlaybackToPreviousTrackResponse{
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

// EndpointStartAUsersPlayback - Start/Resume a User's Playback
// Start a new context or resume current playback on the user's active device.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-start-a-users-playback - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointStartAUsersPlayback(ctx context.Context, request operations.EndpointStartAUsersPlaybackRequest) (*operations.EndpointStartAUsersPlaybackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/play"

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

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EndpointStartAUsersPlaybackResponse{
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

// EndpointToggleShuffleForUsersPlayback - Toggle Shuffle For User’s Playback
// Toggle shuffle on or off for user's playback.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-toggle-shuffle-for-users-playback - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointToggleShuffleForUsersPlayback(ctx context.Context, request operations.EndpointToggleShuffleForUsersPlaybackRequest) (*operations.EndpointToggleShuffleForUsersPlaybackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player/shuffle"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.EndpointToggleShuffleForUsersPlaybackResponse{
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

// EndpointTransferAUsersPlayback - Transfer a User's Playback
// Transfer playback to a new device and determine if it should start playing.
// https://developer.spotify.com/documentation/web-api/reference/#endpoint-transfer-a-users-playback - Find more info on the official Spotify Web API Reference
func (s *CategoryPlayer) EndpointTransferAUsersPlayback(ctx context.Context, request operations.EndpointTransferAUsersPlaybackRequest) (*operations.EndpointTransferAUsersPlaybackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/player"

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EndpointTransferAUsersPlaybackResponse{
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
