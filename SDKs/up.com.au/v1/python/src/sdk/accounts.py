import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def get_accounts(self, request: operations.GetAccountsRequest) -> operations.GetAccountsResponse:
        r"""List accounts
        Retrieve a paginated list of all accounts for the currently
        authenticated user. The returned list is paginated and can be scrolled
        by following the `prev` and `next` links where present.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccountsResponse])
                res.list_accounts_response = out

        return res

    
    def get_accounts_id_(self, request: operations.GetAccountsIDRequest) -> operations.GetAccountsIDResponse:
        r"""Retrieve account
        Retrieve a specific account by providing its unique identifier.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAccountResponse])
                res.get_account_response = out

        return res

    