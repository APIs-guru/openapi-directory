import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class OnDemandGenres:
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

    
    def add_vod_genre(self, request: operations.AddVodGenreRequest) -> operations.AddVodGenreResponse:
        r"""Add a genre to an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/genres/{genre_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVodGenreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandGenre])
                res.on_demand_genre = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_vod_genre(self, request: operations.DeleteVodGenreRequest) -> operations.DeleteVodGenreResponse:
        r"""Remove a genre from an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/genres/{genre_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVodGenreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_genre_vod(self, request: operations.GetGenreVodRequest) -> operations.GetGenreVodResponse:
        r"""Get a specific On Demand page in a genre
        Check whether a genre contains an On Demand page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/genres/{genre_id}/pages/{ondemand_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenreVodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandPage])
                res.on_demand_page = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_genre_vods(self, request: operations.GetGenreVodsRequest) -> operations.GetGenreVodsResponse:
        r"""Get all the On Demand pages in a genre
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/genres/{genre_id}/pages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenreVodsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.page+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OnDemandPage]])
                res.on_demand_pages = out

        return res

    
    def get_vod_genre(self, request: operations.GetVodGenreRequest) -> operations.GetVodGenreResponse:
        r"""Get a specific On Demand genre
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/genres/{genre_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodGenreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandGenre])
                res.on_demand_genre = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_vod_genre_by_ondemand_id(self, request: operations.GetVodGenreByOndemandIDRequest) -> operations.GetVodGenreByOndemandIDResponse:
        r"""Check whether an On Demand page belongs to a genre
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/genres/{genre_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodGenreByOndemandIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnDemandGenre])
                res.on_demand_genre = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_vod_genres(self) -> operations.GetVodGenresResponse:
        r"""Get all On Demand genres
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ondemand/genres"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodGenresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OnDemandGenre]])
                res.on_demand_genres = out

        return res

    
    def get_vod_genres_by_ondemand_id(self, request: operations.GetVodGenresByOndemandIDRequest) -> operations.GetVodGenresByOndemandIDResponse:
        r"""Get all the genres of an On Demand page
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ondemand/pages/{ondemand_id}/genres", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVodGenresByOndemandIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OnDemandGenre]])
                res.on_demand_genres = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.ondemand.genre+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    