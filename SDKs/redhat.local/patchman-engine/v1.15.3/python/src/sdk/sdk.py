

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://redhat.local",
	"https://redhat.local/",
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
        
    
    
    
    def latest_package(self, request: operations.LatestPackageRequest) -> operations.LatestPackageResponse:
        r"""Show me metadata of selected package
        Show me metadata of selected package
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/packages/{package_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LatestPackageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersPackageDetailResponse])
                res.controllers_package_detail_response = out

        return res

    
    def deletesystem(self, request: operations.DeletesystemRequest) -> operations.DeletesystemResponse:
        r"""Delete system by inventory id
        Delete system by inventory id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/systems/{inventory_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletesystemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def detail_advisory(self, request: operations.DetailAdvisoryRequest) -> operations.DetailAdvisoryResponse:
        r"""Show me details an advisory by given advisory name
        Show me details an advisory by given advisory name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/advisories/{advisory_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DetailAdvisoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersAdvisoryDetailResponse])
                res.controllers_advisory_detail_response = out

        return res

    
    def detail_system(self, request: operations.DetailSystemRequest) -> operations.DetailSystemResponse:
        r"""Show me details about a system by given inventory id
        Show me details about a system by given inventory id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/systems/{inventory_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DetailSystemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersSystemDetailResponse])
                res.controllers_system_detail_response = out

        return res

    
    def export_advisories(self, request: operations.ExportAdvisoriesRequest) -> operations.ExportAdvisoriesResponse:
        r"""Export applicable advisories for all my systems
        Export applicable advisories for all my systems
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/patch/v1/export/advisories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAdvisoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ControllersAdvisoryInlineItem]])
                res.controllers_advisory_inline_items = out
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content

        return res

    
    def export_advisory_systems(self, request: operations.ExportAdvisorySystemsRequest) -> operations.ExportAdvisorySystemsResponse:
        r"""Export systems for my account
        Export systems for my account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/export/advisories/{advisory_id}/systems", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportAdvisorySystemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ControllersSystemInlineItem]])
                res.controllers_system_inline_items = out
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content

        return res

    
    def export_package_systems(self, request: operations.ExportPackageSystemsRequest) -> operations.ExportPackageSystemsResponse:
        r"""Show me all my systems which have a package installed
        Show me all my systems which have a package installed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/export/packages/{package_name}/systems", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportPackageSystemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ControllersPackageSystemItem]])
                res.controllers_package_system_items = out

        return res

    
    def export_packages(self, request: operations.ExportPackagesRequest) -> operations.ExportPackagesResponse:
        r"""Show me all installed packages across my systems
        Show me all installed packages across my systems
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/patch/v1/export/packages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportPackagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ControllersPackageItem]])
                res.controllers_package_items = out
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content

        return res

    
    def export_system_advisories(self, request: operations.ExportSystemAdvisoriesRequest) -> operations.ExportSystemAdvisoriesResponse:
        r"""Export applicable advisories for all my systems
        Export applicable advisories for all my systems
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/export/systems/{inventory_id}/advisories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSystemAdvisoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ControllersSystemAdvisoriesDbLookup]])
                res.controllers_system_advisories_db_lookups = out
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content

        return res

    
    def export_system_packages(self, request: operations.ExportSystemPackagesRequest) -> operations.ExportSystemPackagesResponse:
        r"""Show me details about a system packages by given inventory id
        Show me details about a system packages by given inventory id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/export/systems/{inventory_id}/packages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSystemPackagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ControllersSystemPackageInline]])
                res.controllers_system_package_inlines = out

        return res

    
    def export_systems(self, request: operations.ExportSystemsRequest) -> operations.ExportSystemsResponse:
        r"""Export systems for my account
        Export systems for my account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/patch/v1/export/systems"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSystemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ControllersSystemInlineItem]])
                res.controllers_system_inline_items = out
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content

        return res

    
    def list_advisories(self, request: operations.ListAdvisoriesRequest) -> operations.ListAdvisoriesResponse:
        r"""Show me all applicable advisories for all my systems
        Show me all applicable advisories for all my systems
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/patch/v1/advisories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAdvisoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersAdvisoriesResponse])
                res.controllers_advisories_response = out

        return res

    
    def list_advisory_systems(self, request: operations.ListAdvisorySystemsRequest) -> operations.ListAdvisorySystemsResponse:
        r"""Show me systems on which the given advisory is applicable
        Show me systems on which the given advisory is applicable
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/advisories/{advisory_id}/systems", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAdvisorySystemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersAdvisorySystemsResponse])
                res.controllers_advisory_systems_response = out

        return res

    
    def list_packages(self, request: operations.ListPackagesRequest) -> operations.ListPackagesResponse:
        r"""Show me all installed packages across my systems
        Show me all installed packages across my systems
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/patch/v1/packages/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPackagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersPackagesResponse])
                res.controllers_packages_response = out

        return res

    
    def list_system_advisories(self, request: operations.ListSystemAdvisoriesRequest) -> operations.ListSystemAdvisoriesResponse:
        r"""Show me advisories for a system by given inventory id
        Show me advisories for a system by given inventory id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/systems/{inventory_id}/advisories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSystemAdvisoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersSystemAdvisoriesResponse])
                res.controllers_system_advisories_response = out

        return res

    
    def list_systems(self, request: operations.ListSystemsRequest) -> operations.ListSystemsResponse:
        r"""Show me all my systems
        Show me all my systems
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/patch/v1/systems"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSystemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersSystemsResponse])
                res.controllers_systems_response = out

        return res

    
    def package_systems(self, request: operations.PackageSystemsRequest) -> operations.PackageSystemsResponse:
        r"""Show me all my systems which have a package installed
        Show me all my systems which have a package installed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/packages/{package_name}/systems", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageSystemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersPackageSystemsResponse])
                res.controllers_package_systems_response = out

        return res

    
    def package_versions(self, request: operations.PackageVersionsRequest) -> operations.PackageVersionsResponse:
        r"""Show me all package versions installed on some system
        Show me all package versions installed on some system
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/packages/{package_name}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersPackageVersionsResponse])
                res.controllers_package_versions_response = out

        return res

    
    def system_packages(self, request: operations.SystemPackagesRequest) -> operations.SystemPackagesResponse:
        r"""Show me details about a system packages by given inventory id
        Show me details about a system packages by given inventory id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/patch/v1/systems/{inventory_id}/packages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SystemPackagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersSystemPackageResponse])
                res.controllers_system_package_response = out

        return res

    
    def view_advisories_systems(self, request: operations.ViewAdvisoriesSystemsRequest) -> operations.ViewAdvisoriesSystemsResponse:
        r"""View advisory-system pairs for selected systems and advisories
        View advisory-system pairs for selected systems and advisories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/patch/v1/views/advisories/systems"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ViewAdvisoriesSystemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersAdvisoriesSystemsResponse])
                res.controllers_advisories_systems_response = out

        return res

    
    def view_systems_advisories(self, request: operations.ViewSystemsAdvisoriesRequest) -> operations.ViewSystemsAdvisoriesResponse:
        r"""View system-advisory pairs for selected systems and advisories
        View system-advisory pairs for selected systems and advisories
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/patch/v1/views/systems/advisories"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ViewSystemsAdvisoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ControllersSystemsAdvisoriesResponse])
                res.controllers_systems_advisories_response = out

        return res

    