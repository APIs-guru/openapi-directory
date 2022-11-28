import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AuthenticationExtrasEssentials:
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

    
    def client_auth(self, request: operations.ClientAuthRequest) -> operations.ClientAuthResponse:
        r"""Authorize a client with OAuth
        For information on utilizing OAuth client authorization, see our
        [authentication](/api/authentication#generate-unauthenticated-tokens) documentation or the
        [Client Credentials Grant](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4) section of the
        [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/authorize/client"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClientAuthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Auth])
                res.auth = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def convert_access_token(self, request: operations.ConvertAccessTokenRequest) -> operations.ConvertAccessTokenResponse:
        r"""Convert OAuth 1 access tokens to OAuth 2 access tokens
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/authorize/vimeo_oauth1"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConvertAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Auth])
                res.auth = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthError])
                res.auth_error = out

        return res

    
    def delete_token(self) -> operations.DeleteTokenResponse:
        r"""Revoke the current access token
        This method enables an app to notify the API that it is done with a token and that the token can be discarded.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tokens"
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Auth])
                res.auth = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    
    def exchange_auth_code(self, request: operations.ExchangeAuthCodeRequest) -> operations.ExchangeAuthCodeResponse:
        r"""Exchange an authorization code for an access token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/access_token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExchangeAuthCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Auth])
                res.auth = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthError])
                res.auth_error = out

        return res

    
    def verify_token(self) -> operations.VerifyTokenResponse:
        r"""Verify an OAuth 2 token
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/verify"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifyTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Auth])
                res.auth = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/vnd.vimeo.auth+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyError])
                res.legacy_error = out

        return res

    