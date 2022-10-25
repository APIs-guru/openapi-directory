import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://wireless.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def create_command(self, request: operations.CreateCommandRequest) -> operations.CreateCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_COMMAND_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Commands"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCommandResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WirelessV1Command])
                res.wireless_v1_command = out

        return res

    
    
    def create_rate_plan(self, request: operations.CreateRatePlanRequest) -> operations.CreateRatePlanResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_RATE_PLAN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/RatePlans"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRatePlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WirelessV1RatePlan])
                res.wireless_v1_rate_plan = out

        return res

    
    
    def delete_command(self, request: operations.DeleteCommandRequest) -> operations.DeleteCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_COMMAND_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Commands/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCommandResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_rate_plan(self, request: operations.DeleteRatePlanRequest) -> operations.DeleteRatePlanResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_RATE_PLAN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/RatePlans/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRatePlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_sim(self, request: operations.DeleteSimRequest) -> operations.DeleteSimResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SIM_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sims/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSimResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def fetch_command(self, request: operations.FetchCommandRequest) -> operations.FetchCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_COMMAND_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Commands/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCommandResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WirelessV1Command])
                res.wireless_v1_command = out

        return res

    
    
    def fetch_rate_plan(self, request: operations.FetchRatePlanRequest) -> operations.FetchRatePlanResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_RATE_PLAN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/RatePlans/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRatePlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WirelessV1RatePlan])
                res.wireless_v1_rate_plan = out

        return res

    
    
    def fetch_sim(self, request: operations.FetchSimRequest) -> operations.FetchSimResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SIM_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sims/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSimResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WirelessV1Sim])
                res.wireless_v1_sim = out

        return res

    
    
    def list_account_usage_record(self, request: operations.ListAccountUsageRecordRequest) -> operations.ListAccountUsageRecordResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ACCOUNT_USAGE_RECORD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/UsageRecords"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAccountUsageRecordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAccountUsageRecordListAccountUsageRecordResponse])
                res.list_account_usage_record_response = out

        return res

    
    
    def list_command(self, request: operations.ListCommandRequest) -> operations.ListCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_COMMAND_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Commands"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCommandResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCommandListCommandResponse])
                res.list_command_response = out

        return res

    
    
    def list_data_session(self, request: operations.ListDataSessionRequest) -> operations.ListDataSessionResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_DATA_SESSION_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sims/{SimSid}/DataSessions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDataSessionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDataSessionListDataSessionResponse])
                res.list_data_session_response = out

        return res

    
    
    def list_rate_plan(self, request: operations.ListRatePlanRequest) -> operations.ListRatePlanResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_RATE_PLAN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/RatePlans"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListRatePlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListRatePlanListRatePlanResponse])
                res.list_rate_plan_response = out

        return res

    
    
    def list_sim(self, request: operations.ListSimRequest) -> operations.ListSimResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SIM_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Sims"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSimResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSimListSimResponse])
                res.list_sim_response = out

        return res

    
    
    def list_usage_record(self, request: operations.ListUsageRecordRequest) -> operations.ListUsageRecordResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_USAGE_RECORD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sims/{SimSid}/UsageRecords", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordListUsageRecordResponse])
                res.list_usage_record_response = out

        return res

    
    
    def update_rate_plan(self, request: operations.UpdateRatePlanRequest) -> operations.UpdateRatePlanResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_RATE_PLAN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/RatePlans/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRatePlanResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WirelessV1RatePlan])
                res.wireless_v1_rate_plan = out

        return res

    
    
    def update_sim(self, request: operations.UpdateSimRequest) -> operations.UpdateSimResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SIM_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sims/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSimResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WirelessV1Sim])
                res.wireless_v1_sim = out

        return res

    