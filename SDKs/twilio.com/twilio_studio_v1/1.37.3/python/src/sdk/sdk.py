

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://studio.twilio.com",
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
        
    
    
    
    def create_engagement(self, request: operations.CreateEngagementRequest) -> operations.CreateEngagementResponse:
        r"""Triggers a new Engagement for the Flow
        """
        
        base_url = operations.CREATE_ENGAGEMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Engagements", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEngagementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowEngagement])
                res.studio_v1_flow_engagement = out

        return res

    
    def create_execution(self, request: operations.CreateExecutionRequest) -> operations.CreateExecutionResponse:
        r"""Triggers a new Execution for the Flow
        """
        
        base_url = operations.CREATE_EXECUTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Executions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateExecutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowExecution])
                res.studio_v1_flow_execution = out

        return res

    
    def delete_engagement(self, request: operations.DeleteEngagementRequest) -> operations.DeleteEngagementResponse:
        r"""Delete this Engagement and all Steps relating to it.
        """
        
        base_url = operations.DELETE_ENGAGEMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Engagements/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEngagementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_execution(self, request: operations.DeleteExecutionRequest) -> operations.DeleteExecutionResponse:
        r"""Delete the Execution and all Steps relating to it.
        """
        
        base_url = operations.DELETE_EXECUTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Executions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteExecutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_flow(self, request: operations.DeleteFlowRequest) -> operations.DeleteFlowResponse:
        r"""Delete a specific Flow.
        """
        
        base_url = operations.DELETE_FLOW_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFlowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_engagement(self, request: operations.FetchEngagementRequest) -> operations.FetchEngagementResponse:
        r"""Retrieve an Engagement
        """
        
        base_url = operations.FETCH_ENGAGEMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Engagements/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEngagementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowEngagement])
                res.studio_v1_flow_engagement = out

        return res

    
    def fetch_engagement_context(self, request: operations.FetchEngagementContextRequest) -> operations.FetchEngagementContextResponse:
        r"""Retrieve the most recent context for an Engagement.
        """
        
        base_url = operations.FETCH_ENGAGEMENT_CONTEXT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEngagementContextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowEngagementEngagementContext])
                res.studio_v1_flow_engagement_engagement_context = out

        return res

    
    def fetch_execution(self, request: operations.FetchExecutionRequest) -> operations.FetchExecutionResponse:
        r"""Retrieve an Execution
        """
        
        base_url = operations.FETCH_EXECUTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Executions/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExecutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowExecution])
                res.studio_v1_flow_execution = out

        return res

    
    def fetch_execution_context(self, request: operations.FetchExecutionContextRequest) -> operations.FetchExecutionContextResponse:
        r"""Retrieve the most recent context for an Execution.
        """
        
        base_url = operations.FETCH_EXECUTION_CONTEXT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Context", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExecutionContextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowExecutionExecutionContext])
                res.studio_v1_flow_execution_execution_context = out

        return res

    
    def fetch_execution_step(self, request: operations.FetchExecutionStepRequest) -> operations.FetchExecutionStepResponse:
        r"""Retrieve a Step.
        """
        
        base_url = operations.FETCH_EXECUTION_STEP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExecutionStepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowExecutionExecutionStep])
                res.studio_v1_flow_execution_execution_step = out

        return res

    
    def fetch_execution_step_context(self, request: operations.FetchExecutionStepContextRequest) -> operations.FetchExecutionStepContextResponse:
        r"""Retrieve the context for an Execution Step.
        """
        
        base_url = operations.FETCH_EXECUTION_STEP_CONTEXT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExecutionStepContextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowExecutionExecutionStepExecutionStepContext])
                res.studio_v1_flow_execution_execution_step_execution_step_context = out

        return res

    
    def fetch_flow(self, request: operations.FetchFlowRequest) -> operations.FetchFlowResponse:
        r"""Retrieve a specific Flow.
        """
        
        base_url = operations.FETCH_FLOW_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFlowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1Flow])
                res.studio_v1_flow = out

        return res

    
    def fetch_step(self, request: operations.FetchStepRequest) -> operations.FetchStepResponse:
        r"""Retrieve a Step.
        """
        
        base_url = operations.FETCH_STEP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchStepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowEngagementStep])
                res.studio_v1_flow_engagement_step = out

        return res

    
    def fetch_step_context(self, request: operations.FetchStepContextRequest) -> operations.FetchStepContextResponse:
        r"""Retrieve the context for an Engagement Step.
        """
        
        base_url = operations.FETCH_STEP_CONTEXT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{StepSid}/Context", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchStepContextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowEngagementStepStepContext])
                res.studio_v1_flow_engagement_step_step_context = out

        return res

    
    def list_engagement(self, request: operations.ListEngagementRequest) -> operations.ListEngagementResponse:
        r"""Retrieve a list of all Engagements for the Flow.
        """
        
        base_url = operations.LIST_ENGAGEMENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Engagements", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEngagementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEngagementListEngagementResponse])
                res.list_engagement_response = out

        return res

    
    def list_execution(self, request: operations.ListExecutionRequest) -> operations.ListExecutionResponse:
        r"""Retrieve a list of all Executions for the Flow.
        """
        
        base_url = operations.LIST_EXECUTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Executions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListExecutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListExecutionListExecutionResponse])
                res.list_execution_response = out

        return res

    
    def list_execution_step(self, request: operations.ListExecutionStepRequest) -> operations.ListExecutionStepResponse:
        r"""Retrieve a list of all Steps for an Execution.
        """
        
        base_url = operations.LIST_EXECUTION_STEP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListExecutionStepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListExecutionStepListExecutionStepResponse])
                res.list_execution_step_response = out

        return res

    
    def list_flow(self, request: operations.ListFlowRequest) -> operations.ListFlowResponse:
        r"""Retrieve a list of all Flows.
        """
        
        base_url = operations.LIST_FLOW_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Flows"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFlowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFlowListFlowResponse])
                res.list_flow_response = out

        return res

    
    def list_step(self, request: operations.ListStepRequest) -> operations.ListStepResponse:
        r"""Retrieve a list of all Steps for an Engagement.
        """
        
        base_url = operations.LIST_STEP_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListStepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListStepListStepResponse])
                res.list_step_response = out

        return res

    
    def update_execution(self, request: operations.UpdateExecutionRequest) -> operations.UpdateExecutionResponse:
        r"""Update the status of an Execution to `ended`.
        """
        
        base_url = operations.UPDATE_EXECUTION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Flows/{FlowSid}/Executions/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateExecutionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV1FlowExecution])
                res.studio_v1_flow_execution = out

        return res

    