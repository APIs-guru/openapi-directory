import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://voice.twilio.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def create_byoc_trunk(self, request: operations.CreateByocTrunkRequest) -> operations.CreateByocTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_BYOC_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/ByocTrunks"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ByocTrunk])
                res.voice_v1_byoc_trunk = out

        return res

    
    
    def create_connection_policy(self, request: operations.CreateConnectionPolicyRequest) -> operations.CreateConnectionPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CONNECTION_POLICY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/ConnectionPolicies"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicy])
                res.voice_v1_connection_policy = out

        return res

    
    
    def create_connection_policy_target(self, request: operations.CreateConnectionPolicyTargetRequest) -> operations.CreateConnectionPolicyTargetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_CONNECTION_POLICY_TARGET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget])
                res.voice_v1_connection_policy_connection_policy_target = out

        return res

    
    
    def create_dialing_permissions_country_bulk_update(self, request: operations.CreateDialingPermissionsCountryBulkUpdateRequest) -> operations.CreateDialingPermissionsCountryBulkUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_DIALING_PERMISSIONS_COUNTRY_BULK_UPDATE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/DialingPermissions/BulkCountryUpdates"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDialingPermissionsCountryBulkUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate])
                res.voice_v1_dialing_permissions_dialing_permissions_country_bulk_update = out

        return res

    
    
    def create_ip_record(self, request: operations.CreateIPRecordRequest) -> operations.CreateIPRecordResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_IP_RECORD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/IpRecords"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIPRecordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1IPRecord])
                res.voice_v1_ip_record = out

        return res

    
    
    def create_source_ip_mapping(self, request: operations.CreateSourceIPMappingRequest) -> operations.CreateSourceIPMappingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_SOURCE_IP_MAPPING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/SourceIpMappings"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1SourceIPMapping])
                res.voice_v1_source_ip_mapping = out

        return res

    
    
    def delete_archived_call(self, request: operations.DeleteArchivedCallRequest) -> operations.DeleteArchivedCallResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_ARCHIVED_CALL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/Archives/{Date}/Calls/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteArchivedCallResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_byoc_trunk(self, request: operations.DeleteByocTrunkRequest) -> operations.DeleteByocTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_BYOC_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ByocTrunks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_connection_policy(self, request: operations.DeleteConnectionPolicyRequest) -> operations.DeleteConnectionPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CONNECTION_POLICY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_connection_policy_target(self, request: operations.DeleteConnectionPolicyTargetRequest) -> operations.DeleteConnectionPolicyTargetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_CONNECTION_POLICY_TARGET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_ip_record(self, request: operations.DeleteIPRecordRequest) -> operations.DeleteIPRecordResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_IP_RECORD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/IpRecords/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIPRecordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_source_ip_mapping(self, request: operations.DeleteSourceIPMappingRequest) -> operations.DeleteSourceIPMappingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_SOURCE_IP_MAPPING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/SourceIpMappings/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def fetch_byoc_trunk(self, request: operations.FetchByocTrunkRequest) -> operations.FetchByocTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_BYOC_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ByocTrunks/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ByocTrunk])
                res.voice_v1_byoc_trunk = out

        return res

    
    
    def fetch_connection_policy(self, request: operations.FetchConnectionPolicyRequest) -> operations.FetchConnectionPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONNECTION_POLICY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicy])
                res.voice_v1_connection_policy = out

        return res

    
    
    def fetch_connection_policy_target(self, request: operations.FetchConnectionPolicyTargetRequest) -> operations.FetchConnectionPolicyTargetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_CONNECTION_POLICY_TARGET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget])
                res.voice_v1_connection_policy_connection_policy_target = out

        return res

    
    
    def fetch_dialing_permissions_country(self, request: operations.FetchDialingPermissionsCountryRequest) -> operations.FetchDialingPermissionsCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_DIALING_PERMISSIONS_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/DialingPermissions/Countries/{IsoCode}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDialingPermissionsCountryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance])
                res.voice_v1_dialing_permissions_dialing_permissions_country_instance = out

        return res

    
    
    def fetch_dialing_permissions_settings(self, request: operations.FetchDialingPermissionsSettingsRequest) -> operations.FetchDialingPermissionsSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_DIALING_PERMISSIONS_SETTINGS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Settings"
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDialingPermissionsSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1DialingPermissionsDialingPermissionsSettings])
                res.voice_v1_dialing_permissions_dialing_permissions_settings = out

        return res

    
    
    def fetch_ip_record(self, request: operations.FetchIPRecordRequest) -> operations.FetchIPRecordResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_IP_RECORD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/IpRecords/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchIPRecordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1IPRecord])
                res.voice_v1_ip_record = out

        return res

    
    
    def fetch_source_ip_mapping(self, request: operations.FetchSourceIPMappingRequest) -> operations.FetchSourceIPMappingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.FETCH_SOURCE_IP_MAPPING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/SourceIpMappings/{Sid}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1SourceIPMapping])
                res.voice_v1_source_ip_mapping = out

        return res

    
    
    def list_byoc_trunk(self, request: operations.ListByocTrunkRequest) -> operations.ListByocTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_BYOC_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/ByocTrunks"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListByocTrunkListByocTrunkResponse])
                res.list_byoc_trunk_response = out

        return res

    
    
    def list_connection_policy(self, request: operations.ListConnectionPolicyRequest) -> operations.ListConnectionPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONNECTION_POLICY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/ConnectionPolicies"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConnectionPolicyListConnectionPolicyResponse])
                res.list_connection_policy_response = out

        return res

    
    
    def list_connection_policy_target(self, request: operations.ListConnectionPolicyTargetRequest) -> operations.ListConnectionPolicyTargetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_CONNECTION_POLICY_TARGET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConnectionPolicyTargetListConnectionPolicyTargetResponse])
                res.list_connection_policy_target_response = out

        return res

    
    
    def list_dialing_permissions_country(self, request: operations.ListDialingPermissionsCountryRequest) -> operations.ListDialingPermissionsCountryResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_DIALING_PERMISSIONS_COUNTRY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/DialingPermissions/Countries"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDialingPermissionsCountryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDialingPermissionsCountryListDialingPermissionsCountryResponse])
                res.list_dialing_permissions_country_response = out

        return res

    
    
    def list_dialing_permissions_hrs_prefixes(self, request: operations.ListDialingPermissionsHrsPrefixesRequest) -> operations.ListDialingPermissionsHrsPrefixesResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_DIALING_PERMISSIONS_HRS_PREFIXES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDialingPermissionsHrsPrefixesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse])
                res.list_dialing_permissions_hrs_prefixes_response = out

        return res

    
    
    def list_ip_record(self, request: operations.ListIPRecordRequest) -> operations.ListIPRecordResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_IP_RECORD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/IpRecords"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIPRecordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIPRecordListIPRecordResponse])
                res.list_ip_record_response = out

        return res

    
    
    def list_source_ip_mapping(self, request: operations.ListSourceIPMappingRequest) -> operations.ListSourceIPMappingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.LIST_SOURCE_IP_MAPPING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/SourceIpMappings"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSourceIPMappingListSourceIPMappingResponse])
                res.list_source_ip_mapping_response = out

        return res

    
    
    def update_byoc_trunk(self, request: operations.UpdateByocTrunkRequest) -> operations.UpdateByocTrunkResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_BYOC_TRUNK_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ByocTrunks/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ByocTrunk])
                res.voice_v1_byoc_trunk = out

        return res

    
    
    def update_connection_policy(self, request: operations.UpdateConnectionPolicyRequest) -> operations.UpdateConnectionPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CONNECTION_POLICY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicy])
                res.voice_v1_connection_policy = out

        return res

    
    
    def update_connection_policy_target(self, request: operations.UpdateConnectionPolicyTargetRequest) -> operations.UpdateConnectionPolicyTargetResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_CONNECTION_POLICY_TARGET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget])
                res.voice_v1_connection_policy_connection_policy_target = out

        return res

    
    
    def update_dialing_permissions_settings(self, request: operations.UpdateDialingPermissionsSettingsRequest) -> operations.UpdateDialingPermissionsSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_DIALING_PERMISSIONS_SETTINGS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/v1/Settings"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDialingPermissionsSettingsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1DialingPermissionsDialingPermissionsSettings])
                res.voice_v1_dialing_permissions_dialing_permissions_settings = out

        return res

    
    
    def update_ip_record(self, request: operations.UpdateIPRecordRequest) -> operations.UpdateIPRecordResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_IP_RECORD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/IpRecords/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateIPRecordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1IPRecord])
                res.voice_v1_ip_record = out

        return res

    
    
    def update_source_ip_mapping(self, request: operations.UpdateSourceIPMappingRequest) -> operations.UpdateSourceIPMappingResponse:
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_SOURCE_IP_MAPPING_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/v1/SourceIpMappings/{Sid}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1SourceIPMapping])
                res.voice_v1_source_ip_mapping = out

        return res

    