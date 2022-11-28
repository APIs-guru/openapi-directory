
__doc__ = """ SDK Documentation: https://github.com/dewitt/opensearch - OpenSearch github repository"""
import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.parliament.uk/search",
]


class SDK:
    r"""SDK Documentation: https://github.com/dewitt/opensearch - OpenSearch github repository"""

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
        
    
    
    
    def get_description(self) -> operations.GetDescriptionResponse:
        r"""OpenSearch description document
        https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-description-document - OpenSearch github repository
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/description"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDescriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_query(self, request: operations.GetQueryRequest) -> operations.GetQueryResponse:
        r"""Search results
        https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements - OpenSearch github repository
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/query"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_query_extension_(self, request: operations.GetQueryExtensionRequest) -> operations.GetQueryExtensionResponse:
        r"""Search results
        https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements - OpenSearch github repository
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/query.{extension}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    