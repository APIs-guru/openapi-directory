

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://notify.twilio.com",
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
        
    
    
    
    def create_binding(self, request: operations.CreateBindingRequest) -> operations.CreateBindingResponse:
        base_url = operations.CREATE_BINDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Bindings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBindingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotifyV1ServiceBinding])
                res.notify_v1_service_binding = out

        return res

    
    def create_credential(self, request: operations.CreateCredentialRequest) -> operations.CreateCredentialResponse:
        base_url = operations.CREATE_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Credentials"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotifyV1Credential])
                res.notify_v1_credential = out

        return res

    
    def create_notification(self, request: operations.CreateNotificationRequest) -> operations.CreateNotificationResponse:
        base_url = operations.CREATE_NOTIFICATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Notifications", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNotificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotifyV1ServiceNotification])
                res.notify_v1_service_notification = out

        return res

    
    def create_service(self, request: operations.CreateServiceRequest) -> operations.CreateServiceResponse:
        base_url = operations.CREATE_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Services"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotifyV1Service])
                res.notify_v1_service = out

        return res

    
    def delete_binding(self, request: operations.DeleteBindingRequest) -> operations.DeleteBindingResponse:
        base_url = operations.DELETE_BINDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Bindings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBindingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_credential(self, request: operations.DeleteCredentialRequest) -> operations.DeleteCredentialResponse:
        base_url = operations.DELETE_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_service(self, request: operations.DeleteServiceRequest) -> operations.DeleteServiceResponse:
        base_url = operations.DELETE_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_binding(self, request: operations.FetchBindingRequest) -> operations.FetchBindingResponse:
        base_url = operations.FETCH_BINDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Bindings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchBindingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotifyV1ServiceBinding])
                res.notify_v1_service_binding = out

        return res

    
    def fetch_credential(self, request: operations.FetchCredentialRequest) -> operations.FetchCredentialResponse:
        base_url = operations.FETCH_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotifyV1Credential])
                res.notify_v1_credential = out

        return res

    
    def fetch_service(self, request: operations.FetchServiceRequest) -> operations.FetchServiceResponse:
        base_url = operations.FETCH_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotifyV1Service])
                res.notify_v1_service = out

        return res

    
    def list_binding(self, request: operations.ListBindingRequest) -> operations.ListBindingResponse:
        base_url = operations.LIST_BINDING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Bindings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBindingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBindingListBindingResponse])
                res.list_binding_response = out

        return res

    
    def list_credential(self, request: operations.ListCredentialRequest) -> operations.ListCredentialResponse:
        base_url = operations.LIST_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Credentials"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCredentialListCredentialResponse])
                res.list_credential_response = out

        return res

    
    def list_service(self, request: operations.ListServiceRequest) -> operations.ListServiceResponse:
        base_url = operations.LIST_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListServiceListServiceResponse])
                res.list_service_response = out

        return res

    
    def update_credential(self, request: operations.UpdateCredentialRequest) -> operations.UpdateCredentialResponse:
        base_url = operations.UPDATE_CREDENTIAL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Credentials/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotifyV1Credential])
                res.notify_v1_credential = out

        return res

    
    def update_service(self, request: operations.UpdateServiceRequest) -> operations.UpdateServiceResponse:
        base_url = operations.UPDATE_SERVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotifyV1Service])
                res.notify_v1_service = out

        return res

    