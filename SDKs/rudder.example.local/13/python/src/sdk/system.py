import requests
from typing import Optional
from sdk.models import operations
from . import utils

class System:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def create_archive(self, request: operations.CreateArchiveRequest) -> operations.CreateArchiveResponse:
        r"""Create an archive
        Create new archive of the given kind
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/system/archives/{archiveKind}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateArchive200ApplicationJSON])
                res.create_archive_200_application_json_object = out

        return res

    
    def get_healthcheck_result(self) -> operations.GetHealthcheckResultResponse:
        r"""Get healthcheck
        Run and get the result of all checks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/healthcheck"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHealthcheckResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetHealthcheckResult200ApplicationJSON])
                res.get_healthcheck_result_200_application_json_object = out

        return res

    
    def get_status(self) -> operations.GetStatusResponse:
        r"""Get server status
        Get information about current server status
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/status"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStatus200ApplicationJSON])
                res.get_status_200_application_json_object = out

        return res

    
    def get_system_info(self) -> operations.GetSystemInfoResponse:
        r"""Get server information
        Get information about the server version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/info"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSystemInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSystemInfo200ApplicationJSON])
                res.get_system_info_200_application_json_object = out

        return res

    
    def get_zip_archive(self, request: operations.GetZipArchiveRequest) -> operations.GetZipArchiveResponse:
        r"""Get an archive as a ZIP
        Get an archive of the given kind as a zip
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/system/archives/{archiveKind}/zip/{commitId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetZipArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_zip_archive_200_application_octet_stream_binary_string = r.content

        return res

    
    def list_archives(self, request: operations.ListArchivesRequest) -> operations.ListArchivesResponse:
        r"""List archives
        List configuration archives
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/system/archives/{archiveKind}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListArchivesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListArchives200ApplicationJSON])
                res.list_archives_200_application_json_object = out

        return res

    
    def purge_software(self) -> operations.PurgeSoftwareResponse:
        r"""Trigger batch for cleaning unreferenced software
        Start the software cleaning batch asynchronously.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/maintenance/purgeSoftware"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PurgeSoftwareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PurgeSoftware200ApplicationJSON])
                res.purge_software_200_application_json_object = out

        return res

    
    def regenerate_policies(self) -> operations.RegeneratePoliciesResponse:
        r"""Trigger a new policy generation
        Trigger a full policy generation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/regenerate/policies"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RegeneratePoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RegeneratePolicies200ApplicationJSON])
                res.regenerate_policies_200_application_json_object = out

        return res

    
    def reload_all(self) -> operations.ReloadAllResponse:
        r"""Reload both techniques and dynamic groups
        Reload both techniques and dynamic groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/reload"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadAll200ApplicationJSON])
                res.reload_all_200_application_json_object = out

        return res

    
    def reload_groups(self) -> operations.ReloadGroupsResponse:
        r"""Reload dynamic groups
        Reload dynamic groups
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/reload/groups"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadGroups200ApplicationJSON])
                res.reload_groups_200_application_json_object = out

        return res

    
    def reload_techniques(self) -> operations.ReloadTechniquesResponse:
        r"""Reload techniques
        Reload techniques from local technique library
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/reload/techniques"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReloadTechniquesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReloadTechniques200ApplicationJSON])
                res.reload_techniques_200_application_json_object = out

        return res

    
    def restore_archive(self, request: operations.RestoreArchiveRequest) -> operations.RestoreArchiveResponse:
        r"""Restore an archive
        Restore an archive of the given kind for the given moment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/system/archives/{archiveKind}/restore/{archiveRestoreKind}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RestoreArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreArchive200ApplicationJSON])
                res.restore_archive_200_application_json_object = out

        return res

    
    def update_policies(self) -> operations.UpdatePoliciesResponse:
        r"""Trigger update of policies
        Update configuration policies if needed
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/update/policies"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdatePolicies200ApplicationJSON])
                res.update_policies_200_application_json_object = out

        return res

    