import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Parameters:
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

    
    def create_parameter(self, request: operations.CreateParameterRequest) -> operations.CreateParameterResponse:
        r"""Create a new parameter
        Create a new global parameter
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/parameters"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateParameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateParameter200ApplicationJSON])
                res.create_parameter_200_application_json_object = out

        return res

    
    def delete_parameter(self, request: operations.DeleteParameterRequest) -> operations.DeleteParameterResponse:
        r"""Delete a parameter
        Delete an existing parameter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/parameters/{parameterId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteParameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteParameter200ApplicationJSON])
                res.delete_parameter_200_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteParameter500ApplicationJSON])
                res.delete_parameter_500_application_json_object = out

        return res

    
    def list_parameters(self) -> operations.ListParametersResponse:
        r"""List all global parameters
        Get the current value of all the global parameters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/parameters"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListParametersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListParameters200ApplicationJSON])
                res.list_parameters_200_application_json_object = out

        return res

    
    def parameter_details(self, request: operations.ParameterDetailsRequest) -> operations.ParameterDetailsResponse:
        r"""Get the value of a parameter
        Get the current value of a given parameter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/parameters/{parameterId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ParameterDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ParameterDetails200ApplicationJSON])
                res.parameter_details_200_application_json_object = out

        return res

    
    def update_parameter(self, request: operations.UpdateParameterRequest) -> operations.UpdateParameterResponse:
        r"""Update a parameter's value
        Update the properties of a parameter
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/parameters/{parameterId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateParameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateParameter200ApplicationJSON])
                res.update_parameter_200_application_json_object = out

        return res

    