

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://sync.twilio.com",
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
        
    
    
    
    def create_document(self, request: operations.CreateDocumentRequest) -> operations.CreateDocumentResponse:
        base_url = operations.CREATE_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Documents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceDocument])
                res.sync_v1_service_document = out

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
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1Service])
                res.sync_v1_service = out

        return res

    
    def create_stream_message(self, request: operations.CreateStreamMessageRequest) -> operations.CreateStreamMessageResponse:
        r"""Create a new Stream Message.
        """
        
        base_url = operations.CREATE_STREAM_MESSAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateStreamMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncStreamStreamMessage])
                res.sync_v1_service_sync_stream_stream_message = out

        return res

    
    def create_sync_list(self, request: operations.CreateSyncListRequest) -> operations.CreateSyncListResponse:
        base_url = operations.CREATE_SYNC_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncList])
                res.sync_v1_service_sync_list = out

        return res

    
    def create_sync_list_item(self, request: operations.CreateSyncListItemRequest) -> operations.CreateSyncListItemResponse:
        base_url = operations.CREATE_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncListSyncListItem])
                res.sync_v1_service_sync_list_sync_list_item = out

        return res

    
    def create_sync_map(self, request: operations.CreateSyncMapRequest) -> operations.CreateSyncMapResponse:
        base_url = operations.CREATE_SYNC_MAP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncMap])
                res.sync_v1_service_sync_map = out

        return res

    
    def create_sync_map_item(self, request: operations.CreateSyncMapItemRequest) -> operations.CreateSyncMapItemResponse:
        base_url = operations.CREATE_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncMapSyncMapItem])
                res.sync_v1_service_sync_map_sync_map_item = out

        return res

    
    def create_sync_stream(self, request: operations.CreateSyncStreamRequest) -> operations.CreateSyncStreamResponse:
        r"""Create a new Stream.
        """
        
        base_url = operations.CREATE_SYNC_STREAM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Streams", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSyncStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncStream])
                res.sync_v1_service_sync_stream = out

        return res

    
    def delete_document(self, request: operations.DeleteDocumentRequest) -> operations.DeleteDocumentResponse:
        base_url = operations.DELETE_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Documents/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_document_permission(self, request: operations.DeleteDocumentPermissionRequest) -> operations.DeleteDocumentPermissionResponse:
        r"""Delete a specific Sync Document Permission.
        """
        
        base_url = operations.DELETE_DOCUMENT_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDocumentPermissionResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_sync_list(self, request: operations.DeleteSyncListRequest) -> operations.DeleteSyncListResponse:
        base_url = operations.DELETE_SYNC_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_list_item(self, request: operations.DeleteSyncListItemRequest) -> operations.DeleteSyncListItemResponse:
        base_url = operations.DELETE_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_list_permission(self, request: operations.DeleteSyncListPermissionRequest) -> operations.DeleteSyncListPermissionResponse:
        r"""Delete a specific Sync List Permission.
        """
        
        base_url = operations.DELETE_SYNC_LIST_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncListPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_map(self, request: operations.DeleteSyncMapRequest) -> operations.DeleteSyncMapResponse:
        base_url = operations.DELETE_SYNC_MAP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_map_item(self, request: operations.DeleteSyncMapItemRequest) -> operations.DeleteSyncMapItemResponse:
        base_url = operations.DELETE_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_map_permission(self, request: operations.DeleteSyncMapPermissionRequest) -> operations.DeleteSyncMapPermissionResponse:
        r"""Delete a specific Sync Map Permission.
        """
        
        base_url = operations.DELETE_SYNC_MAP_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncMapPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sync_stream(self, request: operations.DeleteSyncStreamRequest) -> operations.DeleteSyncStreamResponse:
        r"""Delete a specific Stream.
        """
        
        base_url = operations.DELETE_SYNC_STREAM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Streams/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSyncStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_document(self, request: operations.FetchDocumentRequest) -> operations.FetchDocumentResponse:
        base_url = operations.FETCH_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Documents/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceDocument])
                res.sync_v1_service_document = out

        return res

    
    def fetch_document_permission(self, request: operations.FetchDocumentPermissionRequest) -> operations.FetchDocumentPermissionResponse:
        r"""Fetch a specific Sync Document Permission.
        """
        
        base_url = operations.FETCH_DOCUMENT_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDocumentPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceDocumentDocumentPermission])
                res.sync_v1_service_document_document_permission = out

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
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1Service])
                res.sync_v1_service = out

        return res

    
    def fetch_sync_list(self, request: operations.FetchSyncListRequest) -> operations.FetchSyncListResponse:
        base_url = operations.FETCH_SYNC_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncList])
                res.sync_v1_service_sync_list = out

        return res

    
    def fetch_sync_list_item(self, request: operations.FetchSyncListItemRequest) -> operations.FetchSyncListItemResponse:
        base_url = operations.FETCH_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncListSyncListItem])
                res.sync_v1_service_sync_list_sync_list_item = out

        return res

    
    def fetch_sync_list_permission(self, request: operations.FetchSyncListPermissionRequest) -> operations.FetchSyncListPermissionResponse:
        r"""Fetch a specific Sync List Permission.
        """
        
        base_url = operations.FETCH_SYNC_LIST_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncListPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncListSyncListPermission])
                res.sync_v1_service_sync_list_sync_list_permission = out

        return res

    
    def fetch_sync_map(self, request: operations.FetchSyncMapRequest) -> operations.FetchSyncMapResponse:
        base_url = operations.FETCH_SYNC_MAP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncMap])
                res.sync_v1_service_sync_map = out

        return res

    
    def fetch_sync_map_item(self, request: operations.FetchSyncMapItemRequest) -> operations.FetchSyncMapItemResponse:
        base_url = operations.FETCH_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncMapSyncMapItem])
                res.sync_v1_service_sync_map_sync_map_item = out

        return res

    
    def fetch_sync_map_permission(self, request: operations.FetchSyncMapPermissionRequest) -> operations.FetchSyncMapPermissionResponse:
        r"""Fetch a specific Sync Map Permission.
        """
        
        base_url = operations.FETCH_SYNC_MAP_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncMapPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncMapSyncMapPermission])
                res.sync_v1_service_sync_map_sync_map_permission = out

        return res

    
    def fetch_sync_stream(self, request: operations.FetchSyncStreamRequest) -> operations.FetchSyncStreamResponse:
        r"""Fetch a specific Stream.
        """
        
        base_url = operations.FETCH_SYNC_STREAM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Streams/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSyncStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncStream])
                res.sync_v1_service_sync_stream = out

        return res

    
    def list_document(self, request: operations.ListDocumentRequest) -> operations.ListDocumentResponse:
        base_url = operations.LIST_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Documents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDocumentListDocumentResponse])
                res.list_document_response = out

        return res

    
    def list_document_permission(self, request: operations.ListDocumentPermissionRequest) -> operations.ListDocumentPermissionResponse:
        r"""Retrieve a list of all Permissions applying to a Sync Document.
        """
        
        base_url = operations.LIST_DOCUMENT_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDocumentPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDocumentPermissionListDocumentPermissionResponse])
                res.list_document_permission_response = out

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

    
    def list_sync_list(self, request: operations.ListSyncListRequest) -> operations.ListSyncListResponse:
        base_url = operations.LIST_SYNC_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncListListSyncListResponse])
                res.list_sync_list_response = out

        return res

    
    def list_sync_list_item(self, request: operations.ListSyncListItemRequest) -> operations.ListSyncListItemResponse:
        base_url = operations.LIST_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncListItemListSyncListItemResponse])
                res.list_sync_list_item_response = out

        return res

    
    def list_sync_list_permission(self, request: operations.ListSyncListPermissionRequest) -> operations.ListSyncListPermissionResponse:
        r"""Retrieve a list of all Permissions applying to a Sync List.
        """
        
        base_url = operations.LIST_SYNC_LIST_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncListPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncListPermissionListSyncListPermissionResponse])
                res.list_sync_list_permission_response = out

        return res

    
    def list_sync_map(self, request: operations.ListSyncMapRequest) -> operations.ListSyncMapResponse:
        base_url = operations.LIST_SYNC_MAP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncMapListSyncMapResponse])
                res.list_sync_map_response = out

        return res

    
    def list_sync_map_item(self, request: operations.ListSyncMapItemRequest) -> operations.ListSyncMapItemResponse:
        base_url = operations.LIST_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncMapItemListSyncMapItemResponse])
                res.list_sync_map_item_response = out

        return res

    
    def list_sync_map_permission(self, request: operations.ListSyncMapPermissionRequest) -> operations.ListSyncMapPermissionResponse:
        r"""Retrieve a list of all Permissions applying to a Sync Map.
        """
        
        base_url = operations.LIST_SYNC_MAP_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncMapPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncMapPermissionListSyncMapPermissionResponse])
                res.list_sync_map_permission_response = out

        return res

    
    def list_sync_stream(self, request: operations.ListSyncStreamRequest) -> operations.ListSyncStreamResponse:
        r"""Retrieve a list of all Streams in a Service Instance.
        """
        
        base_url = operations.LIST_SYNC_STREAM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Streams", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSyncStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSyncStreamListSyncStreamResponse])
                res.list_sync_stream_response = out

        return res

    
    def update_document(self, request: operations.UpdateDocumentRequest) -> operations.UpdateDocumentResponse:
        base_url = operations.UPDATE_DOCUMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Documents/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceDocument])
                res.sync_v1_service_document = out

        return res

    
    def update_document_permission(self, request: operations.UpdateDocumentPermissionRequest) -> operations.UpdateDocumentPermissionResponse:
        r"""Update an identity's access to a specific Sync Document.
        """
        
        base_url = operations.UPDATE_DOCUMENT_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDocumentPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceDocumentDocumentPermission])
                res.sync_v1_service_document_document_permission = out

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
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1Service])
                res.sync_v1_service = out

        return res

    
    def update_sync_list(self, request: operations.UpdateSyncListRequest) -> operations.UpdateSyncListResponse:
        base_url = operations.UPDATE_SYNC_LIST_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncList])
                res.sync_v1_service_sync_list = out

        return res

    
    def update_sync_list_item(self, request: operations.UpdateSyncListItemRequest) -> operations.UpdateSyncListItemResponse:
        base_url = operations.UPDATE_SYNC_LIST_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncListItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncListSyncListItem])
                res.sync_v1_service_sync_list_sync_list_item = out

        return res

    
    def update_sync_list_permission(self, request: operations.UpdateSyncListPermissionRequest) -> operations.UpdateSyncListPermissionResponse:
        r"""Update an identity's access to a specific Sync List.
        """
        
        base_url = operations.UPDATE_SYNC_LIST_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncListPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncListSyncListPermission])
                res.sync_v1_service_sync_list_sync_list_permission = out

        return res

    
    def update_sync_map(self, request: operations.UpdateSyncMapRequest) -> operations.UpdateSyncMapResponse:
        base_url = operations.UPDATE_SYNC_MAP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncMap])
                res.sync_v1_service_sync_map = out

        return res

    
    def update_sync_map_item(self, request: operations.UpdateSyncMapItemRequest) -> operations.UpdateSyncMapItemResponse:
        base_url = operations.UPDATE_SYNC_MAP_ITEM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncMapItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncMapSyncMapItem])
                res.sync_v1_service_sync_map_sync_map_item = out

        return res

    
    def update_sync_map_permission(self, request: operations.UpdateSyncMapPermissionRequest) -> operations.UpdateSyncMapPermissionResponse:
        r"""Update an identity's access to a specific Sync Map.
        """
        
        base_url = operations.UPDATE_SYNC_MAP_PERMISSION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncMapPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncMapSyncMapPermission])
                res.sync_v1_service_sync_map_sync_map_permission = out

        return res

    
    def update_sync_stream(self, request: operations.UpdateSyncStreamRequest) -> operations.UpdateSyncStreamResponse:
        r"""Update a specific Stream.
        """
        
        base_url = operations.UPDATE_SYNC_STREAM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Services/{ServiceSid}/Streams/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSyncStreamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SyncV1ServiceSyncStream])
                res.sync_v1_service_sync_stream = out

        return res

    