

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://fax.twilio.com",
]


class SDK:
    

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
        
    
    
    
    def delete_fax(self, request: operations.DeleteFaxRequest) -> operations.DeleteFaxResponse:
        r"""Delete a specific fax and its associated media.
        """
        
        base_url = operations.DELETE_FAX_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Faxes/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_fax_media(self, request: operations.DeleteFaxMediaRequest) -> operations.DeleteFaxMediaResponse:
        r"""Delete a specific fax media instance.
        """
        
        base_url = operations.DELETE_FAX_MEDIA_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Faxes/{FaxSid}/Media/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFaxMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_fax(self, request: operations.FetchFaxRequest) -> operations.FetchFaxResponse:
        r"""Fetch a specific fax.
        """
        
        base_url = operations.FETCH_FAX_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Faxes/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FaxV1Fax])
                res.fax_v1_fax = out

        return res

    
    def fetch_fax_media(self, request: operations.FetchFaxMediaRequest) -> operations.FetchFaxMediaResponse:
        r"""Fetch a specific fax media instance.
        """
        
        base_url = operations.FETCH_FAX_MEDIA_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Faxes/{FaxSid}/Media/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFaxMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FaxV1FaxFaxMedia])
                res.fax_v1_fax_fax_media = out

        return res

    
    def list_fax(self, request: operations.ListFaxRequest) -> operations.ListFaxResponse:
        r"""Retrieve a list of all faxes.
        """
        
        base_url = operations.LIST_FAX_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Faxes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFaxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFaxListFaxResponse])
                res.list_fax_response = out

        return res

    
    def list_fax_media(self, request: operations.ListFaxMediaRequest) -> operations.ListFaxMediaResponse:
        r"""Retrieve a list of all fax media instances for the specified fax.
        """
        
        base_url = operations.LIST_FAX_MEDIA_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Faxes/{FaxSid}/Media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFaxMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFaxMediaListFaxMediaResponse])
                res.list_fax_media_response = out

        return res

    