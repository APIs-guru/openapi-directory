

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://batch.core.windows.net",
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
        
    
    
    
    def account_list_node_agent_skus(self, request: operations.AccountListNodeAgentSkusRequest) -> operations.AccountListNodeAgentSkusResponse:
        r"""Lists all node agent SKUs supported by the Azure Batch service.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nodeagentskus"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountListNodeAgentSkusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.account_list_node_agent_skus_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def application_get(self, request: operations.ApplicationGetRequest) -> operations.ApplicationGetResponse:
        r"""Gets information about the specified application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/applications/{applicationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.application_summary = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def application_list(self, request: operations.ApplicationListRequest) -> operations.ApplicationListResponse:
        r"""Lists all of the applications available in the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/applications"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.application_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def certificate_add(self, request: operations.CertificateAddRequest) -> operations.CertificateAddResponse:
        r"""Adds a certificate to the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/certificates"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CertificateAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def certificate_cancel_deletion(self, request: operations.CertificateCancelDeletionRequest) -> operations.CertificateCancelDeletionResponse:
        r"""Cancels a failed deletion of a certificate from the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CertificateCancelDeletionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def certificate_delete(self, request: operations.CertificateDeleteRequest) -> operations.CertificateDeleteResponse:
        r"""Deletes a certificate from the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CertificateDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def certificate_get(self, request: operations.CertificateGetRequest) -> operations.CertificateGetResponse:
        r"""Gets information about the specified certificate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CertificateGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.certificate = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def certificate_list(self, request: operations.CertificateListRequest) -> operations.CertificateListResponse:
        r"""Lists all of the certificates that have been added to the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/certificates"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CertificateListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.certificate_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_add_user(self, request: operations.ComputeNodeAddUserRequest) -> operations.ComputeNodeAddUserResponse:
        r"""Adds a user account to the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/users", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeAddUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_delete_user(self, request: operations.ComputeNodeDeleteUserRequest) -> operations.ComputeNodeDeleteUserResponse:
        r"""Deletes a user account from the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/users/{userName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeDeleteUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_disable_scheduling(self, request: operations.ComputeNodeDisableSchedulingRequest) -> operations.ComputeNodeDisableSchedulingResponse:
        r"""Disable task scheduling of the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/disablescheduling", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeDisableSchedulingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_enable_scheduling(self, request: operations.ComputeNodeEnableSchedulingRequest) -> operations.ComputeNodeEnableSchedulingResponse:
        r"""Enable task scheduling of the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/enablescheduling", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeEnableSchedulingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_get(self, request: operations.ComputeNodeGetRequest) -> operations.ComputeNodeGetResponse:
        r"""Gets information about the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.compute_node = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_get_remote_desktop(self, request: operations.ComputeNodeGetRemoteDesktopRequest) -> operations.ComputeNodeGetRemoteDesktopResponse:
        r"""Gets the Remote Desktop Protocol file for the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/rdp", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeGetRemoteDesktopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.compute_node_get_remote_desktop_200_application_json_binary_string = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_get_remote_login_settings(self, request: operations.ComputeNodeGetRemoteLoginSettingsRequest) -> operations.ComputeNodeGetRemoteLoginSettingsResponse:
        r"""Gets the settings required for remote login to a compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/remoteloginsettings", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeGetRemoteLoginSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.compute_node_get_remote_login_settings_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_list(self, request: operations.ComputeNodeListRequest) -> operations.ComputeNodeListResponse:
        r"""Lists the compute nodes in the specified pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.compute_node_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_reboot(self, request: operations.ComputeNodeRebootRequest) -> operations.ComputeNodeRebootResponse:
        r"""Restarts the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/reboot", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeRebootResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_reimage(self, request: operations.ComputeNodeReimageRequest) -> operations.ComputeNodeReimageResponse:
        r"""Reinstalls the operating system on the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/reimage", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeReimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def compute_node_update_user(self, request: operations.ComputeNodeUpdateUserRequest) -> operations.ComputeNodeUpdateUserResponse:
        r"""Updates the password or expiration time of a user account on the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/users/{userName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ComputeNodeUpdateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_delete_from_compute_node(self, request: operations.FileDeleteFromComputeNodeRequest) -> operations.FileDeleteFromComputeNodeResponse:
        r"""Deletes the specified task file from the compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileDeleteFromComputeNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_delete_from_task(self, request: operations.FileDeleteFromTaskRequest) -> operations.FileDeleteFromTaskResponse:
        r"""Deletes the specified task file from the compute node where the task ran.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileDeleteFromTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_get_from_compute_node(self, request: operations.FileGetFromComputeNodeRequest) -> operations.FileGetFromComputeNodeResponse:
        r"""Returns the content of the specified task file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileGetFromComputeNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.file_get_from_compute_node_200_application_json_binary_string = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_get_from_task(self, request: operations.FileGetFromTaskRequest) -> operations.FileGetFromTaskResponse:
        r"""Returns the content of the specified task file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileGetFromTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.file_get_from_task_200_application_json_binary_string = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_get_node_file_properties_from_compute_node(self, request: operations.FileGetNodeFilePropertiesFromComputeNodeRequest) -> operations.FileGetNodeFilePropertiesFromComputeNodeResponse:
        r"""Gets the properties of the specified compute node file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileGetNodeFilePropertiesFromComputeNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_get_node_file_properties_from_task(self, request: operations.FileGetNodeFilePropertiesFromTaskRequest) -> operations.FileGetNodeFilePropertiesFromTaskResponse:
        r"""Gets the properties of the specified task file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/files/{fileName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileGetNodeFilePropertiesFromTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_list_from_compute_node(self, request: operations.FileListFromComputeNodeRequest) -> operations.FileListFromComputeNodeResponse:
        r"""Lists all of the files in task directories on the specified compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/nodes/{nodeId}/files", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileListFromComputeNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.node_file_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def file_list_from_task(self, request: operations.FileListFromTaskRequest) -> operations.FileListFromTaskResponse:
        r"""Lists the files in a task's directory on its compute node.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/files", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FileListFromTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.node_file_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_add(self, request: operations.JobScheduleAddRequest) -> operations.JobScheduleAddResponse:
        r"""Adds a job schedule to the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobschedules"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_delete(self, request: operations.JobScheduleDeleteRequest) -> operations.JobScheduleDeleteResponse:
        r"""Deletes a job schedule from the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_disable(self, request: operations.JobScheduleDisableRequest) -> operations.JobScheduleDisableResponse:
        r"""Disables a job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}/disable", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_enable(self, request: operations.JobScheduleEnableRequest) -> operations.JobScheduleEnableResponse:
        r"""Enables a job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}/enable", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_exists(self, request: operations.JobScheduleExistsRequest) -> operations.JobScheduleExistsResponse:
        r"""Checks the specified job schedule exists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_get(self, request: operations.JobScheduleGetRequest) -> operations.JobScheduleGetResponse:
        r"""Gets information about the specified job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_schedule = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_list(self, request: operations.JobScheduleListRequest) -> operations.JobScheduleListResponse:
        r"""Lists all of the job schedules in the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobschedules"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_schedule_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_patch(self, request: operations.JobSchedulePatchRequest) -> operations.JobSchedulePatchResponse:
        r"""Updates the properties of the specified job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobSchedulePatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_terminate(self, request: operations.JobScheduleTerminateRequest) -> operations.JobScheduleTerminateResponse:
        r"""Terminates a job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}/terminate", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleTerminateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_schedule_update(self, request: operations.JobScheduleUpdateRequest) -> operations.JobScheduleUpdateResponse:
        r"""Updates the properties of the specified job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobScheduleUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_add(self, request: operations.JobAddRequest) -> operations.JobAddResponse:
        r"""Adds a job to the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_delete(self, request: operations.JobDeleteRequest) -> operations.JobDeleteResponse:
        r"""Deletes a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_disable(self, request: operations.JobDisableRequest) -> operations.JobDisableResponse:
        r"""Disables the specified job, preventing new tasks from running.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/disable", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_enable(self, request: operations.JobEnableRequest) -> operations.JobEnableResponse:
        r"""Enables the specified job, allowing new tasks to run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/enable", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_get(self, request: operations.JobGetRequest) -> operations.JobGetResponse:
        r"""Gets information about the specified job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_get_all_jobs_lifetime_statistics(self, request: operations.JobGetAllJobsLifetimeStatisticsRequest) -> operations.JobGetAllJobsLifetimeStatisticsResponse:
        r"""Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lifetimejobstats"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobGetAllJobsLifetimeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.job_statistics = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_list(self, request: operations.JobListRequest) -> operations.JobListResponse:
        r"""Lists all of the jobs in the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jobs"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_list_from_job_schedule(self, request: operations.JobListFromJobScheduleRequest) -> operations.JobListFromJobScheduleResponse:
        r"""Lists the jobs that have been created under the specified job schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobschedules/{jobScheduleId}/jobs", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobListFromJobScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_list_preparation_and_release_task_status(self, request: operations.JobListPreparationAndReleaseTaskStatusRequest) -> operations.JobListPreparationAndReleaseTaskStatusResponse:
        r"""Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/jobpreparationandreleasetaskstatus", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobListPreparationAndReleaseTaskStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_job_list_preparation_and_release_task_status_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_patch(self, request: operations.JobPatchRequest) -> operations.JobPatchResponse:
        r"""Updates the properties of a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_terminate(self, request: operations.JobTerminateRequest) -> operations.JobTerminateResponse:
        r"""Terminates the specified job, marking it as completed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/terminate", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobTerminateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def job_update(self, request: operations.JobUpdateRequest) -> operations.JobUpdateResponse:
        r"""Updates the properties of a job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_add(self, request: operations.PoolAddRequest) -> operations.PoolAddResponse:
        r"""Adds a pool to the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pools"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_delete(self, request: operations.PoolDeleteRequest) -> operations.PoolDeleteResponse:
        r"""Deletes a pool from the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_disable_auto_scale(self, request: operations.PoolDisableAutoScaleRequest) -> operations.PoolDisableAutoScaleResponse:
        r"""Disables automatic scaling for a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/disableautoscale", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolDisableAutoScaleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_enable_auto_scale(self, request: operations.PoolEnableAutoScaleRequest) -> operations.PoolEnableAutoScaleResponse:
        r"""Enables automatic scaling for a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/enableautoscale", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolEnableAutoScaleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_evaluate_auto_scale(self, request: operations.PoolEvaluateAutoScaleRequest) -> operations.PoolEvaluateAutoScaleResponse:
        r"""Gets the result of evaluating an automatic scaling formula on the pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/evaluateautoscale", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolEvaluateAutoScaleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.auto_scale_run = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_exists(self, request: operations.PoolExistsRequest) -> operations.PoolExistsResponse:
        r"""Gets basic properties of a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("HEAD", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolExistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        elif r.status_code == 404:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_get(self, request: operations.PoolGetRequest) -> operations.PoolGetResponse:
        r"""Gets information about the specified pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_pool = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_get_all_pools_lifetime_statistics(self, request: operations.PoolGetAllPoolsLifetimeStatisticsRequest) -> operations.PoolGetAllPoolsLifetimeStatisticsResponse:
        r"""Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lifetimepoolstats"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolGetAllPoolsLifetimeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pool_statistics = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_list(self, request: operations.PoolListRequest) -> operations.PoolListResponse:
        r"""Lists all of the pools in the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pools"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_pool_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_list_pool_usage_metrics(self, request: operations.PoolListPoolUsageMetricsRequest) -> operations.PoolListPoolUsageMetricsResponse:
        r"""Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/poolusagemetrics"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolListPoolUsageMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.pool_list_pool_usage_metrics_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_patch(self, request: operations.PoolPatchRequest) -> operations.PoolPatchResponse:
        r"""Updates the properties of a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_remove_nodes(self, request: operations.PoolRemoveNodesRequest) -> operations.PoolRemoveNodesResponse:
        r"""Removes compute nodes from the specified pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/removenodes", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolRemoveNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_resize(self, request: operations.PoolResizeRequest) -> operations.PoolResizeResponse:
        r"""Changes the number of compute nodes that are assigned to a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/resize", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolResizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_stop_resize(self, request: operations.PoolStopResizeRequest) -> operations.PoolStopResizeResponse:
        r"""Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/stopresize", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolStopResizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_update_properties(self, request: operations.PoolUpdatePropertiesRequest) -> operations.PoolUpdatePropertiesResponse:
        r"""Updates the properties of a pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/updateproperties", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolUpdatePropertiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def pool_upgrade_os(self, request: operations.PoolUpgradeOsRequest) -> operations.PoolUpgradeOsResponse:
        r"""Upgrades the operating system of the specified pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pools/{poolId}/upgradeos", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PoolUpgradeOsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def task_add(self, request: operations.TaskAddRequest) -> operations.TaskAddResponse:
        r"""Adds a task to the specified job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaskAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def task_add_collection(self, request: operations.TaskAddCollectionRequest) -> operations.TaskAddCollectionResponse:
        r"""Adds a collection of tasks to the specified job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/addtaskcollection", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaskAddCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.task_add_collection_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def task_delete(self, request: operations.TaskDeleteRequest) -> operations.TaskDeleteResponse:
        r"""Deletes a task from the specified job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaskDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def task_get(self, request: operations.TaskGetRequest) -> operations.TaskGetResponse:
        r"""Gets information about the specified task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaskGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_task = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def task_list(self, request: operations.TaskListRequest) -> operations.TaskListResponse:
        r"""Lists all of the tasks that are associated with the specified job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaskListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_task_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def task_list_subtasks(self, request: operations.TaskListSubtasksRequest) -> operations.TaskListSubtasksResponse:
        r"""Lists all of the subtasks that are associated with the specified multi-instance task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/subtasksinfo", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaskListSubtasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_task_list_subtasks_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def task_terminate(self, request: operations.TaskTerminateRequest) -> operations.TaskTerminateResponse:
        r"""Terminates the specified task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}/terminate", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaskTerminateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    
    def task_update(self, request: operations.TaskUpdateRequest) -> operations.TaskUpdateResponse:
        r"""Updates the properties of the specified task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jobs/{jobId}/tasks/{taskId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaskUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.batch_error = out

        return res

    