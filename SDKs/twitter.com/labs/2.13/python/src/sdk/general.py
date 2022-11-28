import requests
from sdk.models import operations
from . import utils

class General:
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

    
    def get_open_api_spec(self) -> operations.GetOpenAPISpecResponse:
        r"""Returns the open api spec document.
        Full open api spec in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/labs/2/openapi.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOpenAPISpecResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.get_open_api_spec_200_application_json_string = r.content

        return res

    