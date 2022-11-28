import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CategoryTracks:
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

    
    def endpoint_get_audio_analysis(self, request: operations.EndpointGetAudioAnalysisRequest) -> operations.EndpointGetAudioAnalysisResponse:
        r"""Get Audio Analysis for a Track
        Get a detailed audio analysis for a single track identified by its unique
        Spotify ID.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-analysis - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/audio-analysis/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAudioAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AudioAnalysisObject])
                res.audio_analysis_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_audio_features(self, request: operations.EndpointGetAudioFeaturesRequest) -> operations.EndpointGetAudioFeaturesResponse:
        r"""Get Audio Features for a Track
        Get audio feature information for a single track identified by its unique
        Spotify ID.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-audio-features - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/audio-features/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetAudioFeaturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AudioFeaturesObject])
                res.audio_features_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_several_audio_features(self, request: operations.EndpointGetSeveralAudioFeaturesRequest) -> operations.EndpointGetSeveralAudioFeaturesResponse:
        r"""Get Audio Features for Several Tracks
        Get audio features for multiple tracks based on their Spotify IDs.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-audio-features - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/audio-features"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetSeveralAudioFeaturesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AudioFeaturesArrayObject])
                res.audio_features_array_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_several_tracks(self, request: operations.EndpointGetSeveralTracksRequest) -> operations.EndpointGetSeveralTracksResponse:
        r"""Get Several Tracks
        Get Spotify catalog information for multiple tracks based on their Spotify IDs.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-several-tracks - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tracks"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetSeveralTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TracksObject])
                res.tracks_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_track(self, request: operations.EndpointGetTrackRequest) -> operations.EndpointGetTrackResponse:
        r"""Get a Track
        Get Spotify catalog information for a single track identified by its
        unique Spotify ID.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-track - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tracks/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetTrackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrackObject])
                res.track_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    