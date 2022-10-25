import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://fax.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def delete_fax(self, request: operations.DeleteFaxRequest) -> operations.DeleteFaxResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FAX_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Faxes/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFaxResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_fax_media(self, request: operations.DeleteFaxMediaRequest) -> operations.DeleteFaxMediaResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FAX_MEDIA_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Faxes/{FaxSid}/Media/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFaxMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def fetch_fax(self, request: operations.FetchFaxRequest) -> operations.FetchFaxResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FAX_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Faxes/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFaxResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FaxV1Fax])
                res.fax_v1_fax = out

        return res

    
    
    def fetch_fax_media(self, request: operations.FetchFaxMediaRequest) -> operations.FetchFaxMediaResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FAX_MEDIA_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Faxes/{FaxSid}/Media/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFaxMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FaxV1FaxFaxMedia])
                res.fax_v1_fax_fax_media = out

        return res

    
    
    def list_fax(self, request: operations.ListFaxRequest) -> operations.ListFaxResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FAX_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Faxes"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFaxResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFaxListFaxResponse])
                res.list_fax_response = out

        return res

    
    
    def list_fax_media(self, request: operations.ListFaxMediaRequest) -> operations.ListFaxMediaResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FAX_MEDIA_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Faxes/{FaxSid}/Media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFaxMediaResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFaxMediaListFaxMediaResponse])
                res.list_fax_media_response = out

        return res

    