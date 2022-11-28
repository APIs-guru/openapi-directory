import requests
from typing import Optional
from sdk.models import operations
from . import utils

class APIInfo:
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

    
    def api_general_informations(self) -> operations.APIGeneralInformationsResponse:
        r"""List all endoints
        List all endpoints and their version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/info"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIGeneralInformationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.APIGeneralInformations200ApplicationJSON])
                res.api_general_informations_200_application_json_object = out

        return res

    
    def api_informations(self, request: operations.APIInformationsRequest) -> operations.APIInformationsResponse:
        r"""Get information about one API endpoint
        Get the description and the list of supported version for one API endpoint
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/info/details/{endpointName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APIInformationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.APIInformations200ApplicationJSON])
                res.api_informations_200_application_json_object = out

        return res

    
    def api_sub_informations(self, request: operations.APISubInformationsRequest) -> operations.APISubInformationsResponse:
        r"""Get information on endpoint in a section
        Get all endpoints in the given section with their supported version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/info/{sectionId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.APISubInformationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.APISubInformations200ApplicationJSON])
                res.api_sub_informations_200_application_json_object = out

        return res

    