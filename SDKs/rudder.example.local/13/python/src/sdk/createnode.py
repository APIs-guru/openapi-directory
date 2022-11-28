import requests
from typing import Optional
from sdk.models import operations
from . import utils

class CreateNode:
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

    
    def create_nodes(self, request: operations.CreateNodesRequest) -> operations.CreateNodesResponse:
        r"""Create a new node
        Create a new node
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createnodes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateNodes200ApplicationJSON])
                res.create_nodes_200_application_json_object = out

        return res

    