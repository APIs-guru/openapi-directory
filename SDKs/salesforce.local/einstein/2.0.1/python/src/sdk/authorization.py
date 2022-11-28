import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Authorization:
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

    
    def generate_token_v2(self, request: operations.GenerateTokenV2Request) -> operations.GenerateTokenV2Response:
        r"""Generate an OAuth Token
        Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.
        https://metamind.readme.io/docs/generate-an-oauth-access-token - authentication guid
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/oauth2/token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenerateTokenV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenerateAccessTokenResponse])
                res.generate_access_token_response = out

        return res

    
    def revoke_refresh_token_v2(self, request: operations.RevokeRefreshTokenV2Request) -> operations.RevokeRefreshTokenV2Response:
        r"""Delete a Refresh Token
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/oauth2/tokens/{token}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RevokeRefreshTokenV2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    