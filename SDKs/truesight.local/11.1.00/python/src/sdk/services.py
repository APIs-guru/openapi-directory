import requests
from sdk.models import operations
from . import utils

class Services:
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

    
    def get_one_service(self, request: operations.GetOneServiceRequest) -> operations.GetOneServiceResponse:
        r"""Gets detailed information about a specific service.
        You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hardware/services/{serviceId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOneServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_services(self, request: operations.GetServicesRequest) -> operations.GetServicesResponse:
        r"""Gets summarized information about all monitored services.
        Lists the available ServiceSummary instances.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hardware/services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    