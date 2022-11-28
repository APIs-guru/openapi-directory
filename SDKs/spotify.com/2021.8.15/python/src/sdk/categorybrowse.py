import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CategoryBrowse:
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

    
    def endpoint_get_a_categories_playlists(self, request: operations.EndpointGetACategoriesPlaylistsRequest) -> operations.EndpointGetACategoriesPlaylistsResponse:
        r"""Get a Category's Playlists
        Get a list of Spotify playlists tagged with a particular category.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-categories-playlists - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/browse/categories/{category_id}/playlists", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetACategoriesPlaylistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlaylistPagingObject])
                res.playlist_paging_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_a_category(self, request: operations.EndpointGetACategoryRequest) -> operations.EndpointGetACategoryResponse:
        r"""Get a Category
        Get a single category used to tag items in Spotify (on, for example, the Spotify player's \"Browse\" tab).
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-category - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/browse/categories/{category_id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetACategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoryObject])
                res.category_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_categories(self, request: operations.EndpointGetCategoriesRequest) -> operations.EndpointGetCategoriesResponse:
        r"""Get All Categories
        Get a list of categories used to tag items in Spotify (on, for example, the Spotify player's \"Browse\" tab).
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-categories - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/browse/categories"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CategoriesObject])
                res.categories_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_featured_playlists(self, request: operations.EndpointGetFeaturedPlaylistsRequest) -> operations.EndpointGetFeaturedPlaylistsResponse:
        r"""Get All Featured Playlists
        Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-featured-playlists - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/browse/featured-playlists"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetFeaturedPlaylistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FeaturedPlaylistObject])
                res.featured_playlist_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_new_releases(self, request: operations.EndpointGetNewReleasesRequest) -> operations.EndpointGetNewReleasesResponse:
        r"""Get All New Releases
        Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player's \"Browse\" tab).
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-new-releases - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/browse/new-releases"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetNewReleasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NewReleasesObject])
                res.new_releases_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_recommendation_genres(self, request: operations.EndpointGetRecommendationGenresRequest) -> operations.EndpointGetRecommendationGenresResponse:
        r"""Get Recommendation Genres
        Retrieve a list of available genres seed parameter values for [recommendations](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendations).
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendation-genres - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recommendations/available-genre-seeds"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetRecommendationGenresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenreSeedsObject])
                res.genre_seeds_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    
    def endpoint_get_recommendations(self, request: operations.EndpointGetRecommendationsRequest) -> operations.EndpointGetRecommendationsResponse:
        r"""Get Recommendations
        Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
        https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recommendations - Find more info on the official Spotify Web API Reference
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/recommendations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EndpointGetRecommendationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RecommendationsObject])
                res.recommendations_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponseObject])
                res.error_response_object = out

        return res

    