import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Alias:
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

    
    def create_alias(self, request: operations.CreateAliasRequest) -> operations.CreateAliasResponse:
        r"""Create alias
        This POST method creates a new alias under a specified domain. If no domain is specified in the request the alias will be attached to the default domain Short.fyi 
        
         **NOTE:** You can override the domain level Meta Tags and Tracking Snippets by specifying them for each URL. Any variables you add to a specific URL will always override domain level settings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aliases"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateAliasResponseModel])
                res.create_alias_response_model = out

        return res

    
    def delete_alias(self, request: operations.DeleteAliasRequest) -> operations.DeleteAliasResponse:
        r"""Delete alias
        Deletes a single alias by providing alias and domain. If no domain is provided the API will search for the matching alias within the Short.fyi domain
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aliases"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_alias(self, request: operations.GetAliasRequest) -> operations.GetAliasResponse:
        r"""Get alias
        Get detailed information for a single alias by providing its alias and domain name
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aliases"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AliasModel])
                res.alias_model = out

        return res

    
    def get_aliases(self, request: operations.GetAliasesRequest) -> operations.GetAliasesResponse:
        r"""Get aliases by domain
        Obtain a list of all alias names associated with your account and given domain. Result array is in descending order by creation date. 
        
         If no domain is specified you will receive a list of all the alias names you have created using the Short.fyi domain. 
        
         If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aliases/all"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAliasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAliasesModel])
                res.get_aliases_model = out

        return res

    
    def update_alias(self, request: operations.UpdateAliasRequest) -> operations.UpdateAliasResponse:
        r"""Update alias
        Update a single short URL by providing its alias and domain as a parameter, and the data you wish to update in the body of the request. If no domain is provided you will receive the alias found attached to the Short.fyi domain (if it exists and is linked to your account!)
        
         ### NOTE: 
        
         ( * )If you add a metatag or a snippet with a same name to an alias and the domain it's related to, the value will be taken from the alias and not the domain 
        
         ( ** ) When you update any array property (like destinations) the block is updated **completely** so you have to specify the old records to avoid deleting them
        
         ( *** ) The method updates only the specified properties so if there was no change in one of them you don't have to send it.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aliases"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    