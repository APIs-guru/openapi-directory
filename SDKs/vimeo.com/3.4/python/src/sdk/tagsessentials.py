import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TagsEssentials:
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

    
    def get_tag(self, request: operations.GetTagRequest) -> operations.GetTagResponse:
        r"""Get a specific tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{word}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.vimeo.tag+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out

        return res

    