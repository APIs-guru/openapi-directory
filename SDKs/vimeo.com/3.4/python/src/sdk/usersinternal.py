import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class UsersInternal:
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

    
    def search_users(self, request: operations.SearchUsersRequest) -> operations.SearchUsersResponse:
        r"""Search for users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/vnd.vimeo.user+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    