import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class PortfoliosVideos:
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

    
    def add_video_to_portfolio(self, request: operations.AddVideoToPortfolioRequest) -> operations.AddVideoToPortfolioResponse:
        r"""Add a video to a portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoToPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def add_video_to_portfolio_alt1(self, request: operations.AddVideoToPortfolioAlt1Request) -> operations.AddVideoToPortfolioAlt1Response:
        r"""Add a video to a portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/portfolios/{portfolio_id}/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddVideoToPortfolioAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_video_from_portfolio(self, request: operations.DeleteVideoFromPortfolioRequest) -> operations.DeleteVideoFromPortfolioResponse:
        r"""Remove a video from a portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoFromPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def delete_video_from_portfolio_alt1(self, request: operations.DeleteVideoFromPortfolioAlt1Request) -> operations.DeleteVideoFromPortfolioAlt1Response:
        r"""Remove a video from a portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/portfolios/{portfolio_id}/videos/{video_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVideoFromPortfolioAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def get_portfolio_video(self, request: operations.GetPortfolioVideoRequest) -> operations.GetPortfolioVideoResponse:
        r"""Get a specific video in a portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortfolioVideoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out

        return res

    
    def get_portfolio_video_alt1(self, request: operations.GetPortfolioVideoAlt1Request) -> operations.GetPortfolioVideoAlt1Response:
        r"""Get a specific video in a portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/portfolios/{portfolio_id}/videos/{video_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortfolioVideoAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out

        return res

    
    def get_portfolio_videos(self, request: operations.GetPortfolioVideosRequest) -> operations.GetPortfolioVideosResponse:
        r"""Get all the videos in a portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/portfolios/{portfolio_id}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortfolioVideosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out

        return res

    
    def get_portfolio_videos_alt1(self, request: operations.GetPortfolioVideosAlt1Request) -> operations.GetPortfolioVideosAlt1Response:
        r"""Get all the videos in a portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/portfolios/{portfolio_id}/videos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortfolioVideosAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.video+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Video]])
                res.videos = out

        return res

    