

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://oauth.twilio.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def create_token(self, request: operations.CreateTokenRequest) -> operations.CreateTokenResponse:
        r"""Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
        """
        
        base_url = operations.CREATE_TOKEN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OauthV1Token])
                res.oauth_v1_token = out

        return res

    
    def fetch_certs(self, request: operations.FetchCertsRequest) -> operations.FetchCertsResponse:
        r"""Fetches public JWKs
        """
        
        base_url = operations.FETCH_CERTS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/certs"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OauthV1Certs])
                res.oauth_v1_certs = out

        return res

    
    def fetch_openid_discovery(self, request: operations.FetchOpenidDiscoveryRequest) -> operations.FetchOpenidDiscoveryResponse:
        r"""Fetch configuration details about the OpenID Connect Authorization Server
        """
        
        base_url = operations.FETCH_OPENID_DISCOVERY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/well-known/openid-configuration"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchOpenidDiscoveryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OauthV1OpenidDiscovery])
                res.oauth_v1_openid_discovery = out

        return res

    
    def fetch_user_info(self, request: operations.FetchUserInfoRequest) -> operations.FetchUserInfoResponse:
        r"""Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).
        """
        
        base_url = operations.FETCH_USER_INFO_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/userinfo"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUserInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OauthV1UserInfo])
                res.oauth_v1_user_info = out

        return res

    