

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://voice.twilio.com",
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
        
    
    
    
    def create_byoc_trunk(self, request: operations.CreateByocTrunkRequest) -> operations.CreateByocTrunkResponse:
        base_url = operations.CREATE_BYOC_TRUNK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/ByocTrunks"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ByocTrunk])
                res.voice_v1_byoc_trunk = out

        return res

    
    def create_connection_policy(self, request: operations.CreateConnectionPolicyRequest) -> operations.CreateConnectionPolicyResponse:
        base_url = operations.CREATE_CONNECTION_POLICY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/ConnectionPolicies"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicy])
                res.voice_v1_connection_policy = out

        return res

    
    def create_connection_policy_target(self, request: operations.CreateConnectionPolicyTargetRequest) -> operations.CreateConnectionPolicyTargetResponse:
        base_url = operations.CREATE_CONNECTION_POLICY_TARGET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget])
                res.voice_v1_connection_policy_connection_policy_target = out

        return res

    
    def create_dialing_permissions_country_bulk_update(self, request: operations.CreateDialingPermissionsCountryBulkUpdateRequest) -> operations.CreateDialingPermissionsCountryBulkUpdateResponse:
        r"""Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
        """
        
        base_url = operations.CREATE_DIALING_PERMISSIONS_COUNTRY_BULK_UPDATE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/DialingPermissions/BulkCountryUpdates"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDialingPermissionsCountryBulkUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate])
                res.voice_v1_dialing_permissions_dialing_permissions_country_bulk_update = out

        return res

    
    def create_ip_record(self, request: operations.CreateIPRecordRequest) -> operations.CreateIPRecordResponse:
        base_url = operations.CREATE_IP_RECORD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/IpRecords"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateIPRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1IPRecord])
                res.voice_v1_ip_record = out

        return res

    
    def create_source_ip_mapping(self, request: operations.CreateSourceIPMappingRequest) -> operations.CreateSourceIPMappingResponse:
        base_url = operations.CREATE_SOURCE_IP_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/SourceIpMappings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1SourceIPMapping])
                res.voice_v1_source_ip_mapping = out

        return res

    
    def delete_archived_call(self, request: operations.DeleteArchivedCallRequest) -> operations.DeleteArchivedCallResponse:
        r"""Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
        """
        
        base_url = operations.DELETE_ARCHIVED_CALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/Archives/{Date}/Calls/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteArchivedCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_byoc_trunk(self, request: operations.DeleteByocTrunkRequest) -> operations.DeleteByocTrunkResponse:
        base_url = operations.DELETE_BYOC_TRUNK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ByocTrunks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_connection_policy(self, request: operations.DeleteConnectionPolicyRequest) -> operations.DeleteConnectionPolicyResponse:
        base_url = operations.DELETE_CONNECTION_POLICY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_connection_policy_target(self, request: operations.DeleteConnectionPolicyTargetRequest) -> operations.DeleteConnectionPolicyTargetResponse:
        base_url = operations.DELETE_CONNECTION_POLICY_TARGET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_ip_record(self, request: operations.DeleteIPRecordRequest) -> operations.DeleteIPRecordResponse:
        base_url = operations.DELETE_IP_RECORD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/IpRecords/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIPRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_source_ip_mapping(self, request: operations.DeleteSourceIPMappingRequest) -> operations.DeleteSourceIPMappingResponse:
        base_url = operations.DELETE_SOURCE_IP_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/SourceIpMappings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def fetch_byoc_trunk(self, request: operations.FetchByocTrunkRequest) -> operations.FetchByocTrunkResponse:
        base_url = operations.FETCH_BYOC_TRUNK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ByocTrunks/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ByocTrunk])
                res.voice_v1_byoc_trunk = out

        return res

    
    def fetch_connection_policy(self, request: operations.FetchConnectionPolicyRequest) -> operations.FetchConnectionPolicyResponse:
        base_url = operations.FETCH_CONNECTION_POLICY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicy])
                res.voice_v1_connection_policy = out

        return res

    
    def fetch_connection_policy_target(self, request: operations.FetchConnectionPolicyTargetRequest) -> operations.FetchConnectionPolicyTargetResponse:
        base_url = operations.FETCH_CONNECTION_POLICY_TARGET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget])
                res.voice_v1_connection_policy_connection_policy_target = out

        return res

    
    def fetch_dialing_permissions_country(self, request: operations.FetchDialingPermissionsCountryRequest) -> operations.FetchDialingPermissionsCountryResponse:
        r"""Retrieve voice dialing country permissions identified by the given ISO country code
        """
        
        base_url = operations.FETCH_DIALING_PERMISSIONS_COUNTRY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/DialingPermissions/Countries/{IsoCode}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDialingPermissionsCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance])
                res.voice_v1_dialing_permissions_dialing_permissions_country_instance = out

        return res

    
    def fetch_dialing_permissions_settings(self, request: operations.FetchDialingPermissionsSettingsRequest) -> operations.FetchDialingPermissionsSettingsResponse:
        r"""Retrieve voice dialing permissions inheritance for the sub-account
        """
        
        base_url = operations.FETCH_DIALING_PERMISSIONS_SETTINGS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Settings"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchDialingPermissionsSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1DialingPermissionsDialingPermissionsSettings])
                res.voice_v1_dialing_permissions_dialing_permissions_settings = out

        return res

    
    def fetch_ip_record(self, request: operations.FetchIPRecordRequest) -> operations.FetchIPRecordResponse:
        base_url = operations.FETCH_IP_RECORD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/IpRecords/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchIPRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1IPRecord])
                res.voice_v1_ip_record = out

        return res

    
    def fetch_source_ip_mapping(self, request: operations.FetchSourceIPMappingRequest) -> operations.FetchSourceIPMappingResponse:
        base_url = operations.FETCH_SOURCE_IP_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/SourceIpMappings/{Sid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1SourceIPMapping])
                res.voice_v1_source_ip_mapping = out

        return res

    
    def list_byoc_trunk(self, request: operations.ListByocTrunkRequest) -> operations.ListByocTrunkResponse:
        base_url = operations.LIST_BYOC_TRUNK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/ByocTrunks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListByocTrunkListByocTrunkResponse])
                res.list_byoc_trunk_response = out

        return res

    
    def list_connection_policy(self, request: operations.ListConnectionPolicyRequest) -> operations.ListConnectionPolicyResponse:
        base_url = operations.LIST_CONNECTION_POLICY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/ConnectionPolicies"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConnectionPolicyListConnectionPolicyResponse])
                res.list_connection_policy_response = out

        return res

    
    def list_connection_policy_target(self, request: operations.ListConnectionPolicyTargetRequest) -> operations.ListConnectionPolicyTargetResponse:
        base_url = operations.LIST_CONNECTION_POLICY_TARGET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConnectionPolicyTargetListConnectionPolicyTargetResponse])
                res.list_connection_policy_target_response = out

        return res

    
    def list_dialing_permissions_country(self, request: operations.ListDialingPermissionsCountryRequest) -> operations.ListDialingPermissionsCountryResponse:
        r"""Retrieve all voice dialing country permissions for this account
        """
        
        base_url = operations.LIST_DIALING_PERMISSIONS_COUNTRY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/DialingPermissions/Countries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDialingPermissionsCountryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDialingPermissionsCountryListDialingPermissionsCountryResponse])
                res.list_dialing_permissions_country_response = out

        return res

    
    def list_dialing_permissions_hrs_prefixes(self, request: operations.ListDialingPermissionsHrsPrefixesRequest) -> operations.ListDialingPermissionsHrsPrefixesResponse:
        r"""Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
        """
        
        base_url = operations.LIST_DIALING_PERMISSIONS_HRS_PREFIXES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListDialingPermissionsHrsPrefixesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse])
                res.list_dialing_permissions_hrs_prefixes_response = out

        return res

    
    def list_ip_record(self, request: operations.ListIPRecordRequest) -> operations.ListIPRecordResponse:
        base_url = operations.LIST_IP_RECORD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/IpRecords"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListIPRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListIPRecordListIPRecordResponse])
                res.list_ip_record_response = out

        return res

    
    def list_source_ip_mapping(self, request: operations.ListSourceIPMappingRequest) -> operations.ListSourceIPMappingResponse:
        base_url = operations.LIST_SOURCE_IP_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/SourceIpMappings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSourceIPMappingListSourceIPMappingResponse])
                res.list_source_ip_mapping_response = out

        return res

    
    def update_byoc_trunk(self, request: operations.UpdateByocTrunkRequest) -> operations.UpdateByocTrunkResponse:
        base_url = operations.UPDATE_BYOC_TRUNK_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ByocTrunks/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateByocTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ByocTrunk])
                res.voice_v1_byoc_trunk = out

        return res

    
    def update_connection_policy(self, request: operations.UpdateConnectionPolicyRequest) -> operations.UpdateConnectionPolicyResponse:
        base_url = operations.UPDATE_CONNECTION_POLICY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConnectionPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicy])
                res.voice_v1_connection_policy = out

        return res

    
    def update_connection_policy_target(self, request: operations.UpdateConnectionPolicyTargetRequest) -> operations.UpdateConnectionPolicyTargetResponse:
        base_url = operations.UPDATE_CONNECTION_POLICY_TARGET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConnectionPolicyTargetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1ConnectionPolicyConnectionPolicyTarget])
                res.voice_v1_connection_policy_connection_policy_target = out

        return res

    
    def update_dialing_permissions_settings(self, request: operations.UpdateDialingPermissionsSettingsRequest) -> operations.UpdateDialingPermissionsSettingsResponse:
        r"""Update voice dialing permissions inheritance for the sub-account
        """
        
        base_url = operations.UPDATE_DIALING_PERMISSIONS_SETTINGS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/v1/Settings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDialingPermissionsSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1DialingPermissionsDialingPermissionsSettings])
                res.voice_v1_dialing_permissions_dialing_permissions_settings = out

        return res

    
    def update_ip_record(self, request: operations.UpdateIPRecordRequest) -> operations.UpdateIPRecordResponse:
        base_url = operations.UPDATE_IP_RECORD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/IpRecords/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateIPRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1IPRecord])
                res.voice_v1_ip_record = out

        return res

    
    def update_source_ip_mapping(self, request: operations.UpdateSourceIPMappingRequest) -> operations.UpdateSourceIPMappingResponse:
        base_url = operations.UPDATE_SOURCE_IP_MAPPING_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/v1/SourceIpMappings/{Sid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSourceIPMappingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceV1SourceIPMapping])
                res.voice_v1_source_ip_mapping = out

        return res

    