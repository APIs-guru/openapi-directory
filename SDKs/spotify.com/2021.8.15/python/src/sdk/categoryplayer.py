import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CategoryPlayer:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def endpoint_add_to_queue(self, request: operations.EndpointAddToQueueRequest) -> operations.EndpointAddToQueueResponse:
        r"""Add an item to queue
        Add an item to the end of the user's current playback queue.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-to-queue - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/queue"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointAddToQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_a_users_available_devices(self, request: operations.EndpointGetAUsersAvailableDevicesRequest) -> operations.EndpointGetAUsersAvailableDevicesResponse:
        r"""Get a User's Available Devices
        Get information about a user's available devices.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-users-available-devices - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/devices"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAUsersAvailableDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DevicesObject])
                res.devices_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_information_about_the_users_current_playback(self, request: operations.EndpointGetInformationAboutTheUsersCurrentPlaybackRequest) -> operations.EndpointGetInformationAboutTheUsersCurrentPlaybackResponse:
        r"""Get Information About The User's Current Playback
        Get information about the user's current playback state, including track or episode, progress, and active device.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-information-about-the-users-current-playback - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetInformationAboutTheUsersCurrentPlaybackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CurrentlyPlayingContextObject])
                res.currently_playing_context_object = out
        elif r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_recently_played(self, request: operations.EndpointGetRecentlyPlayedRequest) -> operations.EndpointGetRecentlyPlayedResponse:
        r"""Get Current User's Recently Played Tracks
        Get tracks from the current user's recently played tracks.
        *Note: Currently doesn't support podcast episodes.*
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recently-played - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/recently-played"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetRecentlyPlayedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EndpointGetRecentlyPlayed200ApplicationJSON])
                res.endpoint_get_recently_played_200_application_json_object = out
        elif r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_the_users_currently_playing_track(self, request: operations.EndpointGetTheUsersCurrentlyPlayingTrackRequest) -> operations.EndpointGetTheUsersCurrentlyPlayingTrackResponse:
        r"""Get the User's Currently Playing Track
        Get the object currently being played on the user's Spotify account.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-the-users-currently-playing-track - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/currently-playing"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetTheUsersCurrentlyPlayingTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CurrentlyPlayingObject])
                res.currently_playing_object = out
        elif r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_pause_a_users_playback(self, request: operations.EndpointPauseAUsersPlaybackRequest) -> operations.EndpointPauseAUsersPlaybackResponse:
        r"""Pause a User's Playback
        Pause playback on the user's account.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-pause-a-users-playback - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/pause"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointPauseAUsersPlaybackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_seek_to_position_in_currently_playing_track(self, request: operations.EndpointSeekToPositionInCurrentlyPlayingTrackRequest) -> operations.EndpointSeekToPositionInCurrentlyPlayingTrackResponse:
        r"""Seek To Position In Currently Playing Track
        Seeks to the given position in the user's currently playing track.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-seek-to-position-in-currently-playing-track - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/seek"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointSeekToPositionInCurrentlyPlayingTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_set_repeat_mode_on_users_playback(self, request: operations.EndpointSetRepeatModeOnUsersPlaybackRequest) -> operations.EndpointSetRepeatModeOnUsersPlaybackResponse:
        r"""Set Repeat Mode On User’s Playback
        Set the repeat mode for the user's playback. Options are repeat-track,
        repeat-context, and off.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-repeat-mode-on-users-playback - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/repeat"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointSetRepeatModeOnUsersPlaybackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_set_volume_for_users_playback(self, request: operations.EndpointSetVolumeForUsersPlaybackRequest) -> operations.EndpointSetVolumeForUsersPlaybackResponse:
        r"""Set Volume For User's Playback
        Set the volume for the user's current playback device.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-volume-for-users-playback - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/volume"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointSetVolumeForUsersPlaybackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_skip_users_playback_to_next_track(self, request: operations.EndpointSkipUsersPlaybackToNextTrackRequest) -> operations.EndpointSkipUsersPlaybackToNextTrackResponse:
        r"""Skip User’s Playback To Next Track
        Skips to next track in the user's queue.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-next-track - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/next"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointSkipUsersPlaybackToNextTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_skip_users_playback_to_previous_track(self, request: operations.EndpointSkipUsersPlaybackToPreviousTrackRequest) -> operations.EndpointSkipUsersPlaybackToPreviousTrackResponse:
        r"""Skip User’s Playback To Previous Track
        Skips to previous track in the user's queue.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-previous-track - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/previous"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointSkipUsersPlaybackToPreviousTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_start_a_users_playback(self, request: operations.EndpointStartAUsersPlaybackRequest) -> operations.EndpointStartAUsersPlaybackResponse:
        r"""Start/Resume a User's Playback
        Start a new context or resume current playback on the user's active device.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-start-a-users-playback - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/play"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointStartAUsersPlaybackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_toggle_shuffle_for_users_playback(self, request: operations.EndpointToggleShuffleForUsersPlaybackRequest) -> operations.EndpointToggleShuffleForUsersPlaybackResponse:
        r"""Toggle Shuffle For User’s Playback
        Toggle shuffle on or off for user's playback.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-toggle-shuffle-for-users-playback - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player/shuffle"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointToggleShuffleForUsersPlaybackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_transfer_a_users_playback(self, request: operations.EndpointTransferAUsersPlaybackRequest) -> operations.EndpointTransferAUsersPlaybackResponse:
        r"""Transfer a User's Playback
        Transfer playback to a new device and determine if it should start playing.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-transfer-a-users-playback - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/player"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointTransferAUsersPlaybackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    