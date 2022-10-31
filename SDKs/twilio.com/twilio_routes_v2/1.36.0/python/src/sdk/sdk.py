import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://routes.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def fetch_phone_number(self, request: operations.FetchPhoneNumberRequest) -> operations.FetchPhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/PhoneNumbers/{PhoneNumber}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoutesV2PhoneNumber])
                res.routes_v2_phone_number = out

        return res

    
    def fetch_sip_domain(self, request: operations.FetchSipDomainRequest) -> operations.FetchSipDomainResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SIP_DOMAIN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/SipDomains/{SipDomain}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSipDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoutesV2SipDomain])
                res.routes_v2_sip_domain = out

        return res

    
    def fetch_trunks(self, request: operations.FetchTrunksRequest) -> operations.FetchTrunksResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TRUNKS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Trunks/{SipTrunkDomain}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrunksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoutesV2Trunks])
                res.routes_v2_trunks = out

        return res

    
    def update_phone_number(self, request: operations.UpdatePhoneNumberRequest) -> operations.UpdatePhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/PhoneNumbers/{PhoneNumber}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoutesV2PhoneNumber])
                res.routes_v2_phone_number = out

        return res

    
    def update_sip_domain(self, request: operations.UpdateSipDomainRequest) -> operations.UpdateSipDomainResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SIP_DOMAIN_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/SipDomains/{SipDomain}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSipDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoutesV2SipDomain])
                res.routes_v2_sip_domain = out

        return res

    
    def update_trunks(self, request: operations.UpdateTrunksRequest) -> operations.UpdateTrunksResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_TRUNKS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v2/Trunks/{SipTrunkDomain}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTrunksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RoutesV2Trunks])
                res.routes_v2_trunks = out

        return res

    