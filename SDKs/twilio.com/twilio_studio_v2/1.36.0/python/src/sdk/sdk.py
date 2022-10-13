import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://studio.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def create_execution(self, request: operations.CreateExecutionRequest) -> operations.CreateExecutionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_EXECUTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{FlowSid}/Executions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateExecutionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowExecution])
                res.studio_v2_flow_execution = out

        return res

    
    
    def create_flow(self, request: operations.CreateFlowRequest) -> operations.CreateFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Flows"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2Flow])
                res.studio_v2_flow = out

        return res

    
    
    def delete_execution(self, request: operations.DeleteExecutionRequest) -> operations.DeleteExecutionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_EXECUTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{FlowSid}/Executions/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteExecutionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_flow(self, request: operations.DeleteFlowRequest) -> operations.DeleteFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def fetch_execution(self, request: operations.FetchExecutionRequest) -> operations.FetchExecutionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_EXECUTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{FlowSid}/Executions/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExecutionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowExecution])
                res.studio_v2_flow_execution = out

        return res

    
    
    def fetch_execution_context(self, request: operations.FetchExecutionContextRequest) -> operations.FetchExecutionContextResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_EXECUTION_CONTEXT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExecutionContextResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowExecutionExecutionContext])
                res.studio_v2_flow_execution_execution_context = out

        return res

    
    
    def fetch_execution_step(self, request: operations.FetchExecutionStepRequest) -> operations.FetchExecutionStepResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_EXECUTION_STEP_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExecutionStepResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowExecutionExecutionStep])
                res.studio_v2_flow_execution_execution_step = out

        return res

    
    
    def fetch_execution_step_context(self, request: operations.FetchExecutionStepContextRequest) -> operations.FetchExecutionStepContextResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_EXECUTION_STEP_CONTEXT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchExecutionStepContextResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowExecutionExecutionStepExecutionStepContext])
                res.studio_v2_flow_execution_execution_step_execution_step_context = out

        return res

    
    
    def fetch_flow(self, request: operations.FetchFlowRequest) -> operations.FetchFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2Flow])
                res.studio_v2_flow = out

        return res

    
    
    def fetch_flow_revision(self, request: operations.FetchFlowRevisionRequest) -> operations.FetchFlowRevisionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FLOW_REVISION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{Sid}/Revisions/{Revision}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFlowRevisionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowFlowRevision])
                res.studio_v2_flow_flow_revision = out

        return res

    
    
    def fetch_test_user(self, request: operations.FetchTestUserRequest) -> operations.FetchTestUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TEST_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{Sid}/TestUsers", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTestUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowTestUser])
                res.studio_v2_flow_test_user = out

        return res

    
    
    def list_execution(self, request: operations.ListExecutionRequest) -> operations.ListExecutionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_EXECUTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{FlowSid}/Executions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListExecutionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListExecution200ApplicationJSONListExecutionResponse])
                res.list_execution_response = out

        return res

    
    
    def list_execution_step(self, request: operations.ListExecutionStepRequest) -> operations.ListExecutionStepResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_EXECUTION_STEP_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListExecutionStepResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListExecutionStep200ApplicationJSONListExecutionStepResponse])
                res.list_execution_step_response = out

        return res

    
    
    def list_flow(self, request: operations.ListFlowRequest) -> operations.ListFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Flows"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFlow200ApplicationJSONListFlowResponse])
                res.list_flow_response = out

        return res

    
    
    def list_flow_revision(self, request: operations.ListFlowRevisionRequest) -> operations.ListFlowRevisionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FLOW_REVISION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{Sid}/Revisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFlowRevisionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFlowRevision200ApplicationJSONListFlowRevisionResponse])
                res.list_flow_revision_response = out

        return res

    
    
    def update_execution(self, request: operations.UpdateExecutionRequest) -> operations.UpdateExecutionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_EXECUTION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{FlowSid}/Executions/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateExecutionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowExecution])
                res.studio_v2_flow_execution = out

        return res

    
    
    def update_flow(self, request: operations.UpdateFlowRequest) -> operations.UpdateFlowResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_FLOW_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFlowResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2Flow])
                res.studio_v2_flow = out

        return res

    
    
    def update_flow_validate(self, request: operations.UpdateFlowValidateRequest) -> operations.UpdateFlowValidateResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_FLOW_VALIDATE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v2/Flows/Validate"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFlowValidateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowValidate])
                res.studio_v2_flow_validate = out

        return res

    
    
    def update_test_user(self, request: operations.UpdateTestUserRequest) -> operations.UpdateTestUserResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_TEST_USER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Flows/{Sid}/TestUsers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTestUserResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudioV2FlowTestUser])
                res.studio_v2_flow_test_user = out

        return res

    