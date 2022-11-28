import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Client:
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

    
    def get_client_client_id_(self, request: operations.GetClientClientIDRequest) -> operations.GetClientClientIDResponse:
        r"""Get a Client
        Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.
        In the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.
        In lack of a client ID, all calls generate a different client object to the randomly generated client ID.
        
        By providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.
        
        If the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`
        
        The result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.
        The members of a fleet are clients randomly generated from the fleet name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/client/{client_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClientClientIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClientClientID200ApplicationJSON])
                res.get_client_client_id_200_application_json_object = out

        return res

    
    def get_client_client_id_token_kind_(self, request: operations.GetClientClientIDTokenKindRequest) -> operations.GetClientClientIDTokenKindResponse:
        r"""Get a Client Token
        It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.
        
        It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/client/{client_id}/token/{kind}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClientClientIDTokenKindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_client(self, request: operations.PostClientRequest) -> operations.PostClientResponse:
        r"""Create a Client Selfie
        To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
        Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
        By the use of a selfie token, you can use your own client objects in the authentication process.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/client"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    