import requests
from typing import Optional
from sdk.models import operations
from . import utils

class User:
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

    
    def get_user_username_(self, request: operations.GetUserUsernameRequest) -> operations.GetUserUsernameResponse:
        r"""Get a User
        Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
        In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
        In lack of a user name, all calls generate a different user object to the randomly generated user name.
        
        By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.
        
        If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
        In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`
        
        The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
        The members of a team are users randomly generated from the team name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{username}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserUsername200ApplicationJSON])
                res.get_user_username_200_application_json_object = out

        return res

    
    def get_user_username_token_kind_(self, request: operations.GetUserUsernameTokenKindRequest) -> operations.GetUserUsernameTokenKindResponse:
        r"""Get a User Token
        It is used to generate OpenID Connect tokens as path parameters to a user of a given name.
        
        This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
        Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/{username}/token/{kind}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserUsernameTokenKindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_user(self, request: operations.PostUserRequest) -> operations.PostUserResponse:
        r"""Create a User Selfie
        To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
        Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
        By the use of a selfie token, you can use your own user objects during the authentication process.
        
        Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    