import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class PortfoliosEssentials:
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

    
    def get_portfolio(self, request: operations.GetPortfolioRequest) -> operations.GetPortfolioResponse:
        r"""Get a specific portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/portfolios/{portfolio_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.portfolio+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Portfolio])
                res.portfolio = out

        return res

    
    def get_portfolio_alt1(self, request: operations.GetPortfolioAlt1Request) -> operations.GetPortfolioAlt1Response:
        r"""Get a specific portfolio
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/portfolios/{portfolio_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortfolioAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.portfolio+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Portfolio])
                res.portfolio = out

        return res

    
    def get_portfolios(self, request: operations.GetPortfoliosRequest) -> operations.GetPortfoliosResponse:
        r"""Get all the portfolios that belong to a user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{user_id}/portfolios", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortfoliosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.portfolio+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Portfolio]])
                res.portfolios = out

        return res

    
    def get_portfolios_alt1(self, request: operations.GetPortfoliosAlt1Request) -> operations.GetPortfoliosAlt1Response:
        r"""Get all the portfolios that belong to a user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me/portfolios"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPortfoliosAlt1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.portfolio+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Portfolio]])
                res.portfolios = out

        return res

    