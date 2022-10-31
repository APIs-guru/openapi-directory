import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://autopilot.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def create_assistant(self, request: operations.CreateAssistantRequest) -> operations.CreateAssistantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ASSISTANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Assistants"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1Assistant])
                res.autopilot_v1_assistant = out

        return res

    
    def create_field(self, request: operations.CreateFieldRequest) -> operations.CreateFieldResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_FIELD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTaskField])
                res.autopilot_v1_assistant_task_field = out

        return res

    
    def create_field_type(self, request: operations.CreateFieldTypeRequest) -> operations.CreateFieldTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_FIELD_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/FieldTypes", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantFieldType])
                res.autopilot_v1_assistant_field_type = out

        return res

    
    def create_field_value(self, request: operations.CreateFieldValueRequest) -> operations.CreateFieldValueResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_FIELD_VALUE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFieldValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantFieldTypeFieldValue])
                res.autopilot_v1_assistant_field_type_field_value = out

        return res

    
    def create_model_build(self, request: operations.CreateModelBuildRequest) -> operations.CreateModelBuildResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_MODEL_BUILD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/ModelBuilds", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantModelBuild])
                res.autopilot_v1_assistant_model_build = out

        return res

    
    def create_query(self, request: operations.CreateQueryRequest) -> operations.CreateQueryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_QUERY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Queries", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantQuery])
                res.autopilot_v1_assistant_query = out

        return res

    
    def create_sample(self, request: operations.CreateSampleRequest) -> operations.CreateSampleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SAMPLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTaskSample])
                res.autopilot_v1_assistant_task_sample = out

        return res

    
    def create_task(self, request: operations.CreateTaskRequest) -> operations.CreateTaskResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_TASK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTask])
                res.autopilot_v1_assistant_task = out

        return res

    
    def create_webhook(self, request: operations.CreateWebhookRequest) -> operations.CreateWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Webhooks", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantWebhook])
                res.autopilot_v1_assistant_webhook = out

        return res

    
    def delete_assistant(self, request: operations.DeleteAssistantRequest) -> operations.DeleteAssistantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_ASSISTANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_field(self, request: operations.DeleteFieldRequest) -> operations.DeleteFieldResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FIELD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_field_type(self, request: operations.DeleteFieldTypeRequest) -> operations.DeleteFieldTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FIELD_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/FieldTypes/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_field_value(self, request: operations.DeleteFieldValueRequest) -> operations.DeleteFieldValueResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FIELD_VALUE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFieldValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_model_build(self, request: operations.DeleteModelBuildRequest) -> operations.DeleteModelBuildResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_MODEL_BUILD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_query(self, request: operations.DeleteQueryRequest) -> operations.DeleteQueryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_QUERY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Queries/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_sample(self, request: operations.DeleteSampleRequest) -> operations.DeleteSampleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SAMPLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_task(self, request: operations.DeleteTaskRequest) -> operations.DeleteTaskResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_TASK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_webhook(self, request: operations.DeleteWebhookRequest) -> operations.DeleteWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Webhooks/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_assistant(self, request: operations.FetchAssistantRequest) -> operations.FetchAssistantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ASSISTANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1Assistant])
                res.autopilot_v1_assistant = out

        return res

    
    def fetch_defaults(self, request: operations.FetchDefaultsRequest) -> operations.FetchDefaultsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_DEFAULTS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Defaults", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDefaultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantDefaults])
                res.autopilot_v1_assistant_defaults = out

        return res

    
    def fetch_dialogue(self, request: operations.FetchDialogueRequest) -> operations.FetchDialogueResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_DIALOGUE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Dialogues/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDialogueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantDialogue])
                res.autopilot_v1_assistant_dialogue = out

        return res

    
    def fetch_field(self, request: operations.FetchFieldRequest) -> operations.FetchFieldResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FIELD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTaskField])
                res.autopilot_v1_assistant_task_field = out

        return res

    
    def fetch_field_type(self, request: operations.FetchFieldTypeRequest) -> operations.FetchFieldTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FIELD_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/FieldTypes/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantFieldType])
                res.autopilot_v1_assistant_field_type = out

        return res

    
    def fetch_field_value(self, request: operations.FetchFieldValueRequest) -> operations.FetchFieldValueResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FIELD_VALUE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFieldValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantFieldTypeFieldValue])
                res.autopilot_v1_assistant_field_type_field_value = out

        return res

    
    def fetch_model_build(self, request: operations.FetchModelBuildRequest) -> operations.FetchModelBuildResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_MODEL_BUILD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantModelBuild])
                res.autopilot_v1_assistant_model_build = out

        return res

    
    def fetch_query(self, request: operations.FetchQueryRequest) -> operations.FetchQueryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_QUERY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Queries/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantQuery])
                res.autopilot_v1_assistant_query = out

        return res

    
    def fetch_sample(self, request: operations.FetchSampleRequest) -> operations.FetchSampleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SAMPLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTaskSample])
                res.autopilot_v1_assistant_task_sample = out

        return res

    
    def fetch_style_sheet(self, request: operations.FetchStyleSheetRequest) -> operations.FetchStyleSheetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_STYLE_SHEET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/StyleSheet", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchStyleSheetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantStyleSheet])
                res.autopilot_v1_assistant_style_sheet = out

        return res

    
    def fetch_task(self, request: operations.FetchTaskRequest) -> operations.FetchTaskResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TASK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTask])
                res.autopilot_v1_assistant_task = out

        return res

    
    def fetch_task_actions(self, request: operations.FetchTaskActionsRequest) -> operations.FetchTaskActionsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TASK_ACTIONS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTaskTaskActions])
                res.autopilot_v1_assistant_task_task_actions = out

        return res

    
    def fetch_task_statistics(self, request: operations.FetchTaskStatisticsRequest) -> operations.FetchTaskStatisticsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TASK_STATISTICS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTaskStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTaskTaskStatistics])
                res.autopilot_v1_assistant_task_task_statistics = out

        return res

    
    def fetch_webhook(self, request: operations.FetchWebhookRequest) -> operations.FetchWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Webhooks/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantWebhook])
                res.autopilot_v1_assistant_webhook = out

        return res

    
    def list_assistant(self, request: operations.ListAssistantRequest) -> operations.ListAssistantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ASSISTANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Assistants"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAssistantListAssistantResponse])
                res.list_assistant_response = out

        return res

    
    def list_field(self, request: operations.ListFieldRequest) -> operations.ListFieldResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FIELD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFieldResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFieldListFieldResponse])
                res.list_field_response = out

        return res

    
    def list_field_type(self, request: operations.ListFieldTypeRequest) -> operations.ListFieldTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FIELD_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/FieldTypes", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFieldTypeListFieldTypeResponse])
                res.list_field_type_response = out

        return res

    
    def list_field_value(self, request: operations.ListFieldValueRequest) -> operations.ListFieldValueResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FIELD_VALUE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFieldValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFieldValueListFieldValueResponse])
                res.list_field_value_response = out

        return res

    
    def list_model_build(self, request: operations.ListModelBuildRequest) -> operations.ListModelBuildResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_MODEL_BUILD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/ModelBuilds", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListModelBuildListModelBuildResponse])
                res.list_model_build_response = out

        return res

    
    def list_query(self, request: operations.ListQueryRequest) -> operations.ListQueryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_QUERY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Queries", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListQueryListQueryResponse])
                res.list_query_response = out

        return res

    
    def list_sample(self, request: operations.ListSampleRequest) -> operations.ListSampleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SAMPLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSampleListSampleResponse])
                res.list_sample_response = out

        return res

    
    def list_task(self, request: operations.ListTaskRequest) -> operations.ListTaskResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_TASK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTaskListTaskResponse])
                res.list_task_response = out

        return res

    
    def list_webhook(self, request: operations.ListWebhookRequest) -> operations.ListWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Webhooks", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWebhookListWebhookResponse])
                res.list_webhook_response = out

        return res

    
    def update_assistant(self, request: operations.UpdateAssistantRequest) -> operations.UpdateAssistantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ASSISTANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1Assistant])
                res.autopilot_v1_assistant = out

        return res

    
    def update_defaults(self, request: operations.UpdateDefaultsRequest) -> operations.UpdateDefaultsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_DEFAULTS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Defaults", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDefaultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantDefaults])
                res.autopilot_v1_assistant_defaults = out

        return res

    
    def update_field_type(self, request: operations.UpdateFieldTypeRequest) -> operations.UpdateFieldTypeResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_FIELD_TYPE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/FieldTypes/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFieldTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantFieldType])
                res.autopilot_v1_assistant_field_type = out

        return res

    
    def update_model_build(self, request: operations.UpdateModelBuildRequest) -> operations.UpdateModelBuildResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_MODEL_BUILD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/ModelBuilds/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateModelBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantModelBuild])
                res.autopilot_v1_assistant_model_build = out

        return res

    
    def update_query(self, request: operations.UpdateQueryRequest) -> operations.UpdateQueryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_QUERY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Queries/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantQuery])
                res.autopilot_v1_assistant_query = out

        return res

    
    def update_restore_assistant(self, request: operations.UpdateRestoreAssistantRequest) -> operations.UpdateRestoreAssistantResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_RESTORE_ASSISTANT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Assistants/Restore"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRestoreAssistantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1RestoreAssistant])
                res.autopilot_v1_restore_assistant = out

        return res

    
    def update_sample(self, request: operations.UpdateSampleRequest) -> operations.UpdateSampleResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SAMPLE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSampleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTaskSample])
                res.autopilot_v1_assistant_task_sample = out

        return res

    
    def update_style_sheet(self, request: operations.UpdateStyleSheetRequest) -> operations.UpdateStyleSheetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_STYLE_SHEET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/StyleSheet", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateStyleSheetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantStyleSheet])
                res.autopilot_v1_assistant_style_sheet = out

        return res

    
    def update_task(self, request: operations.UpdateTaskRequest) -> operations.UpdateTaskResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_TASK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTask])
                res.autopilot_v1_assistant_task = out

        return res

    
    def update_task_actions(self, request: operations.UpdateTaskActionsRequest) -> operations.UpdateTaskActionsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_TASK_ACTIONS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantTaskTaskActions])
                res.autopilot_v1_assistant_task_task_actions = out

        return res

    
    def update_webhook(self, request: operations.UpdateWebhookRequest) -> operations.UpdateWebhookResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_WEBHOOK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Assistants/{AssistantSid}/Webhooks/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutopilotV1AssistantWebhook])
                res.autopilot_v1_assistant_webhook = out

        return res

    