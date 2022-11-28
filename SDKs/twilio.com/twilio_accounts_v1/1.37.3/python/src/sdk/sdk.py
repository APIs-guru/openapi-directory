

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://accounts.twilio.com",
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
        
    
    
    
    def create_credential_aws(self, request: operations.CreateCredentialAwsRequest) -> operations.CreateCredentialAwsResponse:
        r"""Create a new AWS Credential
        """
        
        base_url = operations.CREATE_CREDENTIAL_AWS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Credentials/AWS"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCredentialAwsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialAws])
                res.accounts_v1_credential_credential_aws = out

        return res

    
    def create_credential_public_key(self, request: operations.CreateCredentialPublicKeyRequest) -> operations.CreateCredentialPublicKeyResponse:
        r"""Create a new Public Key Credential
        """
        
        base_url = operations.CREATE_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Credentials/PublicKeys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialPublicKey])
                res.accounts_v1_credential_credential_public_key = out

        return res

    
    def create_secondary_auth_token(self, request: operations.CreateSecondaryAuthTokenRequest) -> operations.CreateSecondaryAuthTokenResponse:
        r"""Create a new secondary Auth Token
        """
        
        base_url = operations.CREATE_SECONDARY_AUTH_TOKEN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/AuthTokens/Secondary"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSecondaryAuthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1SecondaryAuthToken])
                res.accounts_v1_secondary_auth_token = out

        return res

    
    def delete_credential_aws(self, request: operations.DeleteCredentialAwsRequest) -> operations.DeleteCredentialAwsResponse:
        r"""Delete a Credential from your account
        """
        
        base_url = operations.DELETE_CREDENTIAL_AWS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/AWS/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCredentialAwsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_credential_public_key(self, request: operations.DeleteCredentialPublicKeyRequest) -> operations.DeleteCredentialPublicKeyResponse:
        r"""Delete a Credential from your account
        """
        
        base_url = operations.DELETE_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/PublicKeys/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_secondary_auth_token(self, request: operations.DeleteSecondaryAuthTokenRequest) -> operations.DeleteSecondaryAuthTokenResponse:
        r"""Delete the secondary Auth Token from your account
        """
        
        base_url = operations.DELETE_SECONDARY_AUTH_TOKEN_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/AuthTokens/Secondary"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSecondaryAuthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_credential_aws(self, request: operations.FetchCredentialAwsRequest) -> operations.FetchCredentialAwsResponse:
        r"""Fetch the AWS credentials specified by the provided Credential Sid
        """
        
        base_url = operations.FETCH_CREDENTIAL_AWS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/AWS/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCredentialAwsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialAws])
                res.accounts_v1_credential_credential_aws = out

        return res

    
    def fetch_credential_public_key(self, request: operations.FetchCredentialPublicKeyRequest) -> operations.FetchCredentialPublicKeyResponse:
        r"""Fetch the public key specified by the provided Credential Sid
        """
        
        base_url = operations.FETCH_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/PublicKeys/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialPublicKey])
                res.accounts_v1_credential_credential_public_key = out

        return res

    
    def list_credential_aws(self, request: operations.ListCredentialAwsRequest) -> operations.ListCredentialAwsResponse:
        r"""Retrieves a collection of AWS Credentials belonging to the account used to make the request
        """
        
        base_url = operations.LIST_CREDENTIAL_AWS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Credentials/AWS"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCredentialAwsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCredentialAwsListCredentialAwsResponse])
                res.list_credential_aws_response = out

        return res

    
    def list_credential_public_key(self, request: operations.ListCredentialPublicKeyRequest) -> operations.ListCredentialPublicKeyResponse:
        r"""Retrieves a collection of Public Key Credentials belonging to the account used to make the request
        """
        
        base_url = operations.LIST_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Credentials/PublicKeys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCredentialPublicKeyListCredentialPublicKeyResponse])
                res.list_credential_public_key_response = out

        return res

    
    def update_auth_token_promotion(self, request: operations.UpdateAuthTokenPromotionRequest) -> operations.UpdateAuthTokenPromotionResponse:
        r"""Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
        """
        
        base_url = operations.UPDATE_AUTH_TOKEN_PROMOTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/AuthTokens/Promote"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAuthTokenPromotionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1AuthTokenPromotion])
                res.accounts_v1_auth_token_promotion = out

        return res

    
    def update_credential_aws(self, request: operations.UpdateCredentialAwsRequest) -> operations.UpdateCredentialAwsResponse:
        r"""Modify the properties of a given Account
        """
        
        base_url = operations.UPDATE_CREDENTIAL_AWS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/AWS/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCredentialAwsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialAws])
                res.accounts_v1_credential_credential_aws = out

        return res

    
    def update_credential_public_key(self, request: operations.UpdateCredentialPublicKeyRequest) -> operations.UpdateCredentialPublicKeyResponse:
        r"""Modify the properties of a given Account
        """
        
        base_url = operations.UPDATE_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/PublicKeys/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialPublicKey])
                res.accounts_v1_credential_credential_public_key = out

        return res

    