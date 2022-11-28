

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://sandbox-api.va.gov/services/va_forms/{version}",
	"https://api.va.gov/services/va_forms/{version}",
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
        
    
    
    
    def find_form_by_form_name(self, request: operations.FindFormByFormNameRequest) -> operations.FindFormByFormNameResponse:
        r"""Find form by form name
        Returns a single form and the full revision history
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/forms/{form_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FindFormByFormNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.FindFormByFormName200ApplicationJSON])
                res.find_form_by_form_name_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.find_form_by_form_name_401_application_json_any = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.FindFormByFormName404ApplicationJSON])
                res.find_form_by_form_name_404_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.find_form_by_form_name_429_application_json_any = out

        return res

    
    def find_forms(self, request: operations.FindFormsRequest) -> operations.FindFormsResponse:
        r"""Returns all VA Forms and their last revision date
        Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/forms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FindFormsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.FindForms200ApplicationJSON])
                res.find_forms_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.find_forms_401_application_json_any = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.find_forms_429_application_json_any = out

        return res

    