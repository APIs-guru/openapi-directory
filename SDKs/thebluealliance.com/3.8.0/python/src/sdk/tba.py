import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Tba:
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

    
    def get_status(self, request: operations.GetStatusRequest) -> operations.GetStatusResponse:
        r"""Returns API status, and TBA status information.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/status"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIStatus])
                res.api_status = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            pass

        return res

    