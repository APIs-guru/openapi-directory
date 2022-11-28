

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://taskrouter.twilio.com",
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
        
    
    
    
    def create_activity(self, request: operations.CreateActivityRequest) -> operations.CreateActivityResponse:
        base_url = operations.CREATE_ACTIVITY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Activities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceActivity])
                res.taskrouter_v1_workspace_activity = out

        return res

    
    def create_task(self, request: operations.CreateTaskRequest) -> operations.CreateTaskResponse:
        base_url = operations.CREATE_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Tasks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTask])
                res.taskrouter_v1_workspace_task = out

        return res

    
    def create_task_channel(self, request: operations.CreateTaskChannelRequest) -> operations.CreateTaskChannelResponse:
        base_url = operations.CREATE_TASK_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskChannels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTaskChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskChannel])
                res.taskrouter_v1_workspace_task_channel = out

        return res

    
    def create_task_queue(self, request: operations.CreateTaskQueueRequest) -> operations.CreateTaskQueueResponse:
        base_url = operations.CREATE_TASK_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskQueues", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTaskQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskQueue])
                res.taskrouter_v1_workspace_task_queue = out

        return res

    
    def create_worker(self, request: operations.CreateWorkerRequest) -> operations.CreateWorkerResponse:
        base_url = operations.CREATE_WORKER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWorkerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorker])
                res.taskrouter_v1_workspace_worker = out

        return res

    
    def create_workflow(self, request: operations.CreateWorkflowRequest) -> operations.CreateWorkflowResponse:
        base_url = operations.CREATE_WORKFLOW_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workflows", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkflow])
                res.taskrouter_v1_workspace_workflow = out

        return res

    
    def create_workspace(self, request: operations.CreateWorkspaceRequest) -> operations.CreateWorkspaceResponse:
        base_url = operations.CREATE_WORKSPACE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Workspaces"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1Workspace])
                res.taskrouter_v1_workspace = out

        return res

    
    def delete_activity(self, request: operations.DeleteActivityRequest) -> operations.DeleteActivityResponse:
        base_url = operations.DELETE_ACTIVITY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_task(self, request: operations.DeleteTaskRequest) -> operations.DeleteTaskResponse:
        base_url = operations.DELETE_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_task_channel(self, request: operations.DeleteTaskChannelRequest) -> operations.DeleteTaskChannelResponse:
        base_url = operations.DELETE_TASK_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTaskChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_task_queue(self, request: operations.DeleteTaskQueueRequest) -> operations.DeleteTaskQueueResponse:
        base_url = operations.DELETE_TASK_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTaskQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_worker(self, request: operations.DeleteWorkerRequest) -> operations.DeleteWorkerResponse:
        base_url = operations.DELETE_WORKER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_workflow(self, request: operations.DeleteWorkflowRequest) -> operations.DeleteWorkflowResponse:
        base_url = operations.DELETE_WORKFLOW_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_workspace(self, request: operations.DeleteWorkspaceRequest) -> operations.DeleteWorkspaceResponse:
        base_url = operations.DELETE_WORKSPACE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_activity(self, request: operations.FetchActivityRequest) -> operations.FetchActivityResponse:
        base_url = operations.FETCH_ACTIVITY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceActivity])
                res.taskrouter_v1_workspace_activity = out

        return res

    
    def fetch_event(self, request: operations.FetchEventRequest) -> operations.FetchEventResponse:
        base_url = operations.FETCH_EVENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Events/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceEvent])
                res.taskrouter_v1_workspace_event = out

        return res

    
    def fetch_task(self, request: operations.FetchTaskRequest) -> operations.FetchTaskResponse:
        base_url = operations.FETCH_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTask])
                res.taskrouter_v1_workspace_task = out

        return res

    
    def fetch_task_channel(self, request: operations.FetchTaskChannelRequest) -> operations.FetchTaskChannelResponse:
        base_url = operations.FETCH_TASK_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskChannel])
                res.taskrouter_v1_workspace_task_channel = out

        return res

    
    def fetch_task_queue(self, request: operations.FetchTaskQueueRequest) -> operations.FetchTaskQueueResponse:
        base_url = operations.FETCH_TASK_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskQueue])
                res.taskrouter_v1_workspace_task_queue = out

        return res

    
    def fetch_task_queue_cumulative_statistics(self, request: operations.FetchTaskQueueCumulativeStatisticsRequest) -> operations.FetchTaskQueueCumulativeStatisticsResponse:
        base_url = operations.FETCH_TASK_QUEUE_CUMULATIVE_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskQueueCumulativeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics])
                res.taskrouter_v1_workspace_task_queue_task_queue_cumulative_statistics = out

        return res

    
    def fetch_task_queue_real_time_statistics(self, request: operations.FetchTaskQueueRealTimeStatisticsRequest) -> operations.FetchTaskQueueRealTimeStatisticsResponse:
        base_url = operations.FETCH_TASK_QUEUE_REAL_TIME_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskQueueRealTimeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics])
                res.taskrouter_v1_workspace_task_queue_task_queue_real_time_statistics = out

        return res

    
    def fetch_task_queue_statistics(self, request: operations.FetchTaskQueueStatisticsRequest) -> operations.FetchTaskQueueStatisticsResponse:
        base_url = operations.FETCH_TASK_QUEUE_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/Statistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskQueueStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics])
                res.taskrouter_v1_workspace_task_queue_task_queue_statistics = out

        return res

    
    def fetch_task_reservation(self, request: operations.FetchTaskReservationRequest) -> operations.FetchTaskReservationResponse:
        base_url = operations.FETCH_TASK_RESERVATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskReservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskTaskReservation])
                res.taskrouter_v1_workspace_task_task_reservation = out

        return res

    
    def fetch_worker(self, request: operations.FetchWorkerRequest) -> operations.FetchWorkerResponse:
        base_url = operations.FETCH_WORKER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorker])
                res.taskrouter_v1_workspace_worker = out

        return res

    
    def fetch_worker_channel(self, request: operations.FetchWorkerChannelRequest) -> operations.FetchWorkerChannelResponse:
        base_url = operations.FETCH_WORKER_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkerChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkerWorkerChannel])
                res.taskrouter_v1_workspace_worker_worker_channel = out

        return res

    
    def fetch_worker_instance_statistics(self, request: operations.FetchWorkerInstanceStatisticsRequest) -> operations.FetchWorkerInstanceStatisticsResponse:
        base_url = operations.FETCH_WORKER_INSTANCE_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkerInstanceStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics])
                res.taskrouter_v1_workspace_worker_worker_instance_statistics = out

        return res

    
    def fetch_worker_reservation(self, request: operations.FetchWorkerReservationRequest) -> operations.FetchWorkerReservationResponse:
        base_url = operations.FETCH_WORKER_RESERVATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkerReservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkerWorkerReservation])
                res.taskrouter_v1_workspace_worker_worker_reservation = out

        return res

    
    def fetch_worker_statistics(self, request: operations.FetchWorkerStatisticsRequest) -> operations.FetchWorkerStatisticsResponse:
        base_url = operations.FETCH_WORKER_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/Statistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkerStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkerWorkerStatistics])
                res.taskrouter_v1_workspace_worker_worker_statistics = out

        return res

    
    def fetch_workers_cumulative_statistics(self, request: operations.FetchWorkersCumulativeStatisticsRequest) -> operations.FetchWorkersCumulativeStatisticsResponse:
        base_url = operations.FETCH_WORKERS_CUMULATIVE_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkersCumulativeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics])
                res.taskrouter_v1_workspace_worker_workers_cumulative_statistics = out

        return res

    
    def fetch_workers_real_time_statistics(self, request: operations.FetchWorkersRealTimeStatisticsRequest) -> operations.FetchWorkersRealTimeStatisticsResponse:
        base_url = operations.FETCH_WORKERS_REAL_TIME_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkersRealTimeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics])
                res.taskrouter_v1_workspace_worker_workers_real_time_statistics = out

        return res

    
    def fetch_workflow(self, request: operations.FetchWorkflowRequest) -> operations.FetchWorkflowResponse:
        base_url = operations.FETCH_WORKFLOW_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkflow])
                res.taskrouter_v1_workspace_workflow = out

        return res

    
    def fetch_workflow_cumulative_statistics(self, request: operations.FetchWorkflowCumulativeStatisticsRequest) -> operations.FetchWorkflowCumulativeStatisticsResponse:
        base_url = operations.FETCH_WORKFLOW_CUMULATIVE_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkflowCumulativeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics])
                res.taskrouter_v1_workspace_workflow_workflow_cumulative_statistics = out

        return res

    
    def fetch_workflow_real_time_statistics(self, request: operations.FetchWorkflowRealTimeStatisticsRequest) -> operations.FetchWorkflowRealTimeStatisticsResponse:
        base_url = operations.FETCH_WORKFLOW_REAL_TIME_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkflowRealTimeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics])
                res.taskrouter_v1_workspace_workflow_workflow_real_time_statistics = out

        return res

    
    def fetch_workflow_statistics(self, request: operations.FetchWorkflowStatisticsRequest) -> operations.FetchWorkflowStatisticsResponse:
        base_url = operations.FETCH_WORKFLOW_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/Statistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkflowStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkflowWorkflowStatistics])
                res.taskrouter_v1_workspace_workflow_workflow_statistics = out

        return res

    
    def fetch_workspace(self, request: operations.FetchWorkspaceRequest) -> operations.FetchWorkspaceResponse:
        base_url = operations.FETCH_WORKSPACE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1Workspace])
                res.taskrouter_v1_workspace = out

        return res

    
    def fetch_workspace_cumulative_statistics(self, request: operations.FetchWorkspaceCumulativeStatisticsRequest) -> operations.FetchWorkspaceCumulativeStatisticsResponse:
        base_url = operations.FETCH_WORKSPACE_CUMULATIVE_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/CumulativeStatistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkspaceCumulativeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkspaceCumulativeStatistics])
                res.taskrouter_v1_workspace_workspace_cumulative_statistics = out

        return res

    
    def fetch_workspace_real_time_statistics(self, request: operations.FetchWorkspaceRealTimeStatisticsRequest) -> operations.FetchWorkspaceRealTimeStatisticsResponse:
        base_url = operations.FETCH_WORKSPACE_REAL_TIME_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/RealTimeStatistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkspaceRealTimeStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkspaceRealTimeStatistics])
                res.taskrouter_v1_workspace_workspace_real_time_statistics = out

        return res

    
    def fetch_workspace_statistics(self, request: operations.FetchWorkspaceStatisticsRequest) -> operations.FetchWorkspaceStatisticsResponse:
        base_url = operations.FETCH_WORKSPACE_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Statistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWorkspaceStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkspaceStatistics])
                res.taskrouter_v1_workspace_workspace_statistics = out

        return res

    
    def list_activity(self, request: operations.ListActivityRequest) -> operations.ListActivityResponse:
        base_url = operations.LIST_ACTIVITY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Activities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListActivityListActivityResponse])
                res.list_activity_response = out

        return res

    
    def list_event(self, request: operations.ListEventRequest) -> operations.ListEventResponse:
        base_url = operations.LIST_EVENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEventListEventResponse])
                res.list_event_response = out

        return res

    
    def list_task(self, request: operations.ListTaskRequest) -> operations.ListTaskResponse:
        base_url = operations.LIST_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Tasks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTaskListTaskResponse])
                res.list_task_response = out

        return res

    
    def list_task_channel(self, request: operations.ListTaskChannelRequest) -> operations.ListTaskChannelResponse:
        base_url = operations.LIST_TASK_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskChannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTaskChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTaskChannelListTaskChannelResponse])
                res.list_task_channel_response = out

        return res

    
    def list_task_queue(self, request: operations.ListTaskQueueRequest) -> operations.ListTaskQueueResponse:
        base_url = operations.LIST_TASK_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskQueues", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTaskQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTaskQueueListTaskQueueResponse])
                res.list_task_queue_response = out

        return res

    
    def list_task_queues_statistics(self, request: operations.ListTaskQueuesStatisticsRequest) -> operations.ListTaskQueuesStatisticsResponse:
        base_url = operations.LIST_TASK_QUEUES_STATISTICS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTaskQueuesStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse])
                res.list_task_queues_statistics_response = out

        return res

    
    def list_task_reservation(self, request: operations.ListTaskReservationRequest) -> operations.ListTaskReservationResponse:
        base_url = operations.LIST_TASK_RESERVATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTaskReservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTaskReservationListTaskReservationResponse])
                res.list_task_reservation_response = out

        return res

    
    def list_worker(self, request: operations.ListWorkerRequest) -> operations.ListWorkerResponse:
        base_url = operations.LIST_WORKER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWorkerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWorkerListWorkerResponse])
                res.list_worker_response = out

        return res

    
    def list_worker_channel(self, request: operations.ListWorkerChannelRequest) -> operations.ListWorkerChannelResponse:
        base_url = operations.LIST_WORKER_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWorkerChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWorkerChannelListWorkerChannelResponse])
                res.list_worker_channel_response = out

        return res

    
    def list_worker_reservation(self, request: operations.ListWorkerReservationRequest) -> operations.ListWorkerReservationResponse:
        base_url = operations.LIST_WORKER_RESERVATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWorkerReservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWorkerReservationListWorkerReservationResponse])
                res.list_worker_reservation_response = out

        return res

    
    def list_workflow(self, request: operations.ListWorkflowRequest) -> operations.ListWorkflowResponse:
        base_url = operations.LIST_WORKFLOW_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workflows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWorkflowListWorkflowResponse])
                res.list_workflow_response = out

        return res

    
    def list_workspace(self, request: operations.ListWorkspaceRequest) -> operations.ListWorkspaceResponse:
        base_url = operations.LIST_WORKSPACE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Workspaces"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWorkspaceListWorkspaceResponse])
                res.list_workspace_response = out

        return res

    
    def update_activity(self, request: operations.UpdateActivityRequest) -> operations.UpdateActivityResponse:
        base_url = operations.UPDATE_ACTIVITY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Activities/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceActivity])
                res.taskrouter_v1_workspace_activity = out

        return res

    
    def update_task(self, request: operations.UpdateTaskRequest) -> operations.UpdateTaskResponse:
        base_url = operations.UPDATE_TASK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTask])
                res.taskrouter_v1_workspace_task = out

        return res

    
    def update_task_channel(self, request: operations.UpdateTaskChannelRequest) -> operations.UpdateTaskChannelResponse:
        base_url = operations.UPDATE_TASK_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskChannel])
                res.taskrouter_v1_workspace_task_channel = out

        return res

    
    def update_task_queue(self, request: operations.UpdateTaskQueueRequest) -> operations.UpdateTaskQueueResponse:
        base_url = operations.UPDATE_TASK_QUEUE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskQueue])
                res.taskrouter_v1_workspace_task_queue = out

        return res

    
    def update_task_reservation(self, request: operations.UpdateTaskReservationRequest) -> operations.UpdateTaskReservationResponse:
        base_url = operations.UPDATE_TASK_RESERVATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskReservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceTaskTaskReservation])
                res.taskrouter_v1_workspace_task_task_reservation = out

        return res

    
    def update_worker(self, request: operations.UpdateWorkerRequest) -> operations.UpdateWorkerResponse:
        base_url = operations.UPDATE_WORKER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWorkerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorker])
                res.taskrouter_v1_workspace_worker = out

        return res

    
    def update_worker_channel(self, request: operations.UpdateWorkerChannelRequest) -> operations.UpdateWorkerChannelResponse:
        base_url = operations.UPDATE_WORKER_CHANNEL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWorkerChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkerWorkerChannel])
                res.taskrouter_v1_workspace_worker_worker_channel = out

        return res

    
    def update_worker_reservation(self, request: operations.UpdateWorkerReservationRequest) -> operations.UpdateWorkerReservationResponse:
        base_url = operations.UPDATE_WORKER_RESERVATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWorkerReservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkerWorkerReservation])
                res.taskrouter_v1_workspace_worker_worker_reservation = out

        return res

    
    def update_workflow(self, request: operations.UpdateWorkflowRequest) -> operations.UpdateWorkflowResponse:
        base_url = operations.UPDATE_WORKFLOW_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWorkflowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1WorkspaceWorkflow])
                res.taskrouter_v1_workspace_workflow = out

        return res

    
    def update_workspace(self, request: operations.UpdateWorkspaceRequest) -> operations.UpdateWorkspaceResponse:
        base_url = operations.UPDATE_WORKSPACE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Workspaces/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TaskrouterV1Workspace])
                res.taskrouter_v1_workspace = out

        return res

    