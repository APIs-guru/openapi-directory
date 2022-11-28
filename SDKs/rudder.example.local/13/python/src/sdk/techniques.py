import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Techniques:
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

    
    def list_technique_version_directives(self, request: operations.ListTechniqueVersionDirectivesRequest) -> operations.ListTechniqueVersionDirectivesResponse:
        r"""List all directives based on a version of a technique
        List all directives based on a version of a technique
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/techniques/{techniqueName}/{techniqueVersion}/directives", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTechniqueVersionDirectivesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTechniqueVersionDirectives200ApplicationJSON])
                res.list_technique_version_directives_200_application_json_object = out

        return res

    
    def list_techniques(self) -> operations.ListTechniquesResponse:
        r"""List all techniques
        List all technique with their versions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/techniques"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTechniquesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTechniques200ApplicationJSON])
                res.list_techniques_200_application_json_object = out

        return res

    
    def list_techniques_directives(self, request: operations.ListTechniquesDirectivesRequest) -> operations.ListTechniquesDirectivesResponse:
        r"""List all directives based on a technique
        List all directives based on all version of a technique
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/techniques/{techniqueName}/directives", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTechniquesDirectivesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTechniquesDirectives200ApplicationJSON])
                res.list_techniques_directives_200_application_json_object = out

        return res

    