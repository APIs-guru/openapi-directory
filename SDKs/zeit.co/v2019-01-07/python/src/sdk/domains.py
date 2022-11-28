import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Domains:
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

    
    def get_domain(self, request: operations.GetDomainRequest) -> operations.GetDomainResponse:
        r"""Get a domain for the authenticated user by name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/domains/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomain200ApplicationJSON])
                res.get_domain_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomain404ApplicationJSON])
                res.get_domain_404_application_json_object = out

        return res

    
    def get_domains(self, request: operations.GetDomainsRequest) -> operations.GetDomainsResponse:
        r"""Gets a list of domains registered for the authenticating user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/domains"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomains200ApplicationJSON])
                res.get_domains_200_application_json_object = out

        return res

    