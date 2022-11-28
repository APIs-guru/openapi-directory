import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Infrastructure:
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

    
    def get_node(self, request: operations.GetNodeRequest) -> operations.GetNodeResponse:
        r"""Show node details
        Get details of infrastructure nodes. Only admin users can get this information. The proxy id is
        required for adding a data source for selecting appropriate proxy node to add the data source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/infra/nodes/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Node])
                res.node = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def list_nodes(self, request: operations.ListNodesRequest) -> operations.ListNodesResponse:
        r"""List nodes
        Get list of infrastructure nodes. Only admin users can retrieve this information.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/infra/nodes"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeListResult])
                res.node_list_result = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass

        return res

    