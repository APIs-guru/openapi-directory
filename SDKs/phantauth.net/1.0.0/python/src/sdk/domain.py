import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Domain:
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

    
    def get_domain_domainname_(self, request: operations.GetDomainDomainnameRequest) -> operations.GetDomainDomainnameResponse:
        r"""Get a Domain
        This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.
        It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
        
        Domainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domain/{domainname}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainDomainnameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomainDomainname200ApplicationJSON])
                res.get_domain_domainname_200_application_json_object = out

        return res

    