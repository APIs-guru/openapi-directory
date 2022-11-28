

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://supersim.twilio.com",
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
        
    
    
    
    def create_esim_profile(self, request: operations.CreateEsimProfileRequest) -> operations.CreateEsimProfileResponse:
        r"""Order an eSIM Profile.
        """
        
        base_url = operations.CREATE_ESIM_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/ESimProfiles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEsimProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1EsimProfile])
                res.supersim_v1_esim_profile = out

        return res

    
    def create_fleet(self, request: operations.CreateFleetRequest) -> operations.CreateFleetResponse:
        r"""Create a Fleet
        """
        
        base_url = operations.CREATE_FLEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Fleets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFleetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Fleet])
                res.supersim_v1_fleet = out

        return res

    
    def create_ip_command(self, request: operations.CreateIPCommandRequest) -> operations.CreateIPCommandResponse:
        r"""Send an IP Command to a Super SIM.
        """
        
        base_url = operations.CREATE_IP_COMMAND_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/IpCommands"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIPCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1IPCommand])
                res.supersim_v1_ip_command = out

        return res

    
    def create_network_access_profile(self, request: operations.CreateNetworkAccessProfileRequest) -> operations.CreateNetworkAccessProfileResponse:
        r"""Create a new Network Access Profile
        """
        
        base_url = operations.CREATE_NETWORK_ACCESS_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/NetworkAccessProfiles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkAccessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfile])
                res.supersim_v1_network_access_profile = out

        return res

    
    def create_network_access_profile_network(self, request: operations.CreateNetworkAccessProfileNetworkRequest) -> operations.CreateNetworkAccessProfileNetworkResponse:
        r"""Add a Network resource to the Network Access Profile resource.
        """
        
        base_url = operations.CREATE_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkAccessProfileNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork])
                res.supersim_v1_network_access_profile_network_access_profile_network = out

        return res

    
    def create_sim(self, request: operations.CreateSimRequest) -> operations.CreateSimResponse:
        r"""Register a Super SIM to your Account
        """
        
        base_url = operations.CREATE_SIM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Sims"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Sim])
                res.supersim_v1_sim = out

        return res

    
    def create_sms_command(self, request: operations.CreateSmsCommandRequest) -> operations.CreateSmsCommandResponse:
        r"""Send SMS Command to a Sim.
        """
        
        base_url = operations.CREATE_SMS_COMMAND_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/SmsCommands"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSmsCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1SmsCommand])
                res.supersim_v1_sms_command = out

        return res

    
    def delete_network_access_profile_network(self, request: operations.DeleteNetworkAccessProfileNetworkRequest) -> operations.DeleteNetworkAccessProfileNetworkResponse:
        r"""Remove a Network resource from the Network Access Profile resource's.
        """
        
        base_url = operations.DELETE_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkAccessProfileNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_esim_profile(self, request: operations.FetchEsimProfileRequest) -> operations.FetchEsimProfileResponse:
        r"""Fetch an eSIM Profile.
        """
        
        base_url = operations.FETCH_ESIM_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ESimProfiles/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchEsimProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1EsimProfile])
                res.supersim_v1_esim_profile = out

        return res

    
    def fetch_fleet(self, request: operations.FetchFleetRequest) -> operations.FetchFleetResponse:
        r"""Fetch a Fleet instance from your account.
        """
        
        base_url = operations.FETCH_FLEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Fleets/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchFleetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Fleet])
                res.supersim_v1_fleet = out

        return res

    
    def fetch_ip_command(self, request: operations.FetchIPCommandRequest) -> operations.FetchIPCommandResponse:
        r"""Fetch IP Command instance from your account.
        """
        
        base_url = operations.FETCH_IP_COMMAND_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/IpCommands/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchIPCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1IPCommand])
                res.supersim_v1_ip_command = out

        return res

    
    def fetch_network(self, request: operations.FetchNetworkRequest) -> operations.FetchNetworkResponse:
        r"""Fetch a Network resource.
        """
        
        base_url = operations.FETCH_NETWORK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Networks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Network])
                res.supersim_v1_network = out

        return res

    
    def fetch_network_access_profile(self, request: operations.FetchNetworkAccessProfileRequest) -> operations.FetchNetworkAccessProfileResponse:
        r"""Fetch a Network Access Profile instance from your account.
        """
        
        base_url = operations.FETCH_NETWORK_ACCESS_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchNetworkAccessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfile])
                res.supersim_v1_network_access_profile = out

        return res

    
    def fetch_network_access_profile_network(self, request: operations.FetchNetworkAccessProfileNetworkRequest) -> operations.FetchNetworkAccessProfileNetworkResponse:
        r"""Fetch a Network Access Profile resource's Network resource.
        """
        
        base_url = operations.FETCH_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchNetworkAccessProfileNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork])
                res.supersim_v1_network_access_profile_network_access_profile_network = out

        return res

    
    def fetch_sim(self, request: operations.FetchSimRequest) -> operations.FetchSimResponse:
        r"""Fetch a Super SIM instance from your account.
        """
        
        base_url = operations.FETCH_SIM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Sims/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Sim])
                res.supersim_v1_sim = out

        return res

    
    def fetch_sms_command(self, request: operations.FetchSmsCommandRequest) -> operations.FetchSmsCommandResponse:
        r"""Fetch SMS Command instance from your account.
        """
        
        base_url = operations.FETCH_SMS_COMMAND_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/SmsCommands/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSmsCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1SmsCommand])
                res.supersim_v1_sms_command = out

        return res

    
    def list_billing_period(self, request: operations.ListBillingPeriodRequest) -> operations.ListBillingPeriodResponse:
        r"""Retrieve a list of Billing Periods for a Super SIM.
        """
        
        base_url = operations.LIST_BILLING_PERIOD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Sims/{SimSid}/BillingPeriods", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBillingPeriodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBillingPeriodListBillingPeriodResponse])
                res.list_billing_period_response = out

        return res

    
    def list_esim_profile(self, request: operations.ListEsimProfileRequest) -> operations.ListEsimProfileResponse:
        r"""Retrieve a list of eSIM Profiles.
        """
        
        base_url = operations.LIST_ESIM_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/ESimProfiles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListEsimProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListEsimProfileListEsimProfileResponse])
                res.list_esim_profile_response = out

        return res

    
    def list_fleet(self, request: operations.ListFleetRequest) -> operations.ListFleetResponse:
        r"""Retrieve a list of Fleets from your account.
        """
        
        base_url = operations.LIST_FLEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Fleets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListFleetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListFleetListFleetResponse])
                res.list_fleet_response = out

        return res

    
    def list_ip_command(self, request: operations.ListIPCommandRequest) -> operations.ListIPCommandResponse:
        r"""Retrieve a list of IP Commands from your account.
        """
        
        base_url = operations.LIST_IP_COMMAND_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/IpCommands"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIPCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIPCommandListIPCommandResponse])
                res.list_ip_command_response = out

        return res

    
    def list_network(self, request: operations.ListNetworkRequest) -> operations.ListNetworkResponse:
        r"""Retrieve a list of Network resources.
        """
        
        base_url = operations.LIST_NETWORK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Networks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListNetworkListNetworkResponse])
                res.list_network_response = out

        return res

    
    def list_network_access_profile(self, request: operations.ListNetworkAccessProfileRequest) -> operations.ListNetworkAccessProfileResponse:
        r"""Retrieve a list of Network Access Profiles from your account.
        """
        
        base_url = operations.LIST_NETWORK_ACCESS_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/NetworkAccessProfiles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNetworkAccessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListNetworkAccessProfileListNetworkAccessProfileResponse])
                res.list_network_access_profile_response = out

        return res

    
    def list_network_access_profile_network(self, request: operations.ListNetworkAccessProfileNetworkRequest) -> operations.ListNetworkAccessProfileNetworkResponse:
        r"""Retrieve a list of Network Access Profile resource's Network resource.
        """
        
        base_url = operations.LIST_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{NetworkAccessProfileSid}/Networks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListNetworkAccessProfileNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse])
                res.list_network_access_profile_network_response = out

        return res

    
    def list_settings_update(self, request: operations.ListSettingsUpdateRequest) -> operations.ListSettingsUpdateResponse:
        r"""Retrieve a list of Settings Updates.
        """
        
        base_url = operations.LIST_SETTINGS_UPDATE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/SettingsUpdates"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSettingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSettingsUpdateListSettingsUpdateResponse])
                res.list_settings_update_response = out

        return res

    
    def list_sim(self, request: operations.ListSimRequest) -> operations.ListSimResponse:
        r"""Retrieve a list of Super SIMs from your account.
        """
        
        base_url = operations.LIST_SIM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Sims"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSimListSimResponse])
                res.list_sim_response = out

        return res

    
    def list_sim_ip_address(self, request: operations.ListSimIPAddressRequest) -> operations.ListSimIPAddressResponse:
        r"""Retrieve a list of IP Addresses for the given Super SIM.
        """
        
        base_url = operations.LIST_SIM_IP_ADDRESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Sims/{SimSid}/IpAddresses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSimIPAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSimIPAddressListSimIPAddressResponse])
                res.list_sim_ip_address_response = out

        return res

    
    def list_sms_command(self, request: operations.ListSmsCommandRequest) -> operations.ListSmsCommandResponse:
        r"""Retrieve a list of SMS Commands from your account.
        """
        
        base_url = operations.LIST_SMS_COMMAND_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/SmsCommands"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSmsCommandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSmsCommandListSmsCommandResponse])
                res.list_sms_command_response = out

        return res

    
    def list_usage_record(self, request: operations.ListUsageRecordRequest) -> operations.ListUsageRecordResponse:
        r"""List UsageRecords
        """
        
        base_url = operations.LIST_USAGE_RECORD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/UsageRecords"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListUsageRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListUsageRecordListUsageRecordResponse])
                res.list_usage_record_response = out

        return res

    
    def update_fleet(self, request: operations.UpdateFleetRequest) -> operations.UpdateFleetResponse:
        r"""Updates the given properties of a Super SIM Fleet instance from your account.
        """
        
        base_url = operations.UPDATE_FLEET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Fleets/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFleetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Fleet])
                res.supersim_v1_fleet = out

        return res

    
    def update_network_access_profile(self, request: operations.UpdateNetworkAccessProfileRequest) -> operations.UpdateNetworkAccessProfileResponse:
        r"""Updates the given properties of a Network Access Profile in your account.
        """
        
        base_url = operations.UPDATE_NETWORK_ACCESS_PROFILE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/NetworkAccessProfiles/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkAccessProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1NetworkAccessProfile])
                res.supersim_v1_network_access_profile = out

        return res

    
    def update_sim(self, request: operations.UpdateSimRequest) -> operations.UpdateSimResponse:
        r"""Updates the given properties of a Super SIM instance from your account.
        """
        
        base_url = operations.UPDATE_SIM_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Sims/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSimResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Sim])
                res.supersim_v1_sim = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupersimV1Sim])
                res.supersim_v1_sim = out

        return res

    