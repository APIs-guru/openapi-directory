import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://supersim.twilio.com",
]

class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url


    

    
    def create_esim_profile(self, request: operations.CreateEsimProfileRequest) -> operations.CreateEsimProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ESIM_PROFILE_SERVERS[0]
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

        res = operations.CreateEsimProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1EsimProfile])
                res.responses[r.status_code][content_type] = operations.CreateEsimProfileResponses(supersim_v1_esim_profile=out)

        return res

    
    def create_fleet(self, request: operations.CreateFleetRequest) -> operations.CreateFleetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_FLEET_SERVERS[0]
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

        res = operations.CreateFleetResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Fleet])
                res.responses[r.status_code][content_type] = operations.CreateFleetResponses(supersim_v1_fleet=out)

        return res

    
    def create_ip_command(self, request: operations.CreateIPCommandRequest) -> operations.CreateIPCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_IP_COMMAND_SERVERS[0]
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

        res = operations.CreateIPCommandResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1IPCommand])
                res.responses[r.status_code][content_type] = operations.CreateIPCommandResponses(supersim_v1_ip_command=out)

        return res

    
    def create_network_access_profile(self, request: operations.CreateNetworkAccessProfileRequest) -> operations.CreateNetworkAccessProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_NETWORK_ACCESS_PROFILE_SERVERS[0]
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

        res = operations.CreateNetworkAccessProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfile])
                res.responses[r.status_code][content_type] = operations.CreateNetworkAccessProfileResponses(supersim_v1_network_access_profile=out)

        return res

    
    def create_network_access_profile_network(self, request: operations.CreateNetworkAccessProfileNetworkRequest) -> operations.CreateNetworkAccessProfileNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkAccessProfileNetworkResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork])
                res.responses[r.status_code][content_type] = operations.CreateNetworkAccessProfileNetworkResponses(supersim_v1_network_access_profile_network_access_profile_network=out)

        return res

    
    def create_sim(self, request: operations.CreateSimRequest) -> operations.CreateSimResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SIM_SERVERS[0]
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

        res = operations.CreateSimResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Sim])
                res.responses[r.status_code][content_type] = operations.CreateSimResponses(supersim_v1_sim=out)

        return res

    
    def create_sms_command(self, request: operations.CreateSmsCommandRequest) -> operations.CreateSmsCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SMS_COMMAND_SERVERS[0]
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

        res = operations.CreateSmsCommandResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1SmsCommand])
                res.responses[r.status_code][content_type] = operations.CreateSmsCommandResponses(supersim_v1_sms_command=out)

        return res

    
    def delete_network_access_profile_network(self, request: operations.DeleteNetworkAccessProfileNetworkRequest) -> operations.DeleteNetworkAccessProfileNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkAccessProfileNetworkResponse(status_code=r.status_code, content_type=content_type)

        return res

    
    def fetch_esim_profile(self, request: operations.FetchEsimProfileRequest) -> operations.FetchEsimProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ESIM_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ESimProfiles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEsimProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1EsimProfile])
                res.responses[r.status_code][content_type] = operations.FetchEsimProfileResponses(supersim_v1_esim_profile=out)

        return res

    
    def fetch_fleet(self, request: operations.FetchFleetRequest) -> operations.FetchFleetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_FLEET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Fleets/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFleetResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Fleet])
                res.responses[r.status_code][content_type] = operations.FetchFleetResponses(supersim_v1_fleet=out)

        return res

    
    def fetch_ip_command(self, request: operations.FetchIPCommandRequest) -> operations.FetchIPCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_IP_COMMAND_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/IpCommands/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchIPCommandResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1IPCommand])
                res.responses[r.status_code][content_type] = operations.FetchIPCommandResponses(supersim_v1_ip_command=out)

        return res

    
    def fetch_network(self, request: operations.FetchNetworkRequest) -> operations.FetchNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_NETWORK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Networks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchNetworkResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Network])
                res.responses[r.status_code][content_type] = operations.FetchNetworkResponses(supersim_v1_network=out)

        return res

    
    def fetch_network_access_profile(self, request: operations.FetchNetworkAccessProfileRequest) -> operations.FetchNetworkAccessProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_NETWORK_ACCESS_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchNetworkAccessProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfile])
                res.responses[r.status_code][content_type] = operations.FetchNetworkAccessProfileResponses(supersim_v1_network_access_profile=out)

        return res

    
    def fetch_network_access_profile_network(self, request: operations.FetchNetworkAccessProfileNetworkRequest) -> operations.FetchNetworkAccessProfileNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchNetworkAccessProfileNetworkResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork])
                res.responses[r.status_code][content_type] = operations.FetchNetworkAccessProfileNetworkResponses(supersim_v1_network_access_profile_network_access_profile_network=out)

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

        res = operations.FetchSimResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Sim])
                res.responses[r.status_code][content_type] = operations.FetchSimResponses(supersim_v1_sim=out)

        return res

    
    def fetch_sms_command(self, request: operations.FetchSmsCommandRequest) -> operations.FetchSmsCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SMS_COMMAND_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/SmsCommands/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSmsCommandResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1SmsCommand])
                res.responses[r.status_code][content_type] = operations.FetchSmsCommandResponses(supersim_v1_sms_command=out)

        return res

    
    def list_billing_period(self, request: operations.ListBillingPeriodRequest) -> operations.ListBillingPeriodResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_BILLING_PERIOD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sims/{SimSid}/BillingPeriods", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBillingPeriodResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBillingPeriod200ApplicationJSONListBillingPeriodResponse])
                res.responses[r.status_code][content_type] = operations.ListBillingPeriodResponses(list_billing_period_response=out)

        return res

    
    def list_esim_profile(self, request: operations.ListEsimProfileRequest) -> operations.ListEsimProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ESIM_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEsimProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEsimProfile200ApplicationJSONListEsimProfileResponse])
                res.responses[r.status_code][content_type] = operations.ListEsimProfileResponses(list_esim_profile_response=out)

        return res

    
    def list_fleet(self, request: operations.ListFleetRequest) -> operations.ListFleetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_FLEET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFleetResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFleet200ApplicationJSONListFleetResponse])
                res.responses[r.status_code][content_type] = operations.ListFleetResponses(list_fleet_response=out)

        return res

    
    def list_ip_command(self, request: operations.ListIPCommandRequest) -> operations.ListIPCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_IP_COMMAND_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIPCommandResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIPCommand200ApplicationJSONListIPCommandResponse])
                res.responses[r.status_code][content_type] = operations.ListIPCommandResponses(list_ip_command_response=out)

        return res

    
    def list_network(self, request: operations.ListNetworkRequest) -> operations.ListNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_NETWORK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNetworkResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListNetwork200ApplicationJSONListNetworkResponse])
                res.responses[r.status_code][content_type] = operations.ListNetworkResponses(list_network_response=out)

        return res

    
    def list_network_access_profile(self, request: operations.ListNetworkAccessProfileRequest) -> operations.ListNetworkAccessProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_NETWORK_ACCESS_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNetworkAccessProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListNetworkAccessProfile200ApplicationJSONListNetworkAccessProfileResponse])
                res.responses[r.status_code][content_type] = operations.ListNetworkAccessProfileResponses(list_network_access_profile_response=out)

        return res

    
    def list_network_access_profile_network(self, request: operations.ListNetworkAccessProfileNetworkRequest) -> operations.ListNetworkAccessProfileNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNetworkAccessProfileNetworkResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListNetworkAccessProfileNetwork200ApplicationJSONListNetworkAccessProfileNetworkResponse])
                res.responses[r.status_code][content_type] = operations.ListNetworkAccessProfileNetworkResponses(list_network_access_profile_network_response=out)

        return res

    
    def list_sim(self, request: operations.ListSimRequest) -> operations.ListSimResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SIM_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSimResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSim200ApplicationJSONListSimResponse])
                res.responses[r.status_code][content_type] = operations.ListSimResponses(list_sim_response=out)

        return res

    
    def list_sim_ip_address(self, request: operations.ListSimIPAddressRequest) -> operations.ListSimIPAddressResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SIM_IP_ADDRESS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Sims/{SimSid}/IpAddresses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSimIPAddressResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSimIPAddress200ApplicationJSONListSimIPAddressResponse])
                res.responses[r.status_code][content_type] = operations.ListSimIPAddressResponses(list_sim_ip_address_response=out)

        return res

    
    def list_sms_command(self, request: operations.ListSmsCommandRequest) -> operations.ListSmsCommandResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SMS_COMMAND_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSmsCommandResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSmsCommand200ApplicationJSONListSmsCommandResponse])
                res.responses[r.status_code][content_type] = operations.ListSmsCommandResponses(list_sms_command_response=out)

        return res

    
    def list_usage_record(self, request: operations.ListUsageRecordRequest) -> operations.ListUsageRecordResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_USAGE_RECORD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/apis"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecord200ApplicationJSONListUsageRecordResponse])
                res.responses[r.status_code][content_type] = operations.ListUsageRecordResponses(list_usage_record_response=out)

        return res

    
    def update_fleet(self, request: operations.UpdateFleetRequest) -> operations.UpdateFleetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_FLEET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Fleets/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFleetResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Fleet])
                res.responses[r.status_code][content_type] = operations.UpdateFleetResponses(supersim_v1_fleet=out)

        return res

    
    def update_network_access_profile(self, request: operations.UpdateNetworkAccessProfileRequest) -> operations.UpdateNetworkAccessProfileResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_NETWORK_ACCESS_PROFILE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkAccessProfileResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfile])
                res.responses[r.status_code][content_type] = operations.UpdateNetworkAccessProfileResponses(supersim_v1_network_access_profile=out)

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

        res = operations.UpdateSimResponse(status_code=r.status_code, content_type=content_type, responses={r.status_code: {content_type: {}}})
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Sim])
                res.responses[r.status_code][content_type] = operations.UpdateSimResponses(supersim_v1_sim=out)
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Sim])
                res.responses[r.status_code][content_type] = operations.UpdateSimResponses(supersim_v1_sim=out)

        return res

    