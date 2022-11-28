

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://console.rumble.run/api/v1.0",
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
        
    
    
    
    def create_account_credential(self, request: operations.CreateAccountCredentialRequest) -> operations.CreateAccountCredentialResponse:
        r"""Create a new credential
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/credentials"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Credential])
                res.credential = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_account_key(self, request: operations.CreateAccountKeyRequest) -> operations.CreateAccountKeyResponse:
        r"""Create a new key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/keys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_account_organization(self, request: operations.CreateAccountOrganizationRequest) -> operations.CreateAccountOrganizationResponse:
        r"""Create a new organization
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/orgs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_account_user(self, request: operations.CreateAccountUserRequest) -> operations.CreateAccountUserResponse:
        r"""Create a new user account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/users"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_account_user_invite(self, request: operations.CreateAccountUserInviteRequest) -> operations.CreateAccountUserInviteResponse:
        r"""Create a new user account and send an email invite
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/users/invite"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAccountUserInviteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_scan(self, request: operations.CreateScanRequest) -> operations.CreateScanResponse:
        r"""Create a scan task for a given site
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}/scan", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateScanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def create_site(self, request: operations.CreateSiteRequest) -> operations.CreateSiteResponse:
        r"""Create a new site
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/sites"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_account_organization_export_token(self, request: operations.DeleteAccountOrganizationExportTokenRequest) -> operations.DeleteAccountOrganizationExportTokenResponse:
        r"""Removes the export token from the specified organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}/exportToken", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAccountOrganizationExportTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def export_assets_csv(self, request: operations.ExportAssetsCsvRequest) -> operations.ExportAssetsCsvResponse:
        r"""Asset inventory as CSV
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.csv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_assets_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_assets_cisco_csv(self, request: operations.ExportAssetsCiscoCsvRequest) -> operations.ExportAssetsCiscoCsvResponse:
        r"""Cisco serial number and model name export for Cisco Smart Net Total Care Service.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.cisco.csv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsCiscoCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_assets_cisco_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_assets_json(self, request: operations.ExportAssetsJSONRequest) -> operations.ExportAssetsJSONResponse:
        r"""Exports the asset inventory
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Asset]])
                res.assets = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_assets_jsonl(self, request: operations.ExportAssetsJsonlRequest) -> operations.ExportAssetsJsonlResponse:
        r"""Asset inventory as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.export_assets_jsonl_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_assets_nmap_xml(self, request: operations.ExportAssetsNmapXMLRequest) -> operations.ExportAssetsNmapXMLResponse:
        r"""Asset inventory as Nmap-style XML
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.nmap.xml"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAssetsNmapXMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.export_assets_nmap_xml_200_text_xml_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_events_json(self, request: operations.ExportEventsJSONRequest) -> operations.ExportEventsJSONResponse:
        r"""System event log as JSON
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/events.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportEventsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_events_jsonl(self, request: operations.ExportEventsJsonlRequest) -> operations.ExportEventsJsonlResponse:
        r"""System event log as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/events.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportEventsJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Event]])
                res.events = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_services_csv(self, request: operations.ExportServicesCsvRequest) -> operations.ExportServicesCsvResponse:
        r"""Service inventory as CSV
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/services.csv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportServicesCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_services_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_services_json(self, request: operations.ExportServicesJSONRequest) -> operations.ExportServicesJSONResponse:
        r"""Service inventory as JSON
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/services.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportServicesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Service]])
                res.services = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_services_jsonl(self, request: operations.ExportServicesJsonlRequest) -> operations.ExportServicesJsonlResponse:
        r"""Service inventory as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/services.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportServicesJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.export_services_jsonl_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_sites_csv(self, request: operations.ExportSitesCsvRequest) -> operations.ExportSitesCsvResponse:
        r"""Site list as CSV
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/sites.csv"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSitesCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_sites_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_sites_json(self, request: operations.ExportSitesJSONRequest) -> operations.ExportSitesJSONResponse:
        r"""Export all sites
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/sites.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSitesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Site]])
                res.sites = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_sites_jsonl(self, request: operations.ExportSitesJsonlRequest) -> operations.ExportSitesJsonlResponse:
        r"""Site list as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/sites.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSitesJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.export_sites_jsonl_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_wireless_csv(self, request: operations.ExportWirelessCsvRequest) -> operations.ExportWirelessCsvResponse:
        r"""Wireless inventory as CSV
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/wireless.csv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportWirelessCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_wireless_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def export_wireless_json(self, request: operations.ExportWirelessJSONRequest) -> operations.ExportWirelessJSONResponse:
        r"""Wireless inventory as JSON
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/wireless.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportWirelessJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Wireless]])
                res.wirelesses = out
        elif r.status_code == 401:
            pass

        return res

    
    def export_wireless_jsonl(self, request: operations.ExportWirelessJsonlRequest) -> operations.ExportWirelessJsonlResponse:
        r"""Wireless inventory as JSON line-delimited
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/wireless.jsonl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportWirelessJsonlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bytes])
                res.export_wireless_jsonl_200_application_json_binary_string = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_agents(self, request: operations.GetAccountAgentsRequest) -> operations.GetAccountAgentsResponse:
        r"""Get all agents across all organizations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/agents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Agent]])
                res.agents = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_credential(self, request: operations.GetAccountCredentialRequest) -> operations.GetAccountCredentialResponse:
        r"""Get credential details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/credentials/{credential_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Credential])
                res.credential = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_account_credentials(self, request: operations.GetAccountCredentialsRequest) -> operations.GetAccountCredentialsResponse:
        r"""Get all account credentials
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/credentials"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Credential]])
                res.credentials = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_key(self, request: operations.GetAccountKeyRequest) -> operations.GetAccountKeyResponse:
        r"""Get key details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/keys/{key_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_keys(self, request: operations.GetAccountKeysRequest) -> operations.GetAccountKeysResponse:
        r"""Get all active API keys
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/keys"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.APIKey]])
                res.api_keys = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_license(self, request: operations.GetAccountLicenseRequest) -> operations.GetAccountLicenseResponse:
        r"""Get license details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/license"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountLicenseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_organization(self, request: operations.GetAccountOrganizationRequest) -> operations.GetAccountOrganizationResponse:
        r"""Get organization details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_organizations(self, request: operations.GetAccountOrganizationsRequest) -> operations.GetAccountOrganizationsResponse:
        r"""Get all organization details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/orgs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountOrganizationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Organization]])
                res.organizations = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_sites(self, request: operations.GetAccountSitesRequest) -> operations.GetAccountSitesResponse:
        r"""Get all sites details across all organizations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/sites"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountSitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Site]])
                res.sites = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_tasks(self, request: operations.GetAccountTasksRequest) -> operations.GetAccountTasksResponse:
        r"""Get all task details across all organizations (up to 1000)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/tasks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Task]])
                res.tasks = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_user(self, request: operations.GetAccountUserRequest) -> operations.GetAccountUserResponse:
        r"""Get user details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def get_account_users(self, request: operations.GetAccountUsersRequest) -> operations.GetAccountUsersResponse:
        r"""Get all users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/users"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.User]])
                res.users = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_agent(self, request: operations.GetAgentRequest) -> operations.GetAgentResponse:
        r"""Get details for a single agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/agents/{agent_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Agent])
                res.agent = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_agents(self, request: operations.GetAgentsRequest) -> operations.GetAgentsResponse:
        r"""Get all agents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/agents"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Agent]])
                res.agents = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_asset(self, request: operations.GetAssetRequest) -> operations.GetAssetResponse:
        r"""Get asset details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/assets/{asset_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_assets(self, request: operations.GetAssetsRequest) -> operations.GetAssetsResponse:
        r"""Get all assets
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/assets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Asset]])
                res.assets = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_key(self, request: operations.GetKeyRequest) -> operations.GetKeyResponse:
        r"""Get API key details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/key"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_latest_agent_version(self) -> operations.GetLatestAgentVersionResponse:
        r"""Returns latest agent version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/releases/agent/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestAgentVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComponentVersion])
                res.component_version = out

        return res

    
    def get_latest_platform_version(self) -> operations.GetLatestPlatformVersionResponse:
        r"""Returns latest platform version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/releases/platform/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestPlatformVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComponentVersion])
                res.component_version = out

        return res

    
    def get_latest_scanner_version(self) -> operations.GetLatestScannerVersionResponse:
        r"""Returns latest scanner version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/releases/scanner/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestScannerVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ComponentVersion])
                res.component_version = out

        return res

    
    def get_organization(self, request: operations.GetOrganizationRequest) -> operations.GetOrganizationResponse:
        r"""Get organization details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_service(self, request: operations.GetServiceRequest) -> operations.GetServiceResponse:
        r"""Get service details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/services/{service_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_services(self, request: operations.GetServicesRequest) -> operations.GetServicesResponse:
        r"""Get all services
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Service]])
                res.services = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_site(self, request: operations.GetSiteRequest) -> operations.GetSiteResponse:
        r"""Get site details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_sites(self, request: operations.GetSitesRequest) -> operations.GetSitesResponse:
        r"""Get all sites
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/sites"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSitesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Site]])
                res.sites = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_task(self, request: operations.GetTaskRequest) -> operations.GetTaskResponse:
        r"""Get task details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_task_change_report(self, request: operations.GetTaskChangeReportRequest) -> operations.GetTaskChangeReportResponse:
        r"""Returns a temporary task change report data url
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}/changes", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaskChangeReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_task_scan_data(self, request: operations.GetTaskScanDataRequest) -> operations.GetTaskScanDataResponse:
        r"""Returns a temporary task scan data url
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}/data", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaskScanDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_tasks(self, request: operations.GetTasksRequest) -> operations.GetTasksResponse:
        r"""Get all tasks (last 1000)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/tasks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTasksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Task]])
                res.tasks = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_wireless_lan(self, request: operations.GetWirelessLanRequest) -> operations.GetWirelessLanResponse:
        r"""Get wireless LAN details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/wirelesss/{wireless_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWirelessLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Wireless])
                res.wireless = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_wireless_la_ns(self, request: operations.GetWirelessLaNsRequest) -> operations.GetWirelessLaNsResponse:
        r"""Get all wireless LANs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/wireless"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWirelessLaNsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Wireless]])
                res.wirelesses = out
        elif r.status_code == 401:
            pass

        return res

    
    def hide_task(self, request: operations.HideTaskRequest) -> operations.HideTaskResponse:
        r"""Signal that a completed task should be hidden
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}/hide", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HideTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def import_scan_data(self, request: operations.ImportScanDataRequest) -> operations.ImportScanDataResponse:
        r"""Import a scan data file into a site
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}/import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportScanDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def remove_account_credential(self, request: operations.RemoveAccountCredentialRequest) -> operations.RemoveAccountCredentialResponse:
        r"""Remove this credential
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/credentials/{credential_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAccountCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_account_key(self, request: operations.RemoveAccountKeyRequest) -> operations.RemoveAccountKeyResponse:
        r"""Remove this key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/keys/{key_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAccountKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def remove_account_organization(self, request: operations.RemoveAccountOrganizationRequest) -> operations.RemoveAccountOrganizationResponse:
        r"""Remove this organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAccountOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def remove_account_user(self, request: operations.RemoveAccountUserRequest) -> operations.RemoveAccountUserResponse:
        r"""Remove this user
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAccountUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def remove_agent(self, request: operations.RemoveAgentRequest) -> operations.RemoveAgentResponse:
        r"""Remove and uninstall an agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/agents/{agent_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_asset(self, request: operations.RemoveAssetRequest) -> operations.RemoveAssetResponse:
        r"""Remove an asset
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/assets/{asset_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_key(self, request: operations.RemoveKeyRequest) -> operations.RemoveKeyResponse:
        r"""Remove the current API key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/key"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def remove_service(self, request: operations.RemoveServiceRequest) -> operations.RemoveServiceResponse:
        r"""Remove a service
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/services/{service_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_site(self, request: operations.RemoveSiteRequest) -> operations.RemoveSiteResponse:
        r"""Remove a site and associated assets
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def remove_wireless_lan(self, request: operations.RemoveWirelessLanRequest) -> operations.RemoveWirelessLanResponse:
        r"""Remove a wireless LAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/wirelesss/{wireless_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveWirelessLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def reset_account_user_lockout(self, request: operations.ResetAccountUserLockoutRequest) -> operations.ResetAccountUserLockoutResponse:
        r"""Resets the user's lockout status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}/resetLockout", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetAccountUserLockoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def reset_account_user_mfa(self, request: operations.ResetAccountUserMfaRequest) -> operations.ResetAccountUserMfaResponse:
        r"""Resets the user's MFA tokens
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}/resetMFA", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetAccountUserMfaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def reset_account_user_password(self, request: operations.ResetAccountUserPasswordRequest) -> operations.ResetAccountUserPasswordResponse:
        r"""Sends the user a password reset email
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}/resetPassword", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetAccountUserPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def rotate_account_key(self, request: operations.RotateAccountKeyRequest) -> operations.RotateAccountKeyResponse:
        r"""Rotates the key secret
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/keys/{key_id}/rotate", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RotateAccountKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            pass

        return res

    
    def rotate_account_organization_export_token(self, request: operations.RotateAccountOrganizationExportTokenRequest) -> operations.RotateAccountOrganizationExportTokenResponse:
        r"""Rotates the organization export token and returns the updated organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}/exportToken/rotate", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RotateAccountOrganizationExportTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass

        return res

    
    def rotate_key(self, request: operations.RotateKeyRequest) -> operations.RotateKeyResponse:
        r"""Rotate the API key secret and return the updated key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org/key/rotate"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RotateKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 401:
            pass

        return res

    
    def snow_export_assets_csv(self, request: operations.SnowExportAssetsCsvRequest) -> operations.SnowExportAssetsCsvResponse:
        r"""Export an asset inventory as CSV for ServiceNow integration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.servicenow.csv"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SnowExportAssetsCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.snow_export_assets_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def snow_export_assets_json(self, request: operations.SnowExportAssetsJSONRequest) -> operations.SnowExportAssetsJSONResponse:
        r"""Exports the asset inventory as JSON
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets.servicenow.json"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SnowExportAssetsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AssetServiceNow]])
                res.asset_service_nows = out
        elif r.status_code == 401:
            pass

        return res

    
    def snow_export_services_csv(self, request: operations.SnowExportServicesCsvRequest) -> operations.SnowExportServicesCsvResponse:
        r"""Export a service inventory as CSV for ServiceNow integration
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/services.servicenow.csv"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SnowExportServicesCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.snow_export_services_csv_200_text_csv_binary_string = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def splunk_asset_sync_created_json(self, request: operations.SplunkAssetSyncCreatedJSONRequest) -> operations.SplunkAssetSyncCreatedJSONResponse:
        r"""Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets/sync/created/assets.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SplunkAssetSyncCreatedJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetsWithCheckpoint])
                res.assets_with_checkpoint = out
        elif r.status_code == 401:
            pass

        return res

    
    def splunk_asset_sync_updated_json(self, request: operations.SplunkAssetSyncUpdatedJSONRequest) -> operations.SplunkAssetSyncUpdatedJSONResponse:
        r"""Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets/sync/updated/assets.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SplunkAssetSyncUpdatedJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetsWithCheckpoint])
                res.assets_with_checkpoint = out
        elif r.status_code == 401:
            pass

        return res

    
    def stop_task(self, request: operations.StopTaskRequest) -> operations.StopTaskResponse:
        r"""Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}/stop", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_account_organization(self, request: operations.UpdateAccountOrganizationRequest) -> operations.UpdateAccountOrganizationResponse:
        r"""Update organization details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/orgs/{org_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass

        return res

    
    def update_account_user(self, request: operations.UpdateAccountUserRequest) -> operations.UpdateAccountUserResponse:
        r"""Update a user's details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{user_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def update_agent_site(self, request: operations.UpdateAgentSiteRequest) -> operations.UpdateAgentSiteResponse:
        r"""Update the site associated with agent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/agents/{agent_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAgentSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Agent])
                res.agent = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_asset_comments(self, request: operations.UpdateAssetCommentsRequest) -> operations.UpdateAssetCommentsResponse:
        r"""Update asset comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/assets/{asset_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAssetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_asset_tags(self, request: operations.UpdateAssetTagsRequest) -> operations.UpdateAssetTagsResponse:
        r"""Update asset tags
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/assets/{asset_id}/tags", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAssetTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Asset])
                res.asset = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_organization(self, request: operations.UpdateOrganizationRequest) -> operations.UpdateOrganizationResponse:
        r"""Update organization details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/org"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Organization])
                res.organization = out
        elif r.status_code == 401:
            pass

        return res

    
    def update_site(self, request: operations.UpdateSiteRequest) -> operations.UpdateSiteResponse:
        r"""Update a site definition
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/sites/{site_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Site])
                res.site = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_task(self, request: operations.UpdateTaskRequest) -> operations.UpdateTaskResponse:
        r"""Update task parameters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/tasks/{task_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTaskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Task])
                res.task = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def upgrade_agent(self, request: operations.UpgradeAgentRequest) -> operations.UpgradeAgentResponse:
        r"""Force an agent to update and restart
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/org/agents/{agent_id}/update", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpgradeAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    