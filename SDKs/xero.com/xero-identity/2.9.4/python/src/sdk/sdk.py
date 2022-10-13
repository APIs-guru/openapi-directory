import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.xero.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def delete_connection(self, request: operations.DeleteConnectionRequest) -> operations.DeleteConnectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/Connections/{id}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_connections(self, request: operations.GetConnectionsRequest) -> operations.GetConnectionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/Connections"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConnectionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.connections = out

        return res

    