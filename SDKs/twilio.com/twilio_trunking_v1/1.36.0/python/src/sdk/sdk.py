import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://trunking.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def create_credential_list(self, request: operations.CreateCredentialListRequest) -> operations.CreateCredentialListResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CREDENTIAL_LIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/CredentialLists", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCredentialListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkCredentialList])
                res.trunking_v1_trunk_credential_list = out

        return res

    
    def create_ip_access_control_list(self, request: operations.CreateIPAccessControlListRequest) -> operations.CreateIPAccessControlListResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_IP_ACCESS_CONTROL_LIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/IpAccessControlLists", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIPAccessControlListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkIPAccessControlList])
                res.trunking_v1_trunk_ip_access_control_list = out

        return res

    
    def create_origination_url(self, request: operations.CreateOriginationURLRequest) -> operations.CreateOriginationURLResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_ORIGINATION_URL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/OriginationUrls", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOriginationURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkOriginationURL])
                res.trunking_v1_trunk_origination_url = out

        return res

    
    def create_phone_number(self, request: operations.CreatePhoneNumberRequest) -> operations.CreatePhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/PhoneNumbers", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkPhoneNumber])
                res.trunking_v1_trunk_phone_number = out

        return res

    
    def create_trunk(self, request: operations.CreateTrunkRequest) -> operations.CreateTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Trunks"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1Trunk])
                res.trunking_v1_trunk = out

        return res

    
    def delete_credential_list(self, request: operations.DeleteCredentialListRequest) -> operations.DeleteCredentialListResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CREDENTIAL_LIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/CredentialLists/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCredentialListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_ip_access_control_list(self, request: operations.DeleteIPAccessControlListRequest) -> operations.DeleteIPAccessControlListResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_IP_ACCESS_CONTROL_LIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIPAccessControlListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_origination_url(self, request: operations.DeleteOriginationURLRequest) -> operations.DeleteOriginationURLResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_ORIGINATION_URL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOriginationURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_phone_number(self, request: operations.DeletePhoneNumberRequest) -> operations.DeletePhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_trunk(self, request: operations.DeleteTrunkRequest) -> operations.DeleteTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_credential_list(self, request: operations.FetchCredentialListRequest) -> operations.FetchCredentialListResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CREDENTIAL_LIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/CredentialLists/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchCredentialListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkCredentialList])
                res.trunking_v1_trunk_credential_list = out

        return res

    
    def fetch_ip_access_control_list(self, request: operations.FetchIPAccessControlListRequest) -> operations.FetchIPAccessControlListResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_IP_ACCESS_CONTROL_LIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/IpAccessControlLists/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchIPAccessControlListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkIPAccessControlList])
                res.trunking_v1_trunk_ip_access_control_list = out

        return res

    
    def fetch_origination_url(self, request: operations.FetchOriginationURLRequest) -> operations.FetchOriginationURLResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_ORIGINATION_URL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchOriginationURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkOriginationURL])
                res.trunking_v1_trunk_origination_url = out

        return res

    
    def fetch_phone_number(self, request: operations.FetchPhoneNumberRequest) -> operations.FetchPhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/PhoneNumbers/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkPhoneNumber])
                res.trunking_v1_trunk_phone_number = out

        return res

    
    def fetch_recording(self, request: operations.FetchRecordingRequest) -> operations.FetchRecordingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_RECORDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/Recording", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkRecording])
                res.trunking_v1_trunk_recording = out

        return res

    
    def fetch_trunk(self, request: operations.FetchTrunkRequest) -> operations.FetchTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{Sid}", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1Trunk])
                res.trunking_v1_trunk = out

        return res

    
    def list_credential_list(self, request: operations.ListCredentialListRequest) -> operations.ListCredentialListResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CREDENTIAL_LIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/CredentialLists", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCredentialListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCredentialListListCredentialListResponse])
                res.list_credential_list_response = out

        return res

    
    def list_ip_access_control_list(self, request: operations.ListIPAccessControlListRequest) -> operations.ListIPAccessControlListResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_IP_ACCESS_CONTROL_LIST_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/IpAccessControlLists", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIPAccessControlListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIPAccessControlListListIPAccessControlListResponse])
                res.list_ip_access_control_list_response = out

        return res

    
    def list_origination_url(self, request: operations.ListOriginationURLRequest) -> operations.ListOriginationURLResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_ORIGINATION_URL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/OriginationUrls", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListOriginationURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListOriginationURLListOriginationURLResponse])
                res.list_origination_url_response = out

        return res

    
    def list_phone_number(self, request: operations.ListPhoneNumberRequest) -> operations.ListPhoneNumberResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_PHONE_NUMBER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/PhoneNumbers", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPhoneNumberListPhoneNumberResponse])
                res.list_phone_number_response = out

        return res

    
    def list_trunk(self, request: operations.ListTrunkRequest) -> operations.ListTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Trunks"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListTrunkListTrunkResponse])
                res.list_trunk_response = out

        return res

    
    def update_origination_url(self, request: operations.UpdateOriginationURLRequest) -> operations.UpdateOriginationURLResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_ORIGINATION_URL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/OriginationUrls/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOriginationURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkOriginationURL])
                res.trunking_v1_trunk_origination_url = out

        return res

    
    def update_recording(self, request: operations.UpdateRecordingRequest) -> operations.UpdateRecordingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_RECORDING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{TrunkSid}/Recording", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1TrunkRecording])
                res.trunking_v1_trunk_recording = out

        return res

    
    def update_trunk(self, request: operations.UpdateTrunkRequest) -> operations.UpdateTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Trunks/{Sid}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrunkingV1Trunk])
                res.trunking_v1_trunk = out

        return res

    