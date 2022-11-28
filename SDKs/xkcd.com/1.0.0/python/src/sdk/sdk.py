
__doc__ = """ SDK Documentation: https://xkcd.com/json.html"""
import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"http://xkcd.com/",
]


class SDK:
    r"""SDK Documentation: https://xkcd.com/json.html"""

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
        
    
    
    
    def get_comic_id_info_0_json(self, request: operations.GetComicIDInfo0JSONRequest) -> operations.GetComicIDInfo0JSONResponse:
        r"""Fetch comics and metadata  by comic id.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{comicId}/info.0.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetComicIDInfo0JSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_info_0_json(self) -> operations.GetInfo0JSONResponse:
        r"""Fetch current comic and metadata.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/info.0.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInfo0JSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    