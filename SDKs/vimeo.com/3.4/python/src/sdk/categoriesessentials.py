import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class CategoriesEssentials:
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

    
    def get_categories(self, request: operations.GetCategoriesRequest) -> operations.GetCategoriesResponse:
        r"""Get all categories
        This method gets all existing categories.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Category]])
                res.categories = out

        return res

    
    def get_category(self, request: operations.GetCategoryRequest) -> operations.GetCategoryResponse:
        r"""Get a specific category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{category}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Category])
                res.category = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/vnd.vimeo.category+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    