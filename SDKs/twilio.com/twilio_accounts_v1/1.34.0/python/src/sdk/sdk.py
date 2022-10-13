import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://accounts.twilio.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    

    
    def create_credential_aws(self, request: operations.CreateCredentialAwsRequest) -> operations.CreateCredentialAwsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CREDENTIAL_AWS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCredentialAwsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialAws])
                res.responses[r.status_code][content_type] = operations.CreateCredentialAwsResponses(accounts_v1_credential_credential_aws=out)

        return res

    
    def create_credential_public_key(self, request: operations.CreateCredentialPublicKeyRequest) -> operations.CreateCredentialPublicKeyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialPublicKey])
                res.responses[r.status_code][content_type] = operations.CreateCredentialPublicKeyResponses(accounts_v1_credential_credential_public_key=out)

        return res

    
    def create_secondary_auth_token(self, request: operations.CreateSecondaryAuthTokenRequest) -> operations.CreateSecondaryAuthTokenResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SECONDARY_AUTH_TOKEN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSecondaryAuthTokenResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1SecondaryAuthToken])
                res.responses[r.status_code][content_type] = operations.CreateSecondaryAuthTokenResponses(accounts_v1_secondary_auth_token=out)

        return res

    
    def delete_credential_aws(self, request: operations.DeleteCredentialAwsRequest) -> operations.DeleteCredentialAwsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CREDENTIAL_AWS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Credentials/AWS/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCredentialAwsResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_credential_public_key(self, request: operations.DeleteCredentialPublicKeyRequest) -> operations.DeleteCredentialPublicKeyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Credentials/PublicKeys/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def delete_secondary_auth_token(self, request: operations.DeleteSecondaryAuthTokenRequest) -> operations.DeleteSecondaryAuthTokenResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SECONDARY_AUTH_TOKEN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSecondaryAuthTokenResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def fetch_credential_aws(self, request: operations.FetchCredentialAwsRequest) -> operations.FetchCredentialAwsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CREDENTIAL_AWS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Credentials/AWS/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCredentialAwsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialAws])
                res.responses[r.status_code][content_type] = operations.FetchCredentialAwsResponses(accounts_v1_credential_credential_aws=out)

        return res

    
    def fetch_credential_public_key(self, request: operations.FetchCredentialPublicKeyRequest) -> operations.FetchCredentialPublicKeyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Credentials/PublicKeys/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialPublicKey])
                res.responses[r.status_code][content_type] = operations.FetchCredentialPublicKeyResponses(accounts_v1_credential_credential_public_key=out)

        return res

    
    def list_credential_aws(self, request: operations.ListCredentialAwsRequest) -> operations.ListCredentialAwsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CREDENTIAL_AWS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCredentialAwsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCredentialAws200ApplicationJSONListCredentialAwsResponse])
                res.responses[r.status_code][content_type] = operations.ListCredentialAwsResponses(list_credential_aws_response=out)

        return res

    
    def list_credential_public_key(self, request: operations.ListCredentialPublicKeyRequest) -> operations.ListCredentialPublicKeyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCredentialPublicKey200ApplicationJSONListCredentialPublicKeyResponse])
                res.responses[r.status_code][content_type] = operations.ListCredentialPublicKeyResponses(list_credential_public_key_response=out)

        return res

    
    def update_auth_token_promotion(self, request: operations.UpdateAuthTokenPromotionRequest) -> operations.UpdateAuthTokenPromotionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_AUTH_TOKEN_PROMOTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAuthTokenPromotionResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1AuthTokenPromotion])
                res.responses[r.status_code][content_type] = operations.UpdateAuthTokenPromotionResponses(accounts_v1_auth_token_promotion=out)

        return res

    
    def update_credential_aws(self, request: operations.UpdateCredentialAwsRequest) -> operations.UpdateCredentialAwsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CREDENTIAL_AWS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Credentials/AWS/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCredentialAwsResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialAws])
                res.responses[r.status_code][content_type] = operations.UpdateCredentialAwsResponses(accounts_v1_credential_credential_aws=out)

        return res

    
    def update_credential_public_key(self, request: operations.UpdateCredentialPublicKeyRequest) -> operations.UpdateCredentialPublicKeyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CREDENTIAL_PUBLIC_KEY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Credentials/PublicKeys/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCredentialPublicKeyResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsV1CredentialCredentialPublicKey])
                res.responses[r.status_code][content_type] = operations.UpdateCredentialPublicKeyResponses(accounts_v1_credential_credential_public_key=out)

        return res

    